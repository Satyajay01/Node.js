// (2) Router-level middleware

import express from 'express';
import reqfilter from './middleware.js'

const app = express();



app.get('/',(req, res)=>{
    res.send("<h1>Welcome to Home Page</h1>")
})


// apply middleware on single Route -----
// url: (http://localhost:5000/users?age=18)

// middleware on manually pages---
// app.get('/users',reqfilter,(req, res)=>{
    //     res.send("<h1>Users Page</h1>")
    // });


// ----------------------------

// Middleware is applied to a group of pages -----
const route = express.Router();
route.use(reqfilter)

route.get('/users',(req, res)=>{
    res.send("<h1>Users Page</h1>")
});
route.get('/data',(req, res)=>{
    res.send("<h1>Data Page</h1>")
});

// Middleware not applied
app.get('/test',(req, res)=>{
    res.send("<h1> Middleware not applied test page</h1>")
});

app.use('/',route);


const port = 5000;
app.listen(port,()=>{
    console.log("Server is Started...!");
})