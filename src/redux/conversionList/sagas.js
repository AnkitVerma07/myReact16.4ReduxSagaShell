import { call, put, takeLatest, select } from "redux-saga/effects";
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
import {
  getConversionList,
  getOrgSearch,
  conversionPrepExport,
  validateSetupCall,
  startConversionCall,
  startValidateData,
  startWipeResetConversion
} from "./api";

function* storeConversionListInfo({ payload }) {
  try {
    let response = yield call(getConversionList);

    const breakOutsString = breakout => {
      let temp = [];
      if (breakout.cassandra) {
        temp.push(`${breakout.cassandra} cassandra`);
      }
      if (breakout.elastic) {
        temp.push(`${breakout.elastic} elastic`);
      }
      if (breakout.file) {
        temp.push(`${breakout.file} file`);
      }
      if (breakout.tres) {
        temp.push(`${breakout.tres} tres`);
      }
      return temp.join("/ ");
    };

    if (response.length > 0) {
      response = response.map(r => {
        return {
          id: r.dbid,
          date: r.submit,
          organization: r.dbid,
          status: r.status.toUpperCase(),
          runTime: r.runtime,
          breakouts: breakOutsString(r.breakouts),
          donors: r.donor,
          transactions: r.transaction,
          results: r.result
        };
      });
    }
    return yield put(grabConversionListSuccess({ response }));
  } catch (e) {
    return yield put(grabConversionListFail({ error: e.message }));
  }
}

function* storeOrgResultInfo({ payload }) {
  try {
    let response = yield call(getOrgSearch, payload);
    if (response.length > 0) {
      response = response.map(r => {
        return {
          id: r.id,
          orgId: r.id,
          name: r.name ? r.name.en_US : "",
          data_account: r.dataAccountTitle,
          version: r.appVersion,
          lrar: r.legacyId,
          clientOwnerName: r.clientOwnName,
          status: r.status
        };
      });
    }
    return yield put(grabOrgSearchSuccess({ response }));
  } catch (e) {
    return yield put(grabOrgSearchFail({ error: e.message }));
  }
}

function* storeConversionPrep({ payload }) {
  try {
    let response = yield call(conversionPrepExport);
    return yield put(exportConversionPrepSuccess({ response }));
  } catch (e) {
    return yield put(exportConversionPrepFail({ error: e.message }));
  }
}

function* storeValidateSetups({ payload }) {
  try {
    let response = yield call(validateSetupCall);
    return yield put(validateSetupsSuccess({ response }));
  } catch (e) {
    return yield put(validateSetupsFail({ error: e.message }));
  }
}

function* storeStartConversion({ payload }) {
  try {
    let response = yield call(startConversionCall);
    return yield put(startConversionSuccess({ response }));
  } catch (e) {
    return yield put(startConversionFail({ error: e.message }));
  }
}

function* storeValidateData({ payload }) {
  try {
    let response = yield call(startValidateData);
    return yield put(validateDataSuccess({ response }));
  } catch (e) {
    return yield put(validateDataFail({ error: e.message }));
  }
}

function* storeWipeResetConversion({ payload }) {
  try {
    let response = yield call(startWipeResetConversion);
    return yield put(wipeResetConversionSuccess({ response }));
  } catch (e) {
    return yield put(wipeResetConversionFail({ error: e.message }));
  }
}

export default function* rsdListSaga() {
  yield takeLatest(grabConversionList, storeConversionListInfo);
  yield takeLatest(grabOrgSearch, storeOrgResultInfo);
  yield takeLatest(validateSetupsAction, storeValidateSetups);
  yield takeLatest(exportConversionPrep, storeConversionPrep);
  yield takeLatest(startConversionAction, storeStartConversion);
  yield takeLatest(validateDataAction, storeValidateData);
  yield takeLatest(wipeResetConversionAction, storeWipeResetConversion);
}
