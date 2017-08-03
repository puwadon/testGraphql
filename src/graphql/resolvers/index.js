import { merge } from 'lodash';
import createDriver from './driver/createDriver'
import updateDriver from './driver/updateDriver'
import driverQuery from './driver/driverQuery'
/*import updateUserAddress from './users/updateUserAddress';
import updateCommunityRef from './users/communityRef'
import userProfileQuery from './users/userProfileQuery';
import userAddressQuery from './users/userAddressQuery'; 

export default merge(updateUserProfile ,
                     updateUserAddress , 
                     updateCommunityRef , 
                     userProfileQuery , 
                     userAddressQuery , ); */

export default merge(createDriver,updateDriver,driverQuery)
