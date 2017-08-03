'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaign = new _mongoose2.default.Schema({
    campaign_name: {
        type: String
    },
    campaign_desc: {
        type: String
    },
    create_date_time: {
        type: Date

    }
});

exports.default = _mongoose2.default.model('campaign', campaign);