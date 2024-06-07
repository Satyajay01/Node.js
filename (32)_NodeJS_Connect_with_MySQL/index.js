import mysql from 'mysql';

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
});

// conn.commit((err) => {
//     if (err) {
//     }
//     else {
//         console.log("Connected...!")
//         }
//         });

conn.query("SELECT * FROM users", (err, result) => {
    if (err) {

        console.log("Error");
    }
    else{

        console.log("Result: ", result);
    }

})