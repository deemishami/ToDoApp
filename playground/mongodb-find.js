const {MongoClient, ObjectID} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "TodoApp";
MongoClient.connect(url, (err,client) => {
    if (err) {
        return console.log("Error:DB Connection");
    }
    console.log("Success:Connected to DB");
    const db = client.db(dbName);

    db.collection("users").find().count().then((count) => {
        console.log(`Total todos: ${count}`);
    }, (err) => {
        console.log("unable to fetch the todos", err);
    })
    client.close();
});