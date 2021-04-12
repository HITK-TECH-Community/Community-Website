const mongoose = require('mongoose');

const { Schema } = mongoose;

const FAQSchema = new Schema ({
    question:
    {
        type: String,
        trim:true,
        required:true,
        unique:true
    },
    answer:
    {
        type: String,
        trim:true,
        required:true,
        unique:true
    },
    isActive:
    {
        type: Boolean,
    },
    tags:
    {
        type:[String]
    }
})

module.exports = mongoose.model('FAQ', FAQSchema)