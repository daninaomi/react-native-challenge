import mongoose, { Schema, mongo } from 'mongoose'

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
})

export default mongoose.model('user', userSchema)