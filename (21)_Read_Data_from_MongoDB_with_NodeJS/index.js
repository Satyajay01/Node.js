import dbConnect from './Connection/MongoDB.js'

// handle with Promise method 1--
// dbConnect().then((res) => {
//     res.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// });


// handle with async, await method 2--

const main = async ()=>{
    let data = await dbConnect();
    // data = await data.find({ name: 'M 40'}).toArray();
    data = await data.find({}).toArray();
    console.warn(data)
}
main()
