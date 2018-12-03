import React from "react";
import {
  SuccessFileContainer,
  Header,
  FileExportContainer,
  FileExportNameIconContainer,
  FileExportIcon,
  FileExportName,
  DropContainerSuccess,
  UploadButtonContainer,
  BrowseButton,
  FileDropContainer,
  DropContainer,
  ErrorText,
  SuccessContent
} from "../../pages/Conversion/ConversionView.styles";
import LoadingSpinner from "./LoadingSpinner";

const UploadCSVDisplay = props => {
  switch (props.status) {
    case "UPLOAD":
      return (
        <React.Fragment>
          <Header>Upload a new file:</Header>
          <FileDropContainer>
            <DropContainer
              onDrop={props.onDrop}
              onDragEnter={props.onDragEnter}
              onDragLeave={props.onDragLeave}
              highlightborder={props.highlightborder}
            >
              <Header>{"Drag & drop here, or"}</Header>
              <UploadButtonContainer>
                <BrowseButton>Browse</BrowseButton>
              </UploadButtonContainer>
            </DropContainer>
          </FileDropContainer>
          <ErrorText>{props.fileError !== "" ? props.fileError : null}</ErrorText>
        </React.Fragment>
      );
    case "LOADING":
      return (
        <React.Fragment>
          <Header>Upload a new file:</Header>
          <FileDropContainer>
            <DropContainer>
              <LoadingSpinner />
            </DropContainer>
          </FileDropContainer>
        </React.Fragment>
      );
    case "SUCCESS":
      return (
        <SuccessFileContainer>
          <SuccessContent>
            <Header>Download current setup:</Header>
            <FileExportContainer>
              <FileExportNameIconContainer onClick={() => props.returnCSVFile()}>
                <FileExportIcon className="fa fa-file" />
                <FileExportName>Download CSV</FileExportName>
              </FileExportNameIconContainer>
            </FileExportContainer>
          </SuccessContent>
          <SuccessContent>
            <Header>Replace current setup:</Header>
            <DropContainerSuccess
              onDrop={props.onDrop}
              onDragEnter={props.onDragEnter}
              onDragLeave={props.onDragLeave}
              highlightborder={props.highlightborder}
            >
              <Header>{"Drag & drop here, or"}</Header>
              <UploadButtonContainer>
                <BrowseButton>Browse</BrowseButton>
              </UploadButtonContainer>
            </DropContainerSuccess>
          </SuccessContent>
        </SuccessFileContainer>
      );
    default:
      return (
        <React.Fragment>
          <Header>Upload a new file:</Header>
          <FileDropContainer>
            <DropContainer
              onDrop={props.onDrop}
              onDragEnter={props.onDragEnter}
              onDragLeave={props.onDragLeave}
              highlightborder={props.highlightborder}
            >
              <Header>{"Drag & drop here, or"}</Header>
              <UploadButtonContainer>
                <BrowseButton>Browse</BrowseButton>
              </UploadButtonContainer>
            </DropContainer>
          </FileDropContainer>
          <ErrorText>{props.fileError !== "" ? props.fileError : null}</ErrorText>
        </React.Fragment>
      );
  }
};

export default UploadCSVDisplay;
