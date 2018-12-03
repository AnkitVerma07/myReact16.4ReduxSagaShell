import queryString from "query-string";
import { createSelector } from "reselect";

export const getView = props =>
  props.location && queryString.parse(props.location.search).view ? queryString.parse(props.location.search).view : "";
