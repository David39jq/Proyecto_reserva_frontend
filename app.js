// importar librerias 
const express = require("express");
const app = express();


//configuraciones
app.set("view engine", "ejs");//paginas dinamicas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas dinamicas y estaticas::::::::::::::::::::::::::::::::::::::::
app.use(require("./rutas/index"));
app.use(express.static("public"));


//configurando el puesto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    if(PORT == 3000){
        console.log("http://localhost:3000");
    }else{
        console.log(PORT);
    }
})


