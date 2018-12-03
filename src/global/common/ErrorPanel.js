import React from "react";
import {
  ErrorClose,
  ErrorDiv,
  ErrorParaDiv,
  ErrorParaP,
  ErrorWarning
} from "../../pages/Conversion/ConversionView.styles";

const ErrorHandlerGlobal = props => {
  return (
    <React.Fragment>
      <ErrorDiv>
        <ErrorWarning className="fa fa-warning" />
        <ErrorParaDiv>
          <ErrorParaP>{props.children}</ErrorParaP>
        </ErrorParaDiv>
        <ErrorClose className="fa fa-times" onClick={props.onClick} />
      </ErrorDiv>
    </React.Fragment>
  );
};

export default ErrorHandlerGlobal;
