const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    // let agenteDeUsuario = peticion.header("user-agent");
    // res.send("La ruta / solicitada con: " + agenteDeUsuario);
    res.status(200).redirect("https://apiexpresheroku1.herokuapp.com/pagina")
});
app.get('/pagina', (req, res) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    res.sendFile(rutaDeArchivo);
});

app.get('/usuario', (req, res) => {
    let mascota = {
        Id: 1,
        Nombre: "Miguel Angel",
        Apellido: "Armenta Acosta",
        Edad: 26,
        Lenguajes: "Wix",
        Especialidad: "Front-End"
    };
    res.json(mascota);
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(port, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el port :${port}`);
});