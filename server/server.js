const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');


const tripRoutes = require('./routes/trips');
const mongoose = require('mongoose');

const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* UNCOMMENT THIS BEFORE DEPLOYING!! */

/* // Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
}); */

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
  })
  
app.use('/api/trips', tripRoutes)

/* UNCOMMENT THIS BEFORE DEPLOYING!! */

/* // Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
}); */

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });


  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
  
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      //PORT 
  app.listen(process.env.PORT, () => {
  console.log('connect to db/listening on port', process.env.PORT)
})
  })
  .catch((error) => {
      console.log(error)
  })
}
