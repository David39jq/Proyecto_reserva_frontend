const express = require("express");
const router = express.Router();
const conexion = require("../config/conexion");
const link = require("../config/link");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/regUsuario", async function(req, res){
    let nom = req.body.campoNom;
    let ema = req.body.campoEma;
    let pass = req.body.campoPass;
  
   try {
    const hashedpas = await bcrypt.hash(pass, saltRounds);
    const insertar = "INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?);"

    conexion.query(insertar, [nom, ema, hashedpas], function(err){
        if(err){
            console.log("Error al interntar registrar usuario");
            return res.status(500).send("Error al registrar usuario");
        }else{
            console.log("Registro exitoso");
            let mensaje = "Registro exitoso, ya puedes iniciar sesion";
            res.render("index", {mensaje, link});
        }    
    })
} catch (error) {
    console.error("Error al registrar", error);
    res.status(500).send("Error en el servidor");

}
})

module.exports = router;





