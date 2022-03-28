const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    msg: String,
    user:String,
    isSent: Boolean,
    created_date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('userScheme', userSchema)