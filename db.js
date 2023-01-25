const mongoose = require('mongoose');
require('dotenv').config()

console.log(process.env.MONGO_USER);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@serverlessinstance0.70c5p.mongodb.net/prod`, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
