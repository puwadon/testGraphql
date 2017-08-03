import mongoose from 'mongoose'

let driver = new mongoose.Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String
    }

},{versionKey: false})

export default mongoose.model('driver',driver)

