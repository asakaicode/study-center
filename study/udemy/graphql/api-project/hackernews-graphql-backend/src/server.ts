import { ApolloServer, gql } from 'apollo-server'
import getNewsInfo from './schema/queries/getNewsInfo'

const typeDefs = gql`
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: getNewsInfo
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`${url}にてサーバーを起動中...`))