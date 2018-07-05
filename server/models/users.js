const mongoose = require("mongoose");

var user = mongoose.model('user',{
    email:{
        require : true,
        trim : true,
        type : String,
        minlenght : 1
    }
});

module.exports = {user};
