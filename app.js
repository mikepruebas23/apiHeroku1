const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    //redirect to endpoint
    res.status(200).redirect("https://apiexpresheroku1.herokuapp.com/pagina")
});
app.get('/pagina', (req, res) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    res.sendFile(rutaDeArchivo);
});

//Mostrar saludo
app.get('/hola/:name', (req, res) => {
    res.send({ message: `Hola ${req.params.name}!`})
});

app.get('/usuario', (req, res) => {
    let usuario = {
        Id: 1,
        Nombre: "Miguel Angel",
        Apellido: "Armenta Acosta",
        Edad: 26,
        Lenguajes: "Wix",
        Especialidad: "Front-End"
    };
    res.json(usuario);
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