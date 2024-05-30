import express from "express";

const app = express()


// impotent--------
// this is req url: (http://localhost:5000/?name=satyajay)

// app.get("",(req, res)=>{
//     console.log("Data request by ==>", req.query.name)
//     res.send(`<h2>Hello This is  ${req.query.name}  Page</h2>`)
// })


// -------------
app.get("/",(req, res)=>{
    res.send("<h1>This is Home Page</h1>")
})
app.get("/about",(req, res)=>{
    res.send("<h1>This is About Page</h1>")
})
app.get("/contact",(req, res)=>{
    res.send("<h1>This is Contact Page</h1>")
})
app.get("/service",(req, res)=>{
    res.send("<h1>This is Service Page</h1>")
})







const port = 5000;
app.listen(port,()=>{
    console.log("Server is started...!")
});
