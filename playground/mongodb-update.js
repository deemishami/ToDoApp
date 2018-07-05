const {MongoClient, ObjectID} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "TodoApp";
MongoClient.connect(url, (err,client) => {
    if (err) {
        return console.log("Error:DB Connection");
    }
    console.log("Success:Connected to DB");
    const db = client.db(dbName);
    
    db.collection("users").findOneAndUpdate(
        { 
            _id: new ObjectID("5b377bcb9d1c7a30a50beb27")
        }, {
            $set : {
                age : 39,
                Name:  "Kareem Bajwa",
                location : "Lahore"
            } 
        }, {
            returnOriginal : false
        }).then((docs) => {
            console.log(docs);
        });
    client.close(); 
});