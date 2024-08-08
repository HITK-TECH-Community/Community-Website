const moongoose = require('mongoose')

const { Schema } = moongoose

const SubscriberSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique:true,
        required: true
    }
}, { timestamps: { createdAt: 'createdAt' } }
)

module.exports=moongoose.model("subscriber",SubscriberSchema)