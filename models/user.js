const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    created_date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('userScheme', userSchema)