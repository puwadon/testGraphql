'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _driver = require('../../../models/driver');

var _driver2 = _interopRequireDefault(_driver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Mutation: {
        createDriver: function createDriver(root, params, options) {
            var create;
            return regeneratorRuntime.async(function createDriver$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return regeneratorRuntime.awrap(_driver2.default.insertMany({
                                first_name: params.first_name,
                                last_name: params.last_name
                            }).then(function (data) {
                                console.log(data);
                            }).catch(function (err) {
                                console.log(err);
                            }));

                        case 2:
                            create = _context.sent;

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, undefined);
        }
    }
};