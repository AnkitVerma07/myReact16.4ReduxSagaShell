import {
  grabConversionList,
  grabConversionListSuccess,
  grabConversionListFail,
  grabOrgSearch,
  grabOrgSearchSuccess,
  grabOrgSearchFail,
  exportConversionPrep,
  exportConversionPrepSuccess,
  exportConversionPrepFail,
  validateSetupsAction,
  validateSetupsSuccess,
  validateSetupsFail,
  startConversionAction,
  startConversionSuccess,
  startConversionFail,
  validateDataAction,
  validateDataSuccess,
  validateDataFail,
  wipeResetConversionAction,
  wipeResetConversionSuccess,
  wipeResetConversionFail
} from "./actions";

import { createReducer } from "../../global/utils/reduxHelpers";

const defaultState = {
  data: [],
  loading: false,
  callMade: false,
  errorMsg: null,
  emptyData: false
};

export const storeConversionList = createReducer(defaultState, {
  [grabConversionList]: (state, { type, payload }) => ({
    ...state,
    loading: true,
    callMade: true,
    errorMsg: null,
    emptyData: false
  }),
  [grabConversionListSuccess]: (state, { type, payload }) => ({
    ...state,
    data: payload.response && payload.response.length > 0 ? payload.response : [],
    errorMsg: null,
    loading: false
  }),
  [grabConversionListFail]: (state, { type, payload }) => ({
    ...state,
    errorMsg: payload.error,
    loading: false,
    emptyData: false
  })
});

export const storeOrgList = createReducer(defaultState, {
  [grabOrgSearch]: (state, { type, payload }) => ({
    ...state,
    loading: true,
    callMade: true,
    errorMsg: null,
    emptyData: false
  }),
  [grabOrgSearchSuccess]: (state, { type, payload }) => ({
    ...state,
    data: payload.response && payload.response.length > 0 ? payload.response : [],
    errorMsg: null,
    loading: false
  }),
  [grabOrgSearchFail]: (state, { type, payload }) => ({
    ...state,
    errorMsg: payload.error,
    loading: false,
    emptyData: false
  })
});

export const storeExportConversionPrep = createReducer(
  {
    ...defaultState,
    exportStatus: "PROGRESS",
    conversionPrepStatus: "PENDING",
    exportStarted: false
  },
  {
    [exportConversionPrep]: (state, { type, payload }) => ({
      ...state,
      loading: true,
      callMade: true,
      exportStarted: true,
      exportStatus: "PROGRESS",
      conversionPrepStatus: "PROGRESS",
      errorMsg: null,
      emptyData: false
    }),
    [exportConversionPrepSuccess]: (state, { type, payload }) => ({
      ...state,
      ...payload.response,
      exportStatus: "COMPLETED",
      conversionPrepStatus: "COMPLETED",
      errorMsg: null,
      loading: false
    }),
    [exportConversionPrepFail]: (state, { type, payload }) => ({
      ...state,
      errorMsg: payload.error,
      loading: false,
      emptyData: false
    })
  }
);

export const storeValidateSetups = createReducer(
  {
    ...defaultState,
    exportStatus: "PROGRESS",
    step2Uploaded: false
  },
  {
    [validateSetupsAction]: (state, { type, payload }) => ({
      ...state,
      loading: true,
      callMade: true,
      step2Uploaded: false,
      errorMsg: null,
      emptyData: false
    }),
    [validateSetupsSuccess]: (state, { type, payload }) => ({
      ...state,
      ...payload.response,
      exportStatus: "COMPLETED",
      errorMsg: null,
      loading: false
    }),
    [validateSetupsFail]: (state, { type, payload }) => ({
      ...state,
      errorMsg: payload.error,
      loading: false,
      emptyData: false
    })
  }
);

export const storeStartConversion = createReducer(
  {
    ...defaultState,
    conversionStarted: false,
    loadingCassandra: "PROGRESS",
    elasticSearch: "PROGRESS",
    convertingSubStatus: "PROGRESS"
  },
  {
    [startConversionAction]: (state, { type, payload }) => ({
      ...state,
      loading: true,
      conversionStarted: true,
      loadingCassandra: "PROGRESS",
      elasticSearch: "PROGRESS",
      convertingSubStatus: "PROGRESS",
      callMade: true,
      errorMsg: null,
      emptyData: false
    }),
    [startConversionSuccess]: (state, { type, payload }) => ({
      ...state,
      ...payload.response,
      loadingCassandra: "COMPLETED",
      elasticSearch: "COMPLETED",
      convertingSubStatus: "COMPLETED",
      errorMsg: null,
      loading: false
    }),
    [startConversionFail]: (state, { type, payload }) => ({
      ...state,
      errorMsg: payload.error,
      loading: false,
      emptyData: false
    })
  }
);

export const storeValidateData = createReducer(
  {
    ...defaultState,
    dataValidationStatus: "PROGRESS",
    dataValidationStarted: false
  },
  {
    [validateDataAction]: (state, { type, payload }) => ({
      ...state,
      loading: true,
      callMade: true,
      dataValidationStarted: true,
      errorMsg: null,
      emptyData: false
    }),
    [validateDataSuccess]: (state, { type, payload }) => ({
      ...state,
      ...payload.response,
      dataValidationStatus: "COMPLETED",
      errorMsg: null,
      loading: false
    }),
    [validateDataFail]: (state, { type, payload }) => ({
      ...state,
      errorMsg: payload.error,
      loading: false,
      emptyData: false
    })
  }
);

export const wipeResetConversionData = createReducer(
  {
    ...defaultState
  },
  {
    [wipeResetConversionAction]: (state, { type, payload }) => ({
      ...state,
      loading: true,
      callMade: true,
      errorMsg: null,
      emptyData: false
    }),
    [wipeResetConversionSuccess]: (state, { type, payload }) => ({
      ...state,
      ...payload.response,
      errorMsg: null,
      loading: false
    }),
    [wipeResetConversionFail]: (state, { type, payload }) => ({
      ...state,
      errorMsg: payload.error,
      loading: false,
      emptyData: false
    })
  }
);
