import styled, { css } from "styled-components";
import { Text, Heading } from "@paciolan/primitives";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Dropzone from "react-dropzone";

export const ErrorDiv = styled.div`
  background-color: lightpink;
  border-left: 6px solid red;
  width: 95%;
  height: 50px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  padding: 15px 9px 17px 15px;
  margin-bottom: 15px;
`;

export const ErrorWarning = styled.i`
  color: red;
  font-size: 22px;
  margin-right: 13px;
`;

export const ErrorParaDiv = styled.div`
  font-family: "Roboto-Web", sans-serif !important;
  font-size: 14px;
  width: 100%;
`;

export const ErrorParaP = styled.p`
  font-family: "Roboto-Web", sans-serif !important;
  font-size: 14px;
  width: 100%;
  position: relative;
  bottom: 10px;
`;

export const ErrorClose = styled.i`
  color: red;
  font-size: 22px;
  margin-left: 3px;
`;

export const StepperStatus = styled.div`
  margin-left: 250px;
`;

export const SecondStepperStatus = styled.div`
  margin-left: 283px;
`;

export const ExpansionPanelLabel = styled.div`
  display: flex;
`;

export const SuccessBanner = styled.div`
  display: flex;
`;

export const FileExportContainer = styled.div`
  border-radius: 3px;
  background-color: rgba(230, 230, 230, 0.75);
  cursor: pointer;
`;

export const FileDropContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FileExportNameIconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 460px;
`;

export const FileExportName = styled.p`
  padding: 0px 6px;
  margin: 6px 0px;
  color: #ef6c00;
  font-size: 13px;
`;

export const FileExportIcon = styled.i`
  color: #9a9a9a;
  height: 16px;
  width: 16px;
  font-size: 16px;
`;

export const Header = styled(Heading)`
  font-size: 14px;
  color: #333333;
  opacity: 0.85;
  margin-bottom: 0px;
  padding: 8px 0px;
  font-weight: 500;
`;

export const DropContainer = styled(Dropzone)`
  border: ${props => (props.highlightborder ? "2px dashed #4caf50" : "2px dashed #979797")};
  border-radius: 4px;
  height: 120px;
  width: 1050px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DropContainerSuccess = styled(DropContainer)`
  width: 500px;
`;

export const DownloadTemplateButtonContainer = styled.form`
  padding-top: 15px;
  padding-bottom: 8px;
`;

export const DownloadTemplateButton = styled.button`
  color: #ef6c00;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none !important;
  text-align: right !important;
  border: none;
  background: none;
  padding: 0;
  &:hover {
    background-color: white;
  }
`;

export const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BrowseButton = styled(Button)`
  color: #ffffff !important;
  background-color: #2a69b7 !important;
  border-radius: 4px;
  height: 32px;
  width: 128px;
  font-size: 12px !important;
`;

export const ErrorText = styled(Text)`
  color: red;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 10px;
  white-space: pre-line;
`;

export const InstructionsHeader = styled(Text)`
  padding-top: 10px;
  font-weight: 500;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  height: 32px;

  > span {
    font-size: 12px !important;
  }
`;

export const SuccessFileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SuccessContent = styled.div`
  width: 500px;
  height: 160px;
`;

export const DonationCardContainer = styled.div`
  padding: 10px 20px 0px 20px;
  display: grid;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.justifycontent ? props.justifycontent : "center")};
  padding: 16px 0px 8px 0px;
  width: 1100px;
  align-self: center;
`;

export const BottomButton = styled(Button)`
  color: ${props => (props.textcolor ? `${props.textcolor} !important` : `null`)};
  background-color: ${props => (props.backgroundcolor ? `${props.backgroundcolor} !important` : `null`)};
  margin: 0px 3px !important;
  border-radius: 4px;
  height: 32px;
  width: 128px;
  font-size: 12px !important;
`;

export const BackButton = styled(BottomButton)`
  color: #2a69b7 !important;
  margin-right: 0px !important;
  position: relative;
  right: 32px;
`;
