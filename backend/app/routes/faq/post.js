const express = require ("express");
const FAQ = require('../../models/faq');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
    try {        
        const {
            question,
            answer,
            isActive,
            tags,
            }=req.body;

        const faq = {};

        faq.question = question;
        faq.answer = answer;
        if(isActive) faq.isActive = isActive;
        if(tags) faq.tags = tags; 

        const Faq = new FAQ(faq)

        await Faq.save();
       
        res.json(Faq);
        res.status(200);
        return next();
    } catch (err) {
        const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
          statusCode: '500',
          message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
          errStack: err,
        });
        return next(error);
      }
}