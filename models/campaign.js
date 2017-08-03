import mongoose from 'mongoose'


let campaign = new mongoose.Schema({
    campaign_name :{
        type : String
    },
    campaign_desc : {
        type : String
    },
    create_date_time :{
        type : Date
        
    }
})

export default mongoose.model('campaign',campaign)
