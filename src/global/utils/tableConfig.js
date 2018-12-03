export const conversionJobConfig = [
  { header: "Submitted", key: "date", width: 140, sort: true },
  { header: "Organization", key: "organization", width: 140, sort: true },
  { header: "Status", key: "status", width: 140, sort: true },
  { header: "Run Time", key: "runTime", width: 100, sort: true },
  { header: "Breakouts", key: "breakouts", width: 240, sort: true },
  { header: "Donors", key: "donors", width: 100, sort: true },
  { header: "Transactions", key: "transactions", width: 140, sort: true },
  { header: "Results", key: "results", width: 100, sort: false }
];

export const orgResultsConfig = [
  { header: "Organization ID", key: "orgId", width: 140, sort: true },
  { header: "Name", key: "name", width: 140, sort: true },
  { header: "Data Account", key: "data_account", width: 140, sort: true },
  { header: "Version", key: "version", width: 140, sort: true },
  { header: "LRAR", key: "lrar", width: 140, sort: true },
  { header: "Client Owner Name", key: "clientOwnerName", width: 140, sort: true },
  { header: "Status", key: "status", width: 140, sort: true },
  { header: "", key: "linkBtn", width: 80, sort: false }
];

export const valResultsConfig = [
  { header: "Category", key: "category", width: 140, sort: true },
  { header: "File", key: "file", width: 140, sort: true },
  { header: "Cassandra", key: "cassandra", width: 110, sort: true },
  { header: "Elastic Search", key: "elasticSearch", width: 140, sort: true },
  { header: "Data Warehouse", key: "dataWarehouse", width: 140, sort: true },
  { header: "Metrics", key: "metrics", width: 120, sort: true },
  { header: "Errors", key: "errors", width: 120, sort: true }
];

export const valResultsMock = {
  data: [
    {
      category: "Setups",
      file: "COMPLETED",
      cassandra: "COMPLETED",
      elasticSearch: "COMPLETED",
      dataWarehouse: "PROGRESS",
      metrics: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv",
      metricsUrl: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv",
      metricsLabel: "742 Records",
      errorsLabel: "3 Errors",
      errrosUrl: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv",
      errors: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    }
  ]
};

export const orgSearchMock = [
  {
    id: "241",
    orgId: "CHECKING_DB",
    name: "CHECKING_DB",
    data_account: "MSSTATEE72 (241)",
    version: "8.00.000",
    lrar: "swordfish",
    clientOwnerName: "Missisippi state",
    status: "Active"
  }
];

export const conversionPrepExportMock = {
  status: 200,
  data: []
};

export const conversionJobMock = {
  service: "ConversionJobs",
  version: "f13f63866102058f049c0608a20e656c26a6b29c",
  code: 200,
  elapsedTimeMillis: 272,
  message: "Success",
  data: [
    {
      date: "01/05/2019 06:52PM",
      organization: "Texas State (TXSTATE)",
      runTime: "6.56 h",
      status: "COMPLETED",
      breakouts: "1.58 h/ 1.26 h/ 3.87 h/ 1.12 h",
      donors: "18,851",
      transactions: "1,656,444",
      results: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    },
    {
      date: "01/05/2019 06:52PM",
      organization: "Texas State (TXSTATE)",
      runTime: "6.56 h",
      status: "COMPLETED",
      breakouts: "1.58 h/ 1.26 h/ 3.87 h/ 1.12 h",
      donors: "18,851",
      transactions: "1,656,444",
      results: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    },
    {
      date: "01/05/2019 06:52PM",
      organization: "Texas State (TXSTATE)",
      runTime: "6.56 h",
      status: "COMPLETED",
      breakouts: "1.58 h/ 1.26 h/ 3.87 h/ 1.12 h",
      donors: "18,851",
      transactions: "1,656,444",
      results: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    },
    {
      date: "01/05/2019 06:52PM",
      organization: "Texas State (TXSTATE)",
      runTime: "6.56 h",
      status: "COMPLETED",
      breakouts: "1.58 h/ 1.26 h/ 3.87 h/ 1.12 h",
      donors: "18,851",
      transactions: "1,656,444",
      results: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    },
    {
      date: "01/05/2019 06:52PM",
      organization: "Texas State (TXSTATE)",
      runTime: "6.56 h",
      status: "COMPLETED",
      breakouts: "1.58 h/ 1.26 h/ 3.87 h/ 1.12 h",
      donors: "18,851",
      transactions: "1,656,444",
      results: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    },
    {
      date: "01/05/2019 06:52PM",
      organization: "Texas State (TXSTATE)",
      runTime: "6.56 h",
      status: "COMPLETED",
      breakouts: "1.58 h/ 1.26 h/ 3.87 h/ 1.12 h",
      donors: "18,851",
      transactions: "1,656,444",
      results: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    },
    {
      date: "01/05/2019 06:52PM",
      organization: "Texas State (TXSTATE)",
      runTime: "6.56 h",
      status: "COMPLETED",
      breakouts: "1.58 h/ 1.26 h/ 3.87 h/ 1.12 h",
      donors: "18,851",
      transactions: "1,656,444",
      results: "https://s3-us-west-2.amazonaws.com/pac-rsd-operator-setup/seatBlocksExample.csv"
    }
  ],
  errors: {}
};
