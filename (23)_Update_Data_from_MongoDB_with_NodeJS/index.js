import dbConnect from './Connection/MongoDB.js';

const UpdateData = async () => {
    const data = await dbConnect();

    // single data Update--- updateOne 
    // multiple data Update--- updateMany

    const result = await data.updateMany(

        { "name": "Realme 10" }, //  //data condition
        { $set: {"name": "Realme 10 pro", "price": "460"} } // new Update info 

    );
    console.log('Result Updated...!', result);
}

UpdateData()

