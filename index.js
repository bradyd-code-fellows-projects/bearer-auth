'use strict';

const { startup } = require('./server.js');
// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => { console.log('successfully connected to db') })
  .catch ((e) => console.error(e.message));
startup();
