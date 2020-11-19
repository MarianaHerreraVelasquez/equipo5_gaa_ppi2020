const express = require ('express');
const app = express();

app.use(express.json());

const categoria = require ('./src/routes/categoria.js');
const menu = require ('./src/routes/menu.js');
const mesa = require ('./src/routes/mesa.js');
const pedido = require ('./src/routes/pedido.js');
const pedido_restaurante_menu = require ('./src/routes/pedido_restaurante_menu.js');
const producto_pedido = require ('./src/routes/producto_pedido.js');
const restaurante = require ('./src/routes/restaurante.js');
const telefonos = require ('./src/routes/telefonos.js');
const tipo_ciudad = require ('./src/routes/tipo_ciudad.js');
const tipo_documento = require ('./src/routes/tipo_documento.js');
const tipo_usuario = require ('./src/routes/tipo_usuario.js');
const usuario = require ('./src/routes/usuario.js');


app.use('/api',categoria);
app.use('/api',menu);
app.use('/api',mesa);
app.use('/api',pedido);
app.use('/api',pedido_restaurante_menu);
app.use('/api',producto_pedido);
app.use('/api',restaurante);
app.use('/api',telefonos);
app.use('/api',tipo_ciudad);
app.use('/api',tipo_documento);
app.use('/api',tipo_usuario);
app.use('/api',usuario);

app.use(express.urlencoded({extended: false}));

app.listen(3001,()=>{
  console.log('server started')
});