// Using Node.js `require()`
const mongoose = require('mongoose');


async function connect(){
    try {
      await mongoose.connect('mongodb+srv://ezoder:tkpm20202021@cluster0.ewaw9.mongodb.net/ezorder-database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure'); 
    }
}

module.exports = { connect };

// 'mongodb+srv://ezoder:tkpm20202021@cluster0.ewaw9.mongodb.net/ezorder-database'

// mongodb://localhost:27017/123_test