let conectar = require("mysql");

let conexion = conectar.createConnection({
    host: "localhost",
    database: "restaurante",
    user: "root",
    password: "reserva"// quitar la contraseña si su mysql no usa una contraseña y si usa colacar su contraseña
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});

module.exports = conexion;