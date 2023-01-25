// External Dependancies
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    data: String,
    contentType: String
  },
  platform: {
    type: String,
    required: true
  },
  platform_name: {
    type: String
  },
  fund_raised: {
    type: String
  },
  fund_raising: {
    type: String
  },
  banners: [
    {
      data: String,
      contentType: String
    }
  ],
  description: {
    type: String
  },
  tags: [String],
  investor: {
    type: String
  },
  last_invest_date: {
    type: String
  },
  left_to_invest: {
    type: String
  },
  highlights: [String],
  min_investment: {
    type: String
  },
  max_investment: {
    type: String
  },
  timeline: [
    {
      date: String,
      info: String
    }
  ],
  investment_url: {
    type: String
  },
  follower: {
    type: Number,
    default: 0
  },
  isFollow_status: {
    type: String
  },
  isActive: {
    type: String,
    enum: ['yes', 'no'],
    default: 'yes'
  },
  reqFilter: {
    revenue: Object,
    patents: String,
    vc: String,
    fund_raise_stage: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Company', companySchema)
