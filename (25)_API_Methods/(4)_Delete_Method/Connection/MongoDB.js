import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// database name 
const database = 'e-comm';

// collection/table name
const products = 'products';



async function dbConnect() {
    // client Connection
    let result = await client.connect();

    // database continue
    let db = result.db(database);

    // Connection to the database Collections/Table
    return db.collection(products);

}

export default dbConnect;