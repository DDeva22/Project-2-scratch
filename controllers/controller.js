const express = require("express");
const router = express.Router();
const db = require("../models");


let loginUser;





router.get("/", function (req, res) {
  console.log("./routes");
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
  console.log(req.body)
  console.log("===========================================");
  const {legal_name, user_name, user_password, user_ID} = req.body
    db.userbase.create({
        legal_name: legal_name,
        user_name: user_name,
        user_password: user_password,
        user_ID: user_ID

    });
    res.json(req.body);
  
    
    
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