const graphql = require('graphql');
const graphqlHttp = require('express-graphql');
const express = require('express');
const users = require('./schema');
const app = express();

app.use('/user', graphqlHttp({schema:users, pretty: true}))
app.listen(3000, function() {
  console.log('Server on');
});
