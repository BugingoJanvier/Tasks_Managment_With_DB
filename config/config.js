require('dotenv').config({ path: '.env' }); // Load .env from the main directory

// Debugging: Check if variables are loaded

const config = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT, // Ensure dialect is set
        instance: process.env.DB_INSTANCE,
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        instance: process.env.DB_INSTANCE,
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        instance: process.env.DB_INSTANCE,
    },
};

// Check if all required environment variables are set
module.exports = config;
