import styled from "styled-components";
import { Heading } from "@paciolan/primitives";
import Button from "@material-ui/core/Button/Button";

export const InputLabel = styled(Heading)`
  font-weight: 500;
  font-size: 14px;
  color: #333333;
  opacity: 0.85;
  margin-bottom: 0px;
  padding-left: ${props => props.padding || "0px"};
  padding-right: ${props => props.padding || "0px"};
`;

export const SearchButton = styled(Button)`
  font-weight: 300;
  width: 100px;
  font-size: 12px;
`;

export const Input = styled.input`
  width: ${props => props.width || "328px"};
  margin-left: 4px;
  margin-top: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 3px;
  height: 36px;
  border: 1px solid #979797;
  border-radius: 4px;
  font-size: 14px !important;
  color: #333333;

  ::placeholder {
    color: #737473;
    font-size: 12px !important;
  }
  :focus {
    outline: none !important;
    border: 1px solid #ef6c00;
    /* box-shadow: 0 0 10px #ef6c00; */
  }
`;
