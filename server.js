require('./db');

const express = require('express');
const bodyparser = require('body-parser');
const root_router = require('./router');
//const companyController = require('./controller/company.controller');
const PORT = 3000;


var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use(root_router);


app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    } 
    console.log('Express server started at port : 3000');
  //  companyController.get_all_company(); 
});
