import dbConnect from './Connection/MongoDB.js';

const DeleteData = async () => {
    const data = await dbConnect();

    // single data Delete--- deleteOne 
    // multiple data Delete--- deleteMany

    const result = await data.deleteMany (

        { "name": "Vivo V5" } //  //data condition

    );
    if (result.acknowledged) {
        console.log('Result Deleted...!', result);
    }
    
}

DeleteData()

