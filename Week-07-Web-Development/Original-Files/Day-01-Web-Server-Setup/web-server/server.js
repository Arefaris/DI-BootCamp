const express = require("express");
const usersRouter = require('./routes/usersRouter.js')
const productsRouter = require('./routes/productsRouter.js')
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** midlleware - function */
app.use("/", express.static(__dirname + "/public"));

/** body-parser */
app.use(express.json());
// app.use(express.urlencoded())

app.use('/api/users',usersRouter)
app.use('/api', productsRouter)

/**
 * app.get
 * app.post
 * app.delete
 * app.put
 */

/**
 * API -
 */

/**
 * CRUD - Create, Read, Update, Delete
 * RESTful API
 * Create - POST
 * Read - GET
 * Update - PUT
 * Delete - DELETE
 *
 *  /users - GET - get all users/ one user
 *  /users  -POST - create new user
 *  /users - PUT - update a user
 *  /users - DELETE - delete a user
 */

/**
 * server.js
 *  |_ config - connections to DB
 *  |_ models - queries to DB
 *  |_ controllers - functions implements - request / response
 *  |_ routes - routes endpoints
 *  |_ middlewares - funtions
 */