import express from 'express';
import conn from "./config/config.js"

const app = express();
app.use(express.json());

// Get API
app.get("/", (req, res) => {
    conn.query("SELECT * FROM users", (err, result) => {
        if (err) {
            res.send("Error...!")
        }
        else {
            res.send(result);
            console.log(result);
        }
    })
});

// Post API 
app.post("/", (req, res) => {
    // const data = { username: "SATYAJAY", password: "Abc@123", date: "06072024" }
    const data = req.body;
    conn.query("INSERT INTO users SET ? ", data, (error, result, fileds)=>{
        if (error) {
            res.send("Error inserting data: " + error.message);
        } else {
            res.send(result);
            console.log("Data inserted Successfully",result);
        }
    })
});


// Put API
// postman url: (http://localhost:5000/78)
app.put("/:id", (req, res) => {
    // const data = ["SATYAJAY01", "ABC@12345", "78"];
    const data = [req.body.username, req.body.password, req.params.id];
    conn.query("UPDATE users SET username = ?, password = ? WHERE id = ?", data, (error, result, fields) => {
        if (error) {
            res.send("Error updating data: " + error.message);
        } else {
            res.send(result);
            console.log("Data Updated Successfully", result);
        }
    });
});

// Delete API
// postman url: (http://localhost:5000/77)
app.delete("/:id", (req, res)=>{
    // const id = req.params.id;
    conn.query("DELETE FROM users WHERE id ="+req.params.id, (error, result, fields) => {
        if (error) {
            res.send("Error...! " + error.message);
        } else {
            res.send(result);
            console.log("Data Deleted Successfully", result);
        }
    })
})


app.listen(5000, () => {
    console.log("Server is Started...!");
})