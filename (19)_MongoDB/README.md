# MongoDB
MongoDB is a NoSQL database in which data is stored as objects from.

### Mongodb official website Url: 
```
https://www.mongodb.com 
```

### Download MongoDB Installer: 
```
https://www.mongodb.com/try/download/community
```

### MongoDB Shell Download: 
```
https://www.mongodb.com/try/download/shell
```


- Note:
MongoDBCompass_GUI is installed automatically with the MongoDB installer.


## MongoDB Shell/Command prompt/terminal


- Start MongoDB Server:

```
 mongosh
```

- Show Databases:

```
 show dbs
```

- Example Output:

```
test> show dbs
admin   40.00 KiB
config  72.00 KiB
local   72.00 KiB
```


## Create new Database


- Open MongoDB Shell:

```
 mongosh
```

- Create new Database:

```
use DatabaseName
```

- Output:-

```
switched to db myNewDatabase
```

- Create a Collection and Insert a Data:

```
db.myNewCollection.insertOne({ name: "Satyajay dibya", age: 22, city: "India" })
```

- Output:-
```
{
  acknowledged: true,
  insertedId: ObjectId('665b5cc3dd7440047172bd06')
}
```



