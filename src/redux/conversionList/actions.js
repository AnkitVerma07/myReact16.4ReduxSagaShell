import { createAction } from "../../global/utils/reduxHelpers";

export const grabConversionList = createAction("tfunds-conversion/GET_CONVERSION_LIST");
export const grabConversionListSuccess = createAction("tfunds-conversion/GET_CONVERSION_LIST_SUCCESS");
export const grabConversionListFail = createAction("tfunds-conversion/GET_CONVERSION_LIST_FAIL");

export const grabOrgSearch = createAction("tfunds-conversion/GET_ORG_RESULT");
export const grabOrgSearchSuccess = createAction("tfunds-conversion/GET_ORG_RESULT_SUCCESS");
export const grabOrgSearchFail = createAction("tfunds-conversion/GET_ORG_RESULT_FAIL");

export const exportConversionPrep = createAction("tfunds-conversion/EXPORT_CONVERSION_PREP");
export const exportConversionPrepSuccess = createAction("tfunds-conversion/EXPORT_CONVERSION_PREP_SUCCESS");
export const exportConversionPrepFail = createAction("tfunds-conversion/EXPORT_CONVERSION_PREP_FAIL");

export const validateSetupsAction = createAction("tfunds-conversion/VALIDATE_SETUPS");
export const validateSetupsSuccess = createAction("tfunds-conversion/VALIDATE_SETUPS_SUCCESS");
export const validateSetupsFail = createAction("tfunds-conversion/VALIDATE_SETUPS_FAIL");

export const startConversionAction = createAction("tfunds-conversion/START_CONVERSION");
export const startConversionSuccess = createAction("tfunds-conversion/START_CONVERSION_SUCCESS");
export const startConversionFail = createAction("tfunds-conversion/START_CONVERSION_FAIL");

export const validateDataAction = createAction("tfunds-conversion/VALIDATE_DATA");
export const validateDataSuccess = createAction("tfunds-conversion/VALIDATE_DATA_SUCCESS");
export const validateDataFail = createAction("tfunds-conversion/VALIDATE_DATA_FAIL");

export const wipeResetConversionAction = createAction("tfunds-conversion/WIPE_RESET_CONVERSION");
export const wipeResetConversionSuccess = createAction("tfunds-conversion/WIPE_RESET_CONVERSION_SUCCESS");
export const wipeResetConversionFail = createAction("tfunds-conversion/WIPE_RESET_CONVERSION_FAIL");
