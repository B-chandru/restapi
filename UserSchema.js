const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name:{
        type: String,
        required : true
    },
    Age:{
        type: String,
        required: true
    },
    CreatedAt:{
        type: Date,
        default : Date.now
    }
})

module.exports =mongoose.model("user",UserSchema);