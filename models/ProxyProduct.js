const mongoose = require('mongoose');

const proxyProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  shortDescription: {
    type: String
  },
  description: {
    type: String
  },
  logo: {
    type: String
  },
  tags: [{
    type: String
  }],
  type: {
    type: String,
    enum: ['Residential', 'ISP', 'Datacenter'],
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  pricePerUnit: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  comments: [{
    type: mongoose.Schema.Types.Mixed
  }],
  availableDurations: [{
    type: Number
  }],
  supportedCountries: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('ProxyProduct', proxyProductSchema); 