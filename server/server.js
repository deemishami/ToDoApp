const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");
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

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    var validId = ObjectID.isValid(id);
    if (!validId) {
        res.status(404).send();
    }
    todo.findById(id).then((doc) => {
       if (doc) {
           res.send({doc});
       } else {
        res.status(400).send();
       }     
    }).catch((e) => { res.status(400).send()});

    
})
app.listen(3000, () => {
    console.log("Server is running at 3000");
});