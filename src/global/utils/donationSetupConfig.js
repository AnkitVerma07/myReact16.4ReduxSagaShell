export const priveLevelInstructions = [
  "The header row (Row 1) must exist in the file.",
  "Column A, use the Price Level CODE, not name.",
  "Column D-L are the donation amounts for that Price Level base on Price Type.",
  "Headers for columns D-L must follow the structure of \"PT:[price-type-code]\".",
  "If any column from E-L is unused, delete them.",
  "Do not include dollar signs ($) or commas (,) in donation amounts.",
  "Decimals can be included in donation amounts, but are not required. I.E. \"500.00\" or \"500\" is acceptable.",
  "Do not define a Price Level code unless it has an associated donation amount.",
  "The file must be saved in .csv format."
];

export const seatBlockInstructions = [
  "The header row (Row 1) must exist in the file.",
  "LEVEL:SECTION must always be defined.",
  "If all seats within a section require the same donation amount, row and seat data can be left blank.",
  "If all seats within a row require the same donation amount, seat data can be left blank.",
  "If either row-from or row-to is defined, both must be defined.",
  "If either seat-from or seat-to is defined, both must be defined.",
  "Columns H-P are the donation amounts for that Seatblock based on Price Type.",
  "Headers for columns H-P must follow the structure of \"PT:[price-type-code]\".",
  "If any column from I-P is unused, delete them.",
  "Do not include dollar signs ($) or commas (,) in donation amounts.",
  "Decimals can be included in donation amounts, but are not required. I.E. \"500.00\" or \"500\" is acceptable.",
  "Do not define a seatblock unless it has an associated donation amount.",
  "The file must be saved in .csv format."
];
