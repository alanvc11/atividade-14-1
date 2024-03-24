const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'alanbcdd',
  password: 'exatamente',
  database: 'pweb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;
