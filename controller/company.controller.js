const company = require('../model/company');
const platform = require('../model/platform');

const converter = require("json-2-csv");
const fs = require("fs");


const companiesShared = require('../model/companiesShared');
const companiesViewed = require('../model/companiesViewed');
const companyTabFinance = require('../model/companyTabFinance');
const companyTabSummary = require('../model/companyTabSummary');
const companyTabTeam = require('../model/companyTabTeam');
const companyTabTechnology = require('../model/companyTabTechnology');


exports.get_all_company = async (req, reply) => {

     
     let allcompanies = await company.find();
    
        allcompanies = JSON.stringify(allcompanies);
        allcompanies = JSON.parse(allcompanies);
        
          
        for(let i=0; i < allcompanies.length; i++){  
          
          if(allcompanies[i].logo){
               delete(allcompanies[i].logo.contentType);
          }
          
          delete(allcompanies[i].tags);
          delete(allcompanies[i].highlights);
          delete(allcompanies[i].min_investment);
          delete(allcompanies[i].timeline);
          delete(allcompanies[i].__v);
          delete(allcompanies[i].left_to_invest);
          delete(allcompanies[i].max_investment);


           const pfrm =  await platform.findById(allcompanies[i].platform);
           allcompanies[i].platform = pfrm.name;           
           
           const csharedCount = await companiesShared.find({"company_id":allcompanies[i]._id}).count();
           allcompanies[i].shared=csharedCount;
           
           const visitCount = await companiesViewed.find({"company_id":allcompanies[i]._id}).count();
           allcompanies[i].visitcount=visitCount;  

            
           const financeTab = await companyTabFinance.find({"company_id":allcompanies[i]._id});     
           if(financeTab.length>0){
                allcompanies[i].financeTabRevenueYear=financeTab[0].tab_data.revenue[0].year;  
                allcompanies[i].financeTabRevenueValue=financeTab[0].tab_data.revenue[0].value;  
           }else{
                allcompanies[i].financeTabRevenueYear='NA';  
                allcompanies[i].financeTabRevenueValue='NA';  
           }   
           
           
           
           const summariesTab = await companyTabSummary.find({"company_id":allcompanies[i]._id});  
           if(summariesTab.length>0){

            allcompanies[i].summaryTabproduct = summariesTab[0].tab_data.product;
            allcompanies[i].summaryTabdaily_users = summariesTab[0].tab_data.daily_users;
            allcompanies[i].summaryTabpartnership = summariesTab[0].tab_data.partnership;
            allcompanies[i].summaryTabpatents = summariesTab[0].tab_data.patents;

           }else{
            allcompanies[i].summaryTabproduct = 'NA';
            allcompanies[i].summaryTabdaily_users = 'NA';
            allcompanies[i].summaryTabpartnership = 'NA';
            allcompanies[i].summaryTabpatents = 'NA';
           }
           



           const technologyTab = await companyTabTechnology.find({"company_id":allcompanies[i]._id});  
           if(technologyTab.length>0){
                allcompanies[i].technologyTab = technologyTab[0].tab_data.technology;
           }else{
               allcompanies[i].technologyTab = 'NA';
           }

           const teamTabs = await companyTabTeam.find({"company_id":allcompanies[i]._id});  
           
           if(teamTabs.length>0){
               allcompanies[i].tabTeam = JSON.stringify(teamTabs[0].tab_data.team);
           }else{
               allcompanies[i].tabTeam = "NA";
           }
          
           if(teamTabs.length>0){
               allcompanies[i].tabTeamVcs = JSON.stringify(teamTabs[0].tab_data.vcs);
           }else{
               allcompanies[i].tabTeamVcs = "NA";
           }
           
           if(teamTabs.length>0){
               allcompanies[i].tabTeamAdvisors = JSON.stringify(teamTabs[0].tab_data.advisors);
           }else{
               allcompanies[i].tabTeamAdvisors = "NA";
           }         

        }
  

        
    
     return allcompanies;
     

}
    
// exports.createCsv =  async (arr) => {

//        converter.json2csv(arr, function(err,csv){
               
//           fs.writeFile('company.csv', csv, function (err) {
//                if(err){
//                     console.log(err);
//                }     
//                console.log('saved!');        
//         });  


//      });
//      return 1;

// }





