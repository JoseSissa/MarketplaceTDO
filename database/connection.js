const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'marketplace'
});

connection.connect((error)=>{
    if(error){
        console.log(`El error de conexión es: ${error}`);
        return;
    }
    console.log(`Conectado a la db con xampp`);
});
connection.query('SELECT * FROM data', (err, results, fields) => {
    if(err) throw err;
    for (const elem of results) {
        console.log(elem);
    }
})
connection.end();

module.exports = connection;
 