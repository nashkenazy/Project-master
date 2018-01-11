const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://deadpools:idontknow@ds249787.mlab.com:49787/password-checker'; // Databse URI and database name
  process.env.databaseName = 'production database: mea2n-blog'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/' + this.db; // Databse URI and database name
  process.env.databaseName = 'development database: mean-angular-2'; // Database name
}

