const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = require('../config/connectDb');
const ProxyProduct = require('../models/ProxyProduct');

const sampleNames = [
  'Residential Proxy – 711',
  'ISP Proxy – ProxySeller'
];
const sampleLogo = 'https://techedge.pro/wp-content/themes/gerold/assets/images/logos/logo-primary.png';

async function deleteSeededProducts() {
  await connectDb();
  const result = await ProxyProduct.deleteMany({
    $or: [
      { name: { $in: sampleNames } },
      { logo: sampleLogo },
      { 'Providers.image': sampleLogo }
    ]
  });
  console.log(`${result.deletedCount} sample proxy products deleted!`);
  mongoose.connection.close();
}

deleteSeededProducts().catch(err => {
  console.error(err);
  mongoose.connection.close();
}); 