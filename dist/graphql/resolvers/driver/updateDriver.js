'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _driver = require('../../../models/driver');

var _driver2 = _interopRequireDefault(_driver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Mutation: {
        updateDriver: function updateDriver(root, params, options) {
            var update = _driver2.default.update({
                _id: params._id
            }, {
                first_name: params.first_name,
                last_name: params.last_name
            }).then(function (data) {
                return data.ok;
            }).catch(function (err) {
                console.log(err);
            });
            return { _id: update };
        }
    }
};