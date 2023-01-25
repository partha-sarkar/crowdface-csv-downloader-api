// External Dependancies
const mongoose = require('mongoose')

const platformSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    data: String,
    contentType: String
  },
  companies: {
    type: Array
  },
  isActive: {
    type: String,
    enum: ['yes', 'no'],
    default: 'yes'
  }
}, { timestamps: true })

module.exports = mongoose.model('Platform', platformSchema)
