// External Dependancies
const mongoose = require('mongoose')

const tabDataSchema = new mongoose.Schema({
  team: [{
    image: {
      data: String,
      contentType: String
    },
    full_name: String,
    job_title: String,
    description: String
  }],
  vcs: [{
    image: {
      data: String,
      contentType: String
    },
    full_name: String,
    job_title: String,
    description: String
  }],
  advisors: [{
    image: {
      data: String,
      contentType: String
    },
    full_name: String,
    job_title: String,
    description: String
  }]
})

const companyTabTeamSchema = new mongoose.Schema({
  tab_title: {
    type: String,
    default: 'Team'
  },
  company_id: {
    type: String
  },
  tab_data: {
    type: tabDataSchema
  }
}, { timestamps: true })

module.exports = mongoose.model('CompanyTabTeam', companyTabTeamSchema)
