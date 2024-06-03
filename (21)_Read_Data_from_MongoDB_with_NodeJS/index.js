import dbConnect from './Connection/MongoDB.js'

// handle with Promise method 1--
// dbConnect().then((res) => {
//     res.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// });


// handle with async, await method 2--

const ReadData = async ()=>{
    let data = await dbConnect();

        // single data Read--- findOne 
        // multiple data Read--- find

    data = await data.findOne({ name: 'M 40'});

    // data = await data.find({}).toArray();
    console.log(data)
}
ReadData()




