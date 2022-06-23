require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV || "postgres",
    "password": process.env.DB_PASSWORD_DEV || "Munafuck98",
    "database": process.env.DB_DEV || "c8-dev",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME_TEST,
    "password": process.env.DB_PASSWORD_TEST,
    "database": process.env.DB_TEST,
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME_PROD,
    "password": process.env.DB_PASSWORD_PROD,
    "database": process.env.DB_PROD,
    "host": "localhost",
    "dialect": "postgres"
  }
}
