export default `
    type Mutation{
        createDriver(      first_name: String ,
                           last_name: String , 
                           email: String ): driver
        
        updateDriver( _id: String! ,
                           first_name: String ,
                           last_name: String , 
                           email: String): driver 
        
    }
`