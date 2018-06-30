const {MongoClient, ObjectID} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "TodoApp";
MongoClient.connect(url, (err,client) => {
    if (err) {
        return console.log("Error:DB Connection");
    }
    console.log("Success:Connected to DB");
    const db = client.db(dbName);
    // db.collection("Todo").insertOne({
    //     text:"Something to do",
    //     completed:false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops), undefined, 2);
    // });
    db.collection("users").insertOne({
        Name:"Ahmad Nadeem",
        age:2,
        location:"Rawalpindi Pakistan"
    }, (err, result) => {
        if (err) {
            return console.log("unable to insert todo", err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()), undefined, 2);
    });
    client.close();
});