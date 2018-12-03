import { connect } from "react-redux";
import actions from "../../redux/actions";

import ConversionView from "./ConversionView";

const mapState = state => ({
  data: state.conversionList.data || [],
  orgResults: state.orgList.data || [],
  orgList: state.orgList,
  conversionPrep: state.conversionPrep,
  validateSetup: state.validateSetup,
  startConversion: state.startConversion,
  validateData: state.validateData,
  wipeResetConversion: state.wipeResetConversion,
  orgTitle: "MSSTATE",
  conversionList: state.conversionList
});

const mapDispatch = {
  grabConversionList: actions.grabConversionList,
  validateSetupsAction: actions.validateSetupsAction,
  exportConversionPrep: actions.exportConversionPrep,
  startConversionAction: actions.startConversionAction,
  validateDataAction: actions.validateDataAction,
  wipeResetConversionAction: actions.wipeResetConversionAction,
  grabOrgSearch: actions.grabOrgSearch
};

export default connect(
  mapState,
  mapDispatch
)(ConversionView);
