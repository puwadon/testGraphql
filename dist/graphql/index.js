'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schema = undefined;

var _graphqlTools = require('graphql-tools');

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

var _index = require('./mutations/index');

var _index2 = _interopRequireDefault(_index);

var _driver = require('./types/driver');

var _driver2 = _interopRequireDefault(_driver);

var _advertiser = require('./types/advertiser');

var _advertiser2 = _interopRequireDefault(_advertiser);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchemaDef = '\n  schema{\n    query: Query,\n    mutation: Mutation\n  }\n';
var Schema = exports.Schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [_driver2.default, _advertiser2.default, _index2.default, _queries2.default, SchemaDef],
  resolvers: _resolvers2.default
});