import express from 'express';
import EventEmitter from 'events';

const app = express();
const event = new EventEmitter();

let count = 0;
event.on("CountAPI", () => {
    count++;
    console.log("CountAPI event Called", count);
})

app.get("/", (req, res) => {
    res.send("Api called");
    event.emit("CountAPI"); //generate event
});

app.get("/search", (req, res) => {
    res.send("search Api called");
    event.emit("CountAPI"); //generate event
});

app.get("/update", (req, res) => {
    res.send("update Api called");
    event.emit("CountAPI"); //generate event
});


app.listen(5000, () => {
    console.log("Server in Started...");
});