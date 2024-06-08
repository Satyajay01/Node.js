import express from 'express';

const app = express();



app.get("/",(req, res)=>{
    res.send("<h1>This is Home Page</h1>");
});
app.get("/about",(req, res)=>{
    res.send("<h1>This is About Page</h1>");
});
app.get("/profile",(req, res)=>{
    res.send("<h1>This is Profile Page</h1>");
});




// Error handling express

// Writing error handlers
app.get("*",(req, res, next)=>{
    return next(new Error("Not implemented"));   // Show Error in the console 
});


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')  // Show Error in the User Interface
    }) 


app.listen(5000,()=>{
    console.log("Server is Started...!");
});