import express from 'express';

const server = express()

// user Postman application(https://www.postman.com/)

// API/ Endpoint / Route

    server.get('/',(req, res)=>{
        res.json({type: "GET"})

    })
    server.post('/',(req, res)=>{
        res.json({type: "POST"})

    })
    server.put('/',(req, res)=>{
        res.json({type: "PUT"})

    })
    server.delete('/',(req, res)=>{
        res.json({type: "DELETE"})

    })
    server.patch('/',(req, res)=>{
        res.json({type: "PATCH"})

    })




const port = 8080;
server.listen(port,()=>{
    console.log("Server is Started...!")

})