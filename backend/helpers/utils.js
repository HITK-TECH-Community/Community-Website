/**
 *
 *
 * @param {string} obj
 * @param {string} key
 * @param {string} defaultString
 * @returns
 */
const replaceWithStrInObj = (obj, key, defaultString) =>
  obj[key] ? obj[key] : defaultString;

/**
 *
 *
 * @param {string} obj
 * @param {string} key
 * @returns
 */
const replaceWithBlankStrInObj = (obj, key) =>
  replaceWithStrInObj(obj, key, '');

module.exports = { replaceWithBlankStrInObj, replaceWithStrInObj };
