const express = require("express");
const router = express.Router();

const db = require("../models");


router.post("/login", function (req, res){
    db.userBase.create({
        legal_name: req.body.legalname,
        user_name: req.body.username,
        user_password: req.body.userpassword,
        





    });
})























module.exports = router;