const express = require('express');
// const router = express.Router();

//setup express app
const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests from routes file');
});
