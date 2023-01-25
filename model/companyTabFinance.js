// External Dependancies
const mongoose = require('mongoose')

const tabDataSchema = new mongoose.Schema({
  revenue: [
    {
      year: String,
      value: String
    }
  ],
  cash_in_hand: String,
  expense: String,
  raise_earlier: {
    type: String,
    enum: ['yes', 'no']
  },
  raise_stage: String
})

const companyTabFinanceSchema = new mongoose.Schema({
  tab_title: {
    type: String,
    default: 'Finance'
  },
  company_id: {
    type: String
  },
  tab_data: {
    type: tabDataSchema
  }
}, { timestamps: true })

module.exports = mongoose.model('CompanyTabFinance', companyTabFinanceSchema)
