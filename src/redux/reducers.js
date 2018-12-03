import { combineReducers } from "redux";
import {
  storeOrgList,
  storeConversionList,
  storeExportConversionPrep,
  storeValidateSetups,
  storeStartConversion,
  wipeResetConversionData,
  storeValidateData
} from "./conversionList/reducers";

const reducers = combineReducers({
  conversionList: storeConversionList,
  conversionPrep: storeExportConversionPrep,
  validateSetup: storeValidateSetups,
  startConversion: storeStartConversion,
  validateData: storeValidateData,
  wipeResetConversion: wipeResetConversionData,
  orgList: storeOrgList
});

export default reducers;
