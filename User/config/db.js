const mongoose = require('mongoose');
const URI = 'mongodb+srv://ezoder:tkpm20202021@cluster0.ewaw9.mongodb.net/ezorder-database';
//define a connection
exports.mongoose = async () => {
try {
    await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    })
console.log("mongoose is connected...");
}
catch (err){
    console.error(err);
}
}

