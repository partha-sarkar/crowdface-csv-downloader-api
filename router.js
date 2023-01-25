const express = require('express');
const router = express.Router();

const converter = require("json-2-csv");
const fs = require("fs");

//company
const companyController = require('./controller/company.controller');

// router.get('/getcompanydata', async (req,res)=>{
//     res.status=200;
//     let comdata = await companyController.get_all_company(); 

// });

router.get('/download',async function(req,res){  
    
    //res.sendFile(__dirname+'/company.csv');
     let allcompanies = await  companyController.get_all_company(); 
    //let x =await companyController.createCsv(allcompanies);

    // setTimeout(()=>{
    // res.download(__dirname+'/company.csv');
    // },500);


        converter.json2csv(allcompanies, function(err,csv){
                    
            fs.writeFile('company.csv', csv, function (err) {
                if(err){
                    console.log(err);
                }     
                console.log('saved! r');    
                return res.redirect('/company.csv');
             });  


        });


        console.log('eeeeeee');

   
});


router.get('/company.csv', (req, res) => {
    res.sendFile(__dirname+'/company.csv');
});

module.exports = router
 