import { makeExecutableSchema } from 'graphql-tools';
import GraphQuery from './queries';
import GraphMutation from './mutations/index';
import driverType from './types/driver';
import advertiserType from './types/advertiser';
import Resolvers from './resolvers';


const SchemaDef = `
  schema{
    query: Query,
    mutation: Mutation
  }
`
export const Schema = makeExecutableSchema({
  typeDefs: [
    driverType ,
    advertiserType ,
    GraphMutation ,
    GraphQuery ,
    SchemaDef ,
  ],
  resolvers:Resolvers
})
