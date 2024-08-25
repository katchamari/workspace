require("dotenv").config();
const express = require("express");
const router = express.Router();

// login
router.get('/', (req, res, next) => {
    return res.render('login');
})
module.exports = router;