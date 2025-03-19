const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: 'String', required: true},
    password: {type: 'String', required: true},
    profilepicture: {type: 'String', required: false},
    wins: {type: 'Number', required: false, default: 0},
    losses: {type: 'Number', required: false, default: 0}
})

module.exports = mongoose.model('User', UserSchema)