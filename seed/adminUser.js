const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = require('../config/connectDb');
const User = require('../models/User');

const adminUser = {
  email: 'admin@example.com',
  password: 'AdminPass123!', // Will be hashed by pre-save hook
  isAdmin: true
};

async function seedAdmin() {
  await connectDb();
  const existing = await User.findOne({ email: adminUser.email });
  if (existing) {
    console.log('Admin user already exists.');
    mongoose.connection.close();
    return;
  }
  await User.create(adminUser);
  console.log('Admin user created! Email: admin@example.com Password: AdminPass123!');
  mongoose.connection.close();
}

seedAdmin().catch(err => {
  console.error(err);
  mongoose.connection.close();
}); 