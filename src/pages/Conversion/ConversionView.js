import React from "react";
import OpCard from "../../global/common/OpCard";
import { constants } from "../../global/utils/constants";
import { ContentContainer, EntriesContainer, NoDataDiv, Virt } from "../DetailsList/DetailsList.styles";
import LoadingSpinner from "../../global/common/LoadingSpinner";
import orderBy from "lodash.orderby";
import { sortFunc } from "../DetailsList/utils";
import { valResultsConfig, valResultsMock } from "../../global/utils/tableConfig";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Switch from "@material-ui/core/Switch";
import { ExpansionPanelLabel, SecondStepperStatus, StepperStatus, SuccessBanner } from "./ConversionView.styles";
import StatusRate from "../../global/common/StatusRate";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import UploadCSVDisplay from "../../global/common/UploadCSVDisplay";
import ErrorPanel from "../../global/common/ErrorPanel";

class Conversionview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      step5Disabled: true,
      exportStarted: false,
      step2Uploaded: false,
      conversionStarted: false,
      dataValidationStarted: false,
      dragEntered: false,
      openDialog: false,
      step1: false,
      step2: false,
      step4: false,
      step5: false,
      step6: false,
      file: null,
      fileError: "",
      fileStatus: "UPLOAD",
      conversionTime: "6 Hours 32 minutes.",
      conversionStatus: "PENDING",
      dataValidationStatus: "PROGRESS",
      step2Text: "VALIDATE SETUPS"
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.validateSetup.exportStatus === "COMPLETED" && !state.step4) {
      return {
        activeStep: ++state.activeStep,
        openDialog: false
      };
    } else if (props.validateData.dataValidationStatus === "COMPLETED") {
      return {
        activeStep: ++state.activeStep
      };
    } else if (props.wipeResetConversion.status === 200) {
      return { activeStep: 0 };
    }
  }

  getConversionPageTitle = () => (
    <React.Fragment>
      {constants.ORG_CONVERT} {this.props.orgTitle}
    </React.Fragment>
  );
  getValidationResultTitle = () => <React.Fragment>{constants.VALIDATION_RESULTS}</React.Fragment>;

  handleStepChange = step => {
    this.setState(state => ({
      activeStep: state[step] ? state.activeStep - 1 : state.activeStep + 1,
      [step]: !state[step]
    }));
  };

  handleStep2Change = () => {
    this.setState(state => ({
      step2: !state.step2,
      step2Text: "IMPORT SETUPS"
    }));
  };

  handleStep5Change = () => {
    this.setState(state => ({
      step5: !state.step5,
      step5Disabled: false
    }));
  };

  getSteps = () => {
    return [
      <ExpansionPanelLabel>
        <p>Are the Pre-conversion steps done?</p>
        <Switch
          checked={this.state.step1}
          onChange={() => this.handleStepChange("step1")}
          value="checkedB"
          color="primary"
          label="Done"
        />
      </ExpansionPanelLabel>,
      <ExpansionPanelLabel>
        <p>Are Pac Fund setups created manually or by imports?</p>
        {this.state.step1 ? (
          <React.Fragment>
            <p>Manual</p>
            <Switch
              checked={this.state.step2}
              onChange={() => this.handleStep2Change()}
              value="checkedB"
              color="primary"
            />
            <p>Import</p>
          </React.Fragment>
        ) : null}
      </ExpansionPanelLabel>,
      "Convert structure, load Cassandra & load Elastic Search",
      <ExpansionPanelLabel>
        <p>Run Pac Fund bulk processes.</p>
      </ExpansionPanelLabel>,
      <ExpansionPanelLabel>
        <p>Load Data Warehouse.</p>
      </ExpansionPanelLabel>,
      <ExpansionPanelLabel>
        <p>Account spot check.</p>
      </ExpansionPanelLabel>
    ];
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return;
      case 1:
        return (
          <React.Fragment>
            <p>
              Pac Fund setups will be either manually entered or uploaded from a file. Validates the tFund Conversion
              settings vs. the Pac Fund setups to ensure that there is an equivalent Pac Fund setting for all of the
              settings defined in tFund Conversion settings screen.
            </p>
            <ExpansionPanelLabel>
              <Button onClick={() => this.setState({ openDialog: true })} color="primary">
                {this.state.step2Text}
              </Button>
              {this.props.validateSetup.step2Uploaded ? (
                <StatusRate status={this.props.validateSetup.exportStatus} />
              ) : null}
            </ExpansionPanelLabel>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <p>
              Starts the tFund to Pac Fund Conversion. Generates the data from tFUnd and translates into Pac Fund
              structure, then updates Cassandra, then updates Elastic Search.
            </p>
            <Button onClick={() => this.props.startConversionAction()} color="primary">
              START CONVERSION
            </Button>
            <ExpansionPanelLabel>
              <p>Converting tFund to PAC Fund Structure.</p>
              {this.props.startConversion.conversionStarted ? (
                <StatusRate status={this.props.startConversion.convertingSubStatus} />
              ) : null}
            </ExpansionPanelLabel>
            <ExpansionPanelLabel>
              <p>Loading Cassandra.</p>
              {this.props.startConversion.convertingSubStatus === "COMPLETED" ? (
                <StatusRate status={this.props.startConversion.loadingCassandra} />
              ) : null}
            </ExpansionPanelLabel>
            <ExpansionPanelLabel>
              <p>Loading Elastic Search.</p>
              {this.props.startConversion.loadingCassandra === "COMPLETED" ? (
                <StatusRate status={this.props.startConversion.elasticSearch} />
              ) : null}
            </ExpansionPanelLabel>
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <p>
              Log in to Pac Fund and kick off necessary bulk processes (Update Donor Info, Recalculate Priority Points).
              When they are finished, mark this step as Done.
            </p>
            <Switch
              checked={this.state.step4}
              onChange={() => this.handleStepChange("step4")}
              value="checkedB"
              color="primary"
            />
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <p>
              Execute external steps to load the Data Warehouse with all new Pac Fund data. When this step is finished,
              mark this step as Done and then run the data validation.
            </p>
            <Switch
              checked={this.state.step5}
              onChange={() => this.handleStep5Change()}
              value="checkedB"
              color="primary"
            />
            <ExpansionPanelLabel>
              <Button
                onClick={() => this.props.validateDataAction()}
                color="primary"
                disabled={this.state.step5Disabled}
              >
                VALIDATE DATA
              </Button>
              {this.props.validateData.dataValidationStarted ? (
                <StatusRate status={this.props.validateData.dataValidationStatus} />
              ) : null}
            </ExpansionPanelLabel>
          </React.Fragment>
        );
      case 5:
        return (
          <React.Fragment>
            <p>
              Pull up an account in tFund and in Pac Fund to do a side by side comparison. Also run a report in eQuery
              to view the same data. When finished validating that the data matches, mark this step as Done.
            </p>
            <Switch
              checked={this.state.step6}
              onChange={() => this.setState({ activeStep: ++this.state.activeStep, conversionStatus: "COMPLETED" })}
              value="checkedB"
              color="primary"
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  };

  getConversionContent = () => (
    <React.Fragment>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <ExpansionPanelLabel>
              Conversion Prep{" "}
              <StepperStatus>
                <StatusRate status={this.props.conversionPrep.conversionPrepStatus} />
              </StepperStatus>
            </ExpansionPanelLabel>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Stepper activeStep={0} orientation="vertical">
              <Step key="exportFile">
                <StepLabel>Export PAC Fund Settings</StepLabel>
                <StepContent>
                  <Typography>
                    Export a file of all PAC funds setups. This file will be imported to PAC fund during the conversion
                    that the setups dont need to be build manually.
                  </Typography>
                  <div>
                    <div>
                      <Button onClick={() => this.props.exportConversionPrep()} color="primary">
                        EXPORT
                      </Button>
                      {this.props.conversionPrep.exportStarted ? (
                        <StatusRate status={this.props.conversionPrep.exportStatus} />
                      ) : null}
                    </div>
                  </div>
                </StepContent>
              </Step>
            </Stepper>
          </Typography>
        </ExpansionPanelDetails>
        <ErrorPanel>
          <p>Error loading setup, headers do not match. Please review and fix any errors and return this step.</p>
        </ErrorPanel>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <ExpansionPanelLabel>
              Conversion{" "}
              <SecondStepperStatus>
                <StatusRate status={this.state.conversionStatus} />
              </SecondStepperStatus>
            </ExpansionPanelLabel>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div>
              <Stepper activeStep={this.state.activeStep} orientation="vertical">
                {this.getSteps().map((label, index) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>{this.getStepContent(index)}</Typography>
                      </StepContent>
                    </Step>
                  );
                })}
              </Stepper>
              {this.state.activeStep >= this.getSteps().length && (
                <SuccessBanner>
                  <Typography>
                    CONGRATULATIONS - Conversion complete, total run time: {this.state.conversionTime}
                  </Typography>
                  <Button onClick={() => this.props.wipeResetConversionAction()}>WIPE & RESET</Button>
                </SuccessBanner>
              )}
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );

  getValResultTable = () => {
    const defaultData = orderBy(valResultsMock.data, [sortFunc], ["asc"]);
    return (
      <Virt config={valResultsConfig} data={defaultData} tableHeight="medium" tableName="tfundsValidationResults" />
    );
  };

  getValidationResultContent = () => {
    return (
      <ContentContainer height={5}>
        {this.props.orgResults.loading ? <LoadingSpinner height={"-webkit-fill-available"} /> : null}
        {this.props.orgResults.emptyData ? <NoDataDiv>{constants.NO_DATA_FOUND}</NoDataDiv> : null}
        {this.getValResultTable()}
        <EntriesContainer>{1} entries</EntriesContainer>
      </ContentContainer>
    );
  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };

  handleSubmit = () => {
    this.props.validateSetupsAction({ file: this.state.file });
  };

  onDrop = async files => {
    this.setState({ fileStatus: "LOADING", file: files[0] });
    const fileName = files[0].name;
  };

  onDragEnter = () => {
    this.setState({
      dragEntered: true
    });
  };

  onDragLeave = () => {
    this.setState({
      dragEntered: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="simple-dialog-title">Import Setups</DialogTitle>
          <DialogContent>
            <UploadCSVDisplay
              onDrop={this.onDrop}
              onDragEnter={this.onDragEnter}
              onDragLeave={this.onDragLeave}
              highlightborder={this.state.dragEntered ? 1 : 0}
              status={this.state.fileStatus}
              fileError={this.state.fileError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <OpCard wide title={this.getConversionPageTitle()} content={this.getConversionContent()} />
        <OpCard wide title={this.getValidationResultTitle()} content={this.getValidationResultContent()} />
      </React.Fragment>
    );
  }
}

export default Conversionview;
