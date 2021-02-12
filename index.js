const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

app.get('/',(peticion, respuesta) =>{
    let agenteDeUsuario = peticion.header('user-agente');
    respuesta.send('La ruta / solicitada con: ' + agenteDeUsuario);
});

app.get('/pagina', (peticion, respuesta) =>{
    let rutaDeArchivo = path.join(__dirname, 'plantilla.html');
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/hola',(peticion,respuesta)=>{
    let mascota = {
        nombre: "Miguel Armenta",
        apellido: "Armenta Acosta",
        edad: 26,
        
    };

    respuesta.json(mascota);
});

app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    console.log(`Escuchando en el puerto :${puerto}`);
});