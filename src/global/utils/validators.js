/**
 *
 * @param {Object} data - The payload object that is going to be sent off to the POST api to create a new Conversion
 * @return {Object} The modified payload object that will remove JSON null values, pass true/false for sale and renewal and remove empty objects in PL or SB array
 */
export const validatePayload = data => {
  const ret = {};
  for (let key in data) {
    if (key === "priceLevels") {
      ret[key] = validatePL(data[key]);
    } else if (key === "seatBlocks") {
      ret[key] = validateSB(data[key]);
    } else if (key === "saleActive" || key === "renewalActive") {
      ret[key] = data[key];
    } else if (key === "paymentFrequency" && data[key] == 0) {
      ret[key] = 0;
    } else if (data[key]) ret[key] = data[key];
  }
  return ret;
};

/**
 *
 * @param {Array} data - The array of PriceLevels that need to be sent to POST api
 *
 * @return {Array} The array of PriceLevels where empty objects are filtered out and priceTypes array is validated
 */
const validatePL = data => {
  return data.reduce((acc, curr) => {
    const { priceLevelId, priceTypes, driveYear } = curr;
    if (priceLevelId.trim().length > 0 && priceTypes.length > 0 && driveYear != 0) {
      const newRow = { ...curr, priceTypes: validatePriceTypes(priceTypes) };
      acc.push(newRow);
    }
    return acc;
  }, []);
};

/**
 *
 * @param {Array} data - The array of SeatBlocks that need to be sent to POST api
 *
 * @return {Array} The array of SeatBlocks where empty objects are filtered out and priceTypes array is validated
 */
const validateSB = data => {
  return data.reduce((acc, curr) => {
    const { levelSectionId, priceTypes, driveYear } = curr;
    if (levelSectionId.trim().length > 0 && priceTypes.length > 0 && driveYear != 0) {
      const newRow = { ...curr, priceTypes: validatePriceTypes(priceTypes) };
      acc.push(newRow);
    }
    return acc;
  }, []);
};

/**
 *
 * @param {Arrray} priceTypes - The priceTypes that are part of either a priceLevels or seatBlocks configuration
 *
 * @return {Array} The formatted priceTypes that remove the first three characters "PT:" from priceTypes before sending to database
 */
const validatePriceTypes = priceTypes => {
  return priceTypes.reduce((acc, curr) => {
    const newPT = { ...curr, priceTypeId: curr.priceTypeId };
    acc.push(newPT);
    return acc;
  }, []);
};
