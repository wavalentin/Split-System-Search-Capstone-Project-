// File to start database
const { Client } = require('pg')
const db = new Client({
  user: 'demo',
  host: 'localhost',
  database: 'split_systems_db',
  password: 'demo',
  port: 5432,
})

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})



module.exports = db;
