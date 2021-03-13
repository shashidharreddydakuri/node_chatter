const express = require("express");
const bodyParser = require('body-parser');
const connectdb = require('./../dbconnect');
const User = require('./../models/User');

const router = express.Router();

router.route("/").post((req, res, next) => {
  username = localStorage.setItem("user", req.body.username);
});

module.exports = router;
