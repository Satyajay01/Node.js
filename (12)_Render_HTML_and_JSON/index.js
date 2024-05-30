import express from 'express';

const app = express();

// res url (http://localhost:5000/?name=satyajay)

app.get("/", (req, res) => {
    console.log(req.query.name)
    res.send(`<div> <h1>Home page</h1>
    <h2>Nam: ${req.query.name} </h2> 
    <a href="/jsonfile">go to the json file page </a>
    </div>`)
});


app.get("/jsonfile", (req, res) => {

    res.send([{
        name: "Satyajay",
        contect: 111111111,
        address: "cg"
    },
    {
        name: "Jay",
        contect: 222222222,
        address: "cg"
    }])


});




const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is started...!")
})