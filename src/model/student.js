const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    fname: {
        type: String,
        trim: true
    },
    lname: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true,
        required: true
    }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student