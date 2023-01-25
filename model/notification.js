// External Dependancies
const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  follower_id: {
    type: String,
    required: true
  },
  follower_image: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Notification', notificationSchema)
