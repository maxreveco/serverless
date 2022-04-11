const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('Users', new Schema({
    email: String,
    password: String,
    salt: String,
    rol: {
        type: String,
        default: 'user' //admin
    }
}))

module.exports = Users