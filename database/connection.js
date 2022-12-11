const mysql = require('mysql');

const sql = 'SELECT * FROM emprendimientos';
console.log('Hola mundo');

function ejecutar() {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database : "marketplace"
    });
    
    con.connect(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }
        console.log('Conectado con el identificador ' + con.threadId);
    });
    
    con.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
    });
    
    con.end();
}
ejecutar()