//Creating a router
const router = require('express').Router({ mergeParams: true });
//Getting addResource function which deals with posting data
const addaResource = require('./addResource');
//Route by default for post
router.post('/', addaResource);
//Exporting router to use it in "index.js"
module.exports = router;
