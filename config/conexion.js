let conectar = require("mysql");

let conexion = conectar.createConnection({
    host: "localhost",
    database: "restaurante",
    user: "root",
    password: ""
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});

module.exports = conexion;