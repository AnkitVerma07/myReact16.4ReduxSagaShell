import { conversionJobMock, orgSearchMock, conversionPrepExportMock } from "../../global/utils/tableConfig";

const TFC_API = "/tfc/api";

export const getConversionList = () => {
  let url = `${TFC_API}/conversions`;
  return fetch(url, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json());
};

export const getOrgSearch = payload => {
  let url = `${TFC_API}/organizations/${payload.search}`;
  return fetch(url, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json());
};

export const conversionPrepExport = () => {
  let url = ``;
  return conversionPrepExportMock;
  // return fetch(url, {
  //   method: "GET",
  //   credentials: "include"
  // }).then(res => res.json());
};

export const validateSetupCall = () => {
  let url = ``;
  return conversionPrepExportMock;
  // return fetch(url, {
  //   method: "GET",
  //   credentials: "include"
  // }).then(res => res.json());
};

export const startConversionCall = () => {
  let url = ``;
  return conversionPrepExportMock;
  // return fetch(url, {
  //   method: "GET",
  //   credentials: "include"
  // }).then(res => res.json());
};

export const startValidateData = () => {
  let url = ``;
  return conversionPrepExportMock;
  // return fetch(url, {
  //   method: "GET",
  //   credentials: "include"
  // }).then(res => res.json());
};

export const startWipeResetConversion = () => {
  let url = ``;
  return conversionPrepExportMock;
  // return fetch(url, {
  //   method: "GET",
  //   credentials: "include"
  // }).then(res => res.json());
};
