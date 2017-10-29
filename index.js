const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const users = require('./schema')
const app = express()
const port = 3030;

app.use('/graphql', graphqlHTTP({
  schema:users,
  pretty: true,
  graphiql: true
}));

app.listen(port, function () {
  console.log('Listen on port :'+ port);
});
