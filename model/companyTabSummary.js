// External Dependancies
const mongoose = require('mongoose')

const companyTabSummarySchema = new mongoose.Schema({
  tab_title: {
    type: String,
    default: 'Summary'
  },
  company_id: {
    type: String
  },
  tab_data: {
    product: {
      type: String
    },
    patents: {
      type: String,
      enum: ['yes', 'no']
    },
    daily_users: {
      type: String
    },
    partnership: {
      type: String
    }
  }
}, { timestamps: true })

module.exports = mongoose.model('CompanyTabSummary', companyTabSummarySchema)
