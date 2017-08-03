import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors';
import { Schema } from './graphql/';
import mongoose from 'mongoose';
const MONGO_URL = 'mongodb://localhost:27017/carmonitize_db';
const PORT = 3001;
export const start = async () => {
  try {

    mongoose.connect(MONGO_URL, {
      useMongoClient: true,
    });
    const app = express()

    app.use(cors())

    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: Schema }))

    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql'
    }))

    app.listen(PORT, () => {
      console.log(`Visit localhost:${PORT}`)
    })

  } catch (e) {
    console.log(e)
  }

}