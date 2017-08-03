import driver from '../../../models/driver';

export default {
    Query:{
        driver: async (root , params , options)=>{
            let returnData = null ;
            let list = await driver.findOne({
                
            }).then((data)=>{
                console.log(data)
                returnData = data;
            }).catch((err)=>{
                console.log()
            })
        return returnData;
        }
    }
}