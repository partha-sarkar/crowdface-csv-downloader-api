// External Dependancies
const mongoose = require('mongoose')

const companyTabTechnologySchema = new mongoose.Schema({
  tab_title: {
    type: String,
    default: 'Technology'
  },
  company_id: {
    type: String
  },
  tab_data: {
    technology: String
  }
}, { timestamps: true })

module.exports = mongoose.model('CompanyTabTechnology', companyTabTechnologySchema)
