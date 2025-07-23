const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = require('../config/connectDb');
const ProxyProduct = require('../models/ProxyProduct');

const sampleProducts = [
  {
    name: 'Residential Proxy – 711',
    shortDescription: 'Fast, reliable residential proxies',
    description: 'High-quality residential proxies for all your needs.',
    logo: 'https://techedge.pro/wp-content/themes/gerold/assets/images/logos/logo-primary.png',
    tags: ['trending', 'staff-pick'],
    type: 'Residential',
    provider: '711',
    pricePerUnit: 2.5,
    rating: 4.8,
    availableDurations: [30, 60],
    supportedCountries: ['US', 'UK', 'CA'],
    isActive: true,
    Providers: [
      { image: 'https://techedge.pro/wp-content/themes/gerold/assets/images/logos/logo-primary.png' }
    ],
    pricing: [
      { quantity: 10, price: 5.0, isPopular: true },
      { quantity: 20, price: 9.0, isPopular: false },
      { quantity: 50, price: 20.0, isPopular: false }
    ]
  },
  {
    name: 'ISP Proxy – ProxySeller',
    shortDescription: 'Premium ISP proxies',
    description: 'ISP proxies with high uptime and speed.',
    logo: 'https://techedge.pro/wp-content/themes/gerold/assets/images/logos/logo-primary.png',
    tags: ['premium'],
    type: 'ISP',
    provider: 'ProxySeller',
    pricePerUnit: 3.0,
    rating: 4.5,
    availableDurations: [30],
    supportedCountries: ['DE', 'FR'],
    isActive: true,
    Providers: [
      { image: 'https://techedge.pro/wp-content/themes/gerold/assets/images/logos/logo-primary.png' }
    ],
    pricing: [
      { quantity: 10, price: 6.0, isPopular: true },
      { quantity: 25, price: 13.0, isPopular: false },
      { quantity: 100, price: 45.0, isPopular: false }
    ]
  }
];

async function seed() {
  await connectDb();
  await ProxyProduct.deleteMany();
  await ProxyProduct.insertMany(sampleProducts);
  console.log('Sample proxy products inserted!');
  mongoose.connection.close();
}

seed().catch(err => {
  console.error(err);
  mongoose.connection.close();
}); 