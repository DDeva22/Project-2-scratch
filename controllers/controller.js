const express = require("express");
const router = express.Router();
const db = require("../models");


let loginUser;





router.get("/", function (req, res) {
    db.userbase.findAll({}).then(function (data) {
      const hbsObject = {
        userBase: data
      };
      // console.log(hbsObject);
      res.json(hbsObject);
      console.log(hbsObject);
    }).catch(function(error){
        console.log(error);
    });

});

router.post("/", function (req, res) {
    db.userBase.create({
        legal_name: req.body.legalname,
        user_name: req.body.username,
        user_password: req.body.userpassword,
        // user_ID:  

    });
    
});





// router.post("/login", function( req, res){
//     loginUser = req.body.username;


// });




// router.post("/signup", function (req, res){
//     db.userBase.create({
//         legal_name: req.body.legalname,
//         user_name: req.body.username,
//         user_password: req.body.userpassword,
//         // user_ID:  





//     });
    
// });

// router.get("/home", function( req, res){
//     db.userBase.findOne({
//         where: 
//         {user_name: loginUser}


//     }).then(function(result){

//         res.render("homepage", result);
//     })





// });

























module.exports = router;