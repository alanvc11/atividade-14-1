const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  password: 'KkaUtuMwNYyoWFirkglfGJfiKZPEjUUJ',
  database: 'livros'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;
