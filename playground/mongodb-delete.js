const {MongoClient, ObjectID} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "TodoApp";
MongoClient.connect(url, (err,client) => {
    if (err) {
        return console.log("Error:DB Connection");
    }
    console.log("Success:Connected to DB");
    const db = client.db(dbName);
    
    // db.collection('users').deleteMany({Name: 'Ahmad Nadeem'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if (err) {
    //         console.log("Unable to delete the record", err);
    //     }
    // });

    db.collection('users').deleteOne({Name:'Muhammad Nadeem'}).then((result)=> {
        console.log(result);
    }); 
    client.close();
});