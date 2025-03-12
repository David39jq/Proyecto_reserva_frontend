import { Pool } from "../database/connection.js";

import {mysql} from '../database/connection.js'

const getmenu=() =>{
    try{
        const result=pool.query('SELECT plato_id, titulo, descripcion, precio FROM menu;');
        console.log(result);
    }catch(error){
        console.error(error);
    }
}

getmenu();



