import mysql from 'mysql';

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
});

conn.commit((err) => {
    if (err) {
        console.log("Error is connection...!");
    }
    else {
        console.log("Connected...!")
    }
});

export default conn;