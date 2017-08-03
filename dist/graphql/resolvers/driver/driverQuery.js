'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _driver2 = require('../../../models/driver');

var _driver3 = _interopRequireDefault(_driver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Query: {
        driver: function driver(root, params, options) {
            var returnData, list;
            return regeneratorRuntime.async(function driver$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            returnData = null;
                            _context.next = 3;
                            return regeneratorRuntime.awrap(_driver3.default.findOne({}).then(function (data) {
                                console.log(data);
                                returnData = data;
                            }).catch(function (err) {
                                console.log();
                            }));

                        case 3:
                            list = _context.sent;
                            return _context.abrupt('return', returnData);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, undefined);
        }
    }
};