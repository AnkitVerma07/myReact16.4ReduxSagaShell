import React from "react";
import styled from "styled-components";

const Spinner = styled.i`
  font-size: 40px;
  width: 40px;
  color: #6a6a6a;
  height: 40px;
`;

const LoadingContainer = styled.div`
  display: flex;
  height: ${props => (props.height ? props.height : "20px")};
  padding: ${props => (props.padding ? props.padding : "50px")};
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = props => {
  return (
    <LoadingContainer height={props.height} padding={props.padding}>
      <Spinner className="fa fa-refresh fa-spin fa-fw fa-2x" />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
