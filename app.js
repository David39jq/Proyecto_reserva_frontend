/* ===========================
		importar librerias 
=============================*/
const express = require("express");
const session = require("express-session");
const app = express();


/* ===========================
		configuraciones 
=============================*/
app.set("view engine", "ejs");  //paginas dinamicas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/*===================================
		rutas dinamicas y estaticas:::::::::::::::
===================================*/
app.use(require("./rutas/index"));
app.use(express.static("public"));
app.use(require("./rutas/regUsuario"));
app.use(require("./rutas/codLogin")); //ruta del login


/*===================================
		Manejo de sesiones 
===================================*/
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: false
}));//fin de manejo de sesion



/* ==========================================
        configurando el puesto del servidor
===========================================*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    if(PORT == 3000){
        console.log("http://localhost:3000");
    }else{
        console.log(PORT);
    }
})


