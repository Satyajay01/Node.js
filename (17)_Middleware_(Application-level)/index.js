// (1) Application-level middleware

import express from 'express';

const app = express();

    // url : (http://localhost:5000/?age=18)

    const reqfilter=(req, res, next)=>{
        if (!req.query.age)
        {
            res.send("<h3>Please provide your Age </h3>")
        }
        else if(req.query.age<=18){
            res.send("<h3>You can not access this page  </h3>")
        }
       else{
        next();
       }
    }

    app.use(reqfilter)

app.get('/',(req, res)=>{
    res.send("<h1>Welcome to Home Page</h1>")
})

// url: (http://localhost:5000/users?age=18)
app.get('/users',(req, res)=>{
    res.send("<h1>Users Page</h1>")
})


const port = 5000;
app.listen(port,()=>{
    console.log("Server is Started...!");
})