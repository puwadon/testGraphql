import driver from '../../../models/driver';

export default {
    Mutation:{
        createDriver: async(root , params , options)=>{
            const create = await driver.insertMany({
              first_name: params.first_name,
              last_name: params.last_name
            }).then((data)=>{
                console.log(data);
            }).catch((err)=>{
                console.log(err);
            })
    }
}
}