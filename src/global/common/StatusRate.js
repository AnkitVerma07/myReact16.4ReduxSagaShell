import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const GreenDot = styled.span`
  height: 14px;
  width: 14px;
  background-color: #9acd32;
  margin-right: 5px;
  border-radius: 50%;
  display: inline-block;
`;

const CircularProgressProgress = styled(CircularProgress)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const RedDot = styled.span`
  height: 14px;
  width: 14px;
  margin-right: 5px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
`;

const YellowDot = styled.span`
  height: 15px;
  width: 14px;
  margin-right: 5px;
  background-color: yellow;
  border-radius: 50%;
  display: inline-block;
`;

const GreyDot = styled.span`
  height: 15px;
  width: 14px;
  margin-right: 5px;
  background-color: grey;
  border-radius: 50%;
  display: inline-block;
`;

const StatusRate = props => {
  switch (props.status) {
    case "COMPLETED":
      return (
        <React.Fragment>
          <GreenDot /> Complete
        </React.Fragment>
      );
    case "FAILED":
      return (
        <React.Fragment>
          <RedDot /> Failed
        </React.Fragment>
      );
    case "PROGRESS":
      return (
        <React.Fragment>
          <CircularProgressProgress variant="indeterminate" disableShrink size={15} thickness={5} /> In Progress
        </React.Fragment>
      );
    case "PENDING":
      return (
        <React.Fragment>
          <GreyDot /> Pending
        </React.Fragment>
      );
    case "FINISHED":
      return (
        <React.Fragment>
          <YellowDot /> Finished
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <GreyDot /> Pending
        </React.Fragment>
      );
  }
};

export default StatusRate;
