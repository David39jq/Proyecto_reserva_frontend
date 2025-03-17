const express = require("express");
const router = express.Router();
const link = require("../config/link");

/*
router.get("/index", function(req, res){
    if(!req.session,login){
        res.render("login" (link));
    }else{
        res.render("index", {datos: req.session, link});
    }
});
*/

router.get("/", function(req, res){
    res.render("index",{link});
});


module.exports = router;