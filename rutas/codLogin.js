/* ===========================
		importar librerias 
=============================*/
const express = require("express");
const router = express.Router();
const link = require("../config/link");
const conexion = require("../config/conexion");
const bcrypt = require('bcrypt');

/* ===============================
		Definimos la ruta login  
================================*/

router.post("/codLogin", function(req, res){
    const mai = req.body.campoEma;
    const pas = req.body.campoPass;

    /* ========= Validar si correo existe =========*/
    const validar = "SELECT * FROM usuario WHERE EMAIL = ?";
    conexion.query(validar, [mai], async function(error, rows){
        let mensaje;
        if(error){
            console.log("Error en la consulta para validar el correo", error);
            return res.status(500).send("Error en el servidor");
        }

        if(rows.length < 1){
            mensaje = "El correo ingresado no existe";
            res.render("login", {mensaje, link});
        }else{
            /* ========= Validar la contraseña =========*/
            const user = rows(0);
            const match = await bcrypt.compare(pas, user.PASSWORD);

            if(!match){
                mensaje = "Contraseña incorrecta";
                res.render("login", {mensaje, link});
            }else{
                req.session.login = true;
                req.session.idusu = user.id;
                req.session.nomusu = user.NOMBRE;
                req.session.emailusu = user.EMAIL;
                console.log(req.session); /* ========= comprobar los datos que inican la sesión =========*/
                res.render("index",{datos: req.session, link});
            }
        }
    });
});

module.exports = router;