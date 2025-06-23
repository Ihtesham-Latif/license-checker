// license-checker/index.js
const axios = require('axios');
require('dotenv').config();

module.exports = async function validateLicense() {
  try {
    const licenseKey = process.env.LICENSE_KEY;
    const response = await axios.post('https://license-api-two.vercel.app/validate', {
      key: licenseKey,
    });

    if (!response.data.valid) {
      console.error('🚫 Invalid License Key. Exiting...');
      process.exit(1);
    }

    console.log('✅ License key is valid.');
  } catch (error) {
    console.error('❌ License validation failed. Shutting down...');
    process.exit(1);
  }
};
