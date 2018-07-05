const mongoose = require("mongoose");

var todo = mongoose.model('Todo', {
    text:{
        type: String
    },
    completed:{
        type: Boolean
    }, 
    CompletedAt: {
        type: Number
    }   
});
module.exports = {todo};