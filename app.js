const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

const app = express();

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar autenticación básica
const users = {
  'lansierPrueba': '1234', // Nombre de usuario y contraseña configurados
};

app.use(basicAuth({
  users,
  unauthorizedResponse: 'Unauthorized',
}));

// Ruta de ejemplo protegida
app.route('/protegida')
  .get((req, res) => {
    res.send('Esta es una ruta protegida (GET).');
  })
  .post((req, res) => {
    res.send('Esta es una ruta protegida (POST).');
  });


// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
