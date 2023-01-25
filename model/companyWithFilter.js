// External Dependancies
const mongoose = require('mongoose')

const companyWithFilterSchema = new mongoose.Schema({
  company_id: {
    type: String
  },
  platform_id: {
    type: String
  },
  revenue: {
    type: Number
  },
  patents: {
    type: String
  },
  vc: {
    type: String
  },
  fund_raise_stage: {
    type: String
  },
  company_detail: {
    type: Object
  }
}, { timestamps: true })

module.exports = mongoose.model('CompanyWithFilter', companyWithFilterSchema)
