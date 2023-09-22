const express = require('express');
const { app } = require('.');

app.use(express.static('public'));
