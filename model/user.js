// External Dependancies
const mongoose = require('mongoose')

const userPlatformScema = new mongoose.Schema({
  platform_id: String
})

const userRangeScema = new mongoose.Schema({
  currency: {
    type: String,
    default: 'USD'
  },
  role_type: {
    type: String,
    enum: ['Investing', 'Raise Fund']
  },
  start_range: Number,
  end_range: Number
})

const userSchema = new mongoose.Schema({
  user_type: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  user_platform: {
    type: [userPlatformScema]
  },
  range: {
    type: [userRangeScema]
  },
  fcm_token: {
    type: [String],
    required: true
  },
  verified_signup: {
    type: String,
    enum: ['yes', 'no'],
    default: 'no'
  },
  profile_image: {
    data: String,
    contentType: String
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  otp: {
    type: String
  },
  otp_sent_at: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  birthdate: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    required: true
  },
  following_investor: {
    type: Number,
    default: 0
  },
  following_company: {
    type: Number,
    default: 0
  },
  follower: {
    type: Number,
    default: 0
  },
  companies_viewed: {
    type: Number,
    default: 0
  },
  companies_shared: {
    type: Number,
    default: 0
  },
  notify: {
    type: String,
    enum: ['enabled', 'disabled'],
    default: 'enabled'
  },
  token: {
    type: String,
    default: ''
  },
  isFollow_status: {
    type: String
  },
  notification_count: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
