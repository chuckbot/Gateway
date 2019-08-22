'use strict';
var express = require('express');
var cors = require('cors');

var AuthRouter = require('./src/auth/routes').AuthRouter;
var UserRouter = require('./src/auth/routes').UserRouter;
var PixelPointRouter = require('./src/pixel_point/routes').PixelPointRouter;

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', AuthRouter);
app.use('/api/users', UserRouter);
app.use('/api/pixel-point', PixelPointRouter);
app.use('/api/products', PixelPointRouter);

module.exports = app;
