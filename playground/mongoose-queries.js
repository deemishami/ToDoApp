const {mongoose} = require("./../server/db/mongoose");
const {todo} = require("./../server/models/todo");

var id = '5b3cc0b607faec46e8c795bb';

todo.find({
    _id : id
}).then((todos) => {
    console.log('Todos', todos);
});

todo.findOne({
    _id:id
}).then((todo) => {
    console.log('todo', todo);
})

todo.findById(id).then((doc) => {
    console.log('Todo', doc);
})


