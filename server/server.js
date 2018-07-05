const express = require("express");
const bodyParser = require("body-parser");

var {todo} = require("./models/todo");
var {user} = require("./models/users");
var {mongoose} = require("./db/mongoose");

var app = express();
// add todo
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
   var todo = new Todo({
    text : req.body.text
   });

   todo.save().then((doc) => {
       res.send(doc);
   }, (e) => {
       res.status(400).send(e);
   });
});

app.get('/todos', (req,res) => {
    todo.find().then((doc) => {
        res.send({ 
            doc
        });
    }, (e) => {
        res.send(e);
    });
})
app.listen(3000, () => {
    console.log("Server is running at 3000");
});