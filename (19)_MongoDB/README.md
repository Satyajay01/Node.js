# MongoDB
MongoDB is a NoSQL database in which data is stored as objects form.

#### Mongodb official website Url: 
```
https://www.mongodb.com 
```

#### Download MongoDB Installer: 
```
https://www.mongodb.com/try/download/community
```

#### MongoDB Shell Download: 
```
https://www.mongodb.com/try/download/shell
```


- **Note:**
MongoDBCompass_GUI is installed automatically with the MongoDB installer.


## MongoDB Shell/Command prompt/terminal



- 1. Start MongoDB Server:

```
 mongosh
```

- 2. Show Databases:

```
 show dbs
```

- Example Output:-

```
test> show dbs
admin   40.00 KiB
config  72.00 KiB
local   72.00 KiB
```


## Create new Database


- 1. Open MongoDB Shell:

```
 mongosh
```

- 2. Create new Database:

```
use DatabaseName
```

- Output:-

```
switched to db myNewDatabase
```

- 3. Create a Collection and Insert a Document:

```
db.myNewCollection.insertOne({ name: "Satyajay dibya", age: 22, country: "India" })
```

- Output:-
```
{
  acknowledged: true,
  insertedId: ObjectId('665b5cc3dd7440047172bd06')
}
```


### To Drop a database from MongoDB.


- 1. Switch to the Database:

```
use DatabaseName
```

- 2. Drop Database

```
db.dropDatabase()
```

- Output:-
```
{
    "dropped": "myDatabase",
    "ok": 1
}
```


## MongoDB CRUD Operations 

Performing CRUD (Create, Read, Update, Delete) operations in MongoDB using the MongoDB Shell (mongosh) involves the following commands:

- **Create**:  Adding new records.
- **Read**:  Retrieving or viewing records.
- **Update**:  Modifying existing records.
- **Delete**:  Removing records.


- **1. Create**
- Insert a Single Document:

```
db.collection.insertOne({ name: "Satyajay", age: 22, country: "India" })
```

- Insert Multiple Documents:

```
db.collection.insertMany([
    { name: "Satyajay", age: 22, country: "India" },
    { name: "Jay", age: 23, city: "India" }
])
```


- **2. Read**
- Find One Document:

```
db.collection.findOne({ name: "Satyajay" })
```

- Find All Documents:

```
db.collection.find().toArray()
```

- Find Documents with a Query:

```
db.collection.find({ age: { $gt: 22 } }).toArray()
```

- Find with Projection (only return specific fields):

```
db.collection.find({ age: { $gt: 22 } }, { projection: { name: 1, age: 1, _id: 0 } }).toArray()
```


- **3. Update**
- Update a Single Document:

```
db.collection.updateOne(
    { name: "Satyajay" },
    { $set: { age: 23 } }
)

- Update Multiple Documents:

```
db.collection.updateMany(
    { age: { $gt: 22 } },
    { $set: { status: "active" } }
)

- Replace a Document:

```
db.collection.replaceOne(
    { name: "Satyajay" },
    { name: "Satyajay dibya", age: 23, country: "India" }
)
```

- **4. Delete**
- Delete a Single Document:

```
db.collection.deleteOne({ name: "Jay})
```

- Delete Multiple Documents:

```
db.collection.deleteMany({ age: { $lt: 23 } })
```




