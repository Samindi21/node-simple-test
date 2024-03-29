const mongoose = require('mongoose');
const url = 'mongodb+srv://shashika:shashika@cluster0.j0cqjwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

exports.connect = () => {
    mongoose.connect(url).then(() => {
        console.log('Connected to DB');
        // }).catch(() => {
        //     console.log("Connected failed");
        // })
    }).catch((error) => {
        console.error('Connection failed:', error);
    })
}

