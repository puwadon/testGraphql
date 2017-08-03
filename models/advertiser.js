import mongoose from 'mongoose'


let advertiser = new mongoose.Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String
    }
})

export default mongoose.model('advertiser',advertiser)
