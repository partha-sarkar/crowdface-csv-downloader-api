// External Dependancies
const mongoose = require('mongoose')

const followingCompanySchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  company_id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'followed',
    enum: ['followed', 'unfollowed']
  }
}, { timestamps: true })

module.exports = mongoose.model('FollowingCompany', followingCompanySchema)
