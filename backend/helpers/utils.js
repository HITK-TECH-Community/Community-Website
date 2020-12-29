/**
 * @param {string} obj
 * @param {string} key
 * @param {string} defaultString
 * @returns {string}
 */
const replaceWithStrInObj = (obj, key, defaultString) =>
  obj[key] ? obj[key] : defaultString;

/**
 * @param {string} obj
 * @param {string} key
 * @returns {string}
 */
const replaceWithBlankStrInObj = (obj, key) =>
  replaceWithStrInObj(obj, key, '');

module.exports = { replaceWithBlankStrInObj, replaceWithStrInObj };
