const Admin = require('../../models/Admin');

function getPropsFromAdminData(a) {
  let json = '{';
  if (!a.includes('_id')) json += '"_id":0,';
  a.forEach(e => json += `"${e}": "$${e}",`);
  json = json.replace(/.$/, '}')
  return JSON.parse(json);
}

module.exports = async (req, res, next) => {
  const options = req.query;
  const propsFromAdminData = ['email', 'firstName'];
  const limitOfPagination = 3;
  let { pageNumber, isSuperAdmin } = options;
  const pipeline = [
    { $project: getPropsFromAdminData(propsFromAdminData) },
    { $skip: limitOfPagination * Number(pageNumber) },
    { $limit: limitOfPagination },
  ]
  if (isSuperAdmin === 'true' || isSuperAdmin === 'false') {
    isSuperAdmin = isSuperAdmin === 'true' ? true : false;
    pipeline.unshift({ $match: { isSuperAdmin: isSuperAdmin } })
  }
  let resArray;
  try {
    resArray = await Admin.aggregate(pipeline)
  } catch (error) {
    console.error(`${error.message}`);
    return next(error);
  }
  res.status(200).send(resArray);
  return next();
};
