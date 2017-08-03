import driver from '../../../models/driver';

export default {
    Mutation:{
        updateDriver(root , params , options){
            const update = driver.update({
                _id: params._id
            },{
            first_name: params.first_name,
            last_name: params.last_name, 
            }).then((data)=>{
                return data.ok;
            }).catch((err)=>{
                console.log(err);
            });
        return {_id:update};
        }
    }
}