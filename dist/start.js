'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphqlServerExpress = require('graphql-server-express');

var _graphqlTools = require('graphql-tools');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _graphql = require('./graphql/');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGO_URL = 'mongodb://localhost:27017/carmonitize_db';
var PORT = 3001;
var start = exports.start = function _callee() {
  var app;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {

            _mongoose2.default.connect(MONGO_URL, {
              useMongoClient: true
            });
            app = (0, _express2.default)();


            app.use((0, _cors2.default)());

            app.use('/graphql', _bodyParser2.default.json(), (0, _graphqlServerExpress.graphqlExpress)({ schema: _graphql.Schema }));

            app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
              endpointURL: '/graphql'
            }));

            app.listen(PORT, function () {
              console.log('Visit localhost:' + PORT);
            });
          } catch (e) {
            console.log(e);
          }

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, null, undefined);
};