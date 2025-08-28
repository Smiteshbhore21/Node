const mongoose = require('mongoose');

async function connectMongoDb(url) {
    //mongoose connection
    return mongoose.connect(url).then(
        () => console.log('MongoDB Connected')
    ).catch(err => {
        console.log('MongoDB Error : ', err);
    });
}

module.exports = {
    connectMongoDb,
};