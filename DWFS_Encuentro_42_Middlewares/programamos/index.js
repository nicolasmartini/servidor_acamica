const express = require('express');
const app = express();
const port = 3000;


// Declaro el Array con los contactos
const contactos = [
    {
        "id": 1,
        "nombre": "Pepe",
        "email": "pepe@nada.com"
    }, {
        "id": 2,
        "nombre": "Hugo",
        "email": "hugo@nada.com"
    }, {
        "id": 3,
        "nombre": "Juan",
        "email": "juan@nada.com"
    },

];

// Middlewa que verifica si el dato por el que busco es correcto
function verifica(req, res, next) {
    
    if (req.body.id && req.method === 'GET') {
        next();
    } else if (req.body.nombre && req.method === 'POST') {
        next();
    } else {
        res.status(403).send(`Sorry but you are not an admin and you do not have access to route ${req.url}`);
    }
}

// Permite recibir parámetros en formato JSON.
app.use(express.json());

// Se agrega el middleware en la aplicación.
app.use(verifica);

// Ruta a la cual solo deben los tipo de usuario  int 
app.get('/user', (req, res,next) => {
    let contacto = contactos.find(item => item.id === req.body.id);
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Contacto',
        respuesta: contacto
    };
    res.send(respuesta);
   // res.send('You are an admin');
});

app.post('/user', (req, res,next) => {

    resultado = contactos.find(fruta => fruta.nombre === req.nombre);
    if (resultado){
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Contacto',
            respuesta: resultado
        };
    }else{
        respuesta = {
            error: false,
            codigo: 502,
            mensaje: 'Contacto',
        };
    }

    res.send(respuesta);
   // res.send('You are an admin');
});


app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});


