const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Pedido
//Petición get
router.get("/pedido", (req, res) => {
  mysqlConnection.query("SELECT * FROM pedido", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/pedido", (req, res) => {
  const {
    fecha,
    datos,
    precio,
    estado,
    tipo,
    cantidad,
    ID_usuario
  
  } = req.body;

  let nuevoPedido = `INSERT INTO pedido (  fecha,
    fecha,
    datos,
    precio,
    estado,
    tipo,
    cantidad,
    ID_usuario ) VALUES (?,?,?,?,?,?,?,?,?)`;

  mysqlConnection.query(
    nuevoPedido,
    [
      fecha,
      datos,
      precio,
      estado,
      tipo,
      cantidad,
      ID_usuario
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Pedido registrado` });
      }
    }
  );
});

//Petición put
router.put("/pedido/:ID", (req, res) => {
  const {
      fecha,
      datos,
      precio,
      estado,
      tipo,
      cantidad,
      ID_usuario
      
  } = req.body;
  const { ID } = req.params;

  let actualizarPedido = `UPDATE parque SET fecha=?, datos=?, precio=?, estado=?, tipo=?, cantidad=?, ID_usuario=? 
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarPedido,
    [
      fecha,
      datos,
      precio,
      estado,
      tipo,
      cantidad,
      ID_usuario,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Pedido actualizado con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/pedido/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM pedido WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El pedido ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;