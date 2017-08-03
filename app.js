const complession = require('compression');
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs'; 
import { MONGO_URL } from './config';
import {Schema} from './graphql';


let app = express();

  app.use(complession()) 
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));
 
     
    app.use('/graphiql', graphqlHTTP(req => ({
      schema: Schema,
      pretty: true,
      graphiql: true
    })));

    mongoose.connect(MONGO_URL, {
      useMongoClient: true,
    });

    let server = app.listen(7777, () => {
      console.log('Listening at port', server.address().port);
    });