const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {

    const admin = new Admin(req.body)
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName', 'lastName', 'contact', 'username']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid update!'})
    }

    try{
        updates.forEach((update) => req.admin[update] = req.body[update])

        await req.admin.save()
        res.send(req.admin)
        return next()
    }
    catch(e){
    res.status(400).send(e)
    }
}