const express = require("express");
const router = express.Router();
const conexion = require("../config/conexion");
const link = require("../config/link");

router.post("/regUsuario", function(req, res){
    let nom = req.body.campoNom;
    let ema = req.body.campoEma;
    let pass = req.body.campoPass;

    const insertar = "INSERT INTO usuario ( NOMBRE, EMAIL, PASSWORD) VALUES ('"+nom+"', '"+ema+"', '"+pass+"');"

    conexion.query(insertar, function(error, row){
        if(error){
            console.log("Error al interntar registrar usuario");
            throw error;
        }else{
            console.log("Registro exitoso");
            mensaje = "Registro exitoso, ya puedes iniciar sesion";
            res.render("index",{mensaje, link});
        }
    });
});

module.exports = router;