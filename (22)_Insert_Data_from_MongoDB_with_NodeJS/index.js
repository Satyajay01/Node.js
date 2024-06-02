import dbConnect from './Connection/MongoDB.js';

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        // for the only one data insert---
        // {"name": "Realme 8 5g", "brand": "Realme", "price": "380", "category": "mobile"}
        
        // for the multiple data insert---
        [
            {"name": "Realme 10", "brand": "Realme", "price": "370", "category": "mobile"},
            {"name": "s24 ultra", "brand": "samsung", "price": "400", "category": "mobile"},
            {"name": "Vivo V5", "brand": "Vivo", "price": "350", "category": "mobile"}
        ]
    );
    console.log('Result Insert...!', result);
}

insert()
