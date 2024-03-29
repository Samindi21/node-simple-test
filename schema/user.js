const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //table and column names
    FirstName: String,
    LastName:String,
    email:String
    
})

module.exports = mongoose.model('User',userSchema)