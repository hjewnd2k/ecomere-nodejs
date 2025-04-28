const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middleware
app.use(morgan("dev")); // HTTP request logger middleware
app.use(helmet()); // sets various HTTP headers to help protect your app from common web vulnerabilities
app.use(compression()); // gzip compression middleware

// init db
require("./dbs/init.mongodb");

// init routes

// init error handlers

module.exports = app;
