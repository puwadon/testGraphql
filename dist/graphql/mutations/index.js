"use strict";

Object.defineProperty(exports, "__esModule", {
                   value: true
});
exports.default = "\n    type Mutation{\n        createDriver(      first_name: String ,\n                           last_name: String , \n                           email: String ): driver\n        \n        updateDriver( _id: String! ,\n                           first_name: String ,\n                           last_name: String , \n                           email: String): driver \n        \n    }\n";