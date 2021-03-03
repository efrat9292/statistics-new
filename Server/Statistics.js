const mongoose = require('mongoose')

const stasSchema = mongoose.Schema({
    ipAddress: {
        type: String
    },
    ll:[]
})
module.exports = mongoose.model('Stastistic', stasSchema)