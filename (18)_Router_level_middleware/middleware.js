const reqfilter = (req, res, next) =>{
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

export default reqfilter; 