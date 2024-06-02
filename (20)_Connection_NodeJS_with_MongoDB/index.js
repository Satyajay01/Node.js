import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// database name 
const database = 'e-comm';

// collection/table name
const products = 'products';



async function getData() 
{   
    // client Connection
    let result = await client.connect();

    // database continue
    let db = result.db(database);

    // Connection to the database Collections/Table
    let collection = db.collection(products);

    // Handling the Returned Promise
    let response = await collection.find({}).toArray()

    // print Collections/Table Data
    console.log(response);
}



getData() 
