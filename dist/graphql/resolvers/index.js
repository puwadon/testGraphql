'use strict';

Object.defineProperty(exports, "__esModule", {
                     value: true
});

var _lodash = require('lodash');

var _createDriver = require('./driver/createDriver');

var _createDriver2 = _interopRequireDefault(_createDriver);

var _updateDriver = require('./driver/updateDriver');

var _updateDriver2 = _interopRequireDefault(_updateDriver);

var _driverQuery = require('./driver/driverQuery');

var _driverQuery2 = _interopRequireDefault(_driverQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import updateUserAddress from './users/updateUserAddress';
import updateCommunityRef from './users/communityRef'
import userProfileQuery from './users/userProfileQuery';
import userAddressQuery from './users/userAddressQuery'; 

export default merge(updateUserProfile ,
                     updateUserAddress , 
                     updateCommunityRef , 
                     userProfileQuery , 
                     userAddressQuery , ); */

exports.default = (0, _lodash.merge)(_createDriver2.default, _updateDriver2.default, _driverQuery2.default);