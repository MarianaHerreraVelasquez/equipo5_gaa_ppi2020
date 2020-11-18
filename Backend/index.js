const express = require ('express');
const app = express();

app.use(express.json());

const parque = require ('./src/routes/parque.js');
const parques_visitados = require ('./src/routes/parques_visitados.js');
const tipo_usuario = require ('./src/routes/tipo_usuario.js');
const visita = require ('./src/routes/visita.js');
const usuario = require ('./src/routes/usuario.js');
const parques_guardados = require ('./src/routes/parques_guardados');

app.use('/api',parque);
app.use('/api',tipo_usuario);


app.use(express.urlencoded({extended: false}));

app.listen(3001,()=>{
  console.log('server started')
});