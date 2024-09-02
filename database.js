const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  database: "sql12729133",
  user: "sql12729133",
  password: "NcpaKdttpS",
  port: 3306
});

connection.connect((error) => {
  if (error) {
    console.log("Unable to connect to the server");
  } else {
    console.log("Connection successful");
  }});

module.exports = connection;

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   database: "test",
//   user: "root",
//   password: "",
// });

// connection.connect((error) => {
//   if (error) {
//     console.log("Unable to connect to the server");
//   } else {
//     console.log("Connection successful");
//   }});

// module.exports = connection;

// const { Client } = require('pg');

// const client = new Client({
//   user: 'postgres.cfoseljvzrbzkowevqpu', // Replace with your actual user
//   host: 'aws-0-ap-south-1.pooler.supabase.com',
//   database: 'postgres',
//   password: '@Ajaykumar93922', // Replace with your actual password
//   port: 6543,
// });

// client.connect((err) => {
//   if (err) {
//     console.error('Unable to connect to the server:', err.message);
//   } else {
//     console.log('Connection successful');
//   }
// });

// module.exports = client;

// const { Client } = require('pg');

// const client = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT || 5432, // Default port for PostgreSQL
// });

// client.connect((err) => {
//   if (err) {
//     console.error('Unable to connect to the server:', err.message);
//   } else {
//     console.log('Connection successful');
//   }
// });

// module.exports = client;

