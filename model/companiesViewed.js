// External Dependancies
const mongoose = require('mongoose')

const companyViewedSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  company_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('CompaniesViewed', companyViewedSchema)
