const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Producto pedido
//Petición get
router.get("/producto_pedido", (req, res) => {
  mysqlConnection.query("SELECT * FROM producto_pedido", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/producto_pedido", (req, res) => {
  const {
    solicitud,
    inventario,
    entrega
  } = req.body;

  let nuevoProductoPedido = `INSERT INTO producto_pedido (  solicitud,
    inventario, entrega) VALUES (?,?,?)`;

  mysqlConnection.query(
    nuevoProductoPedido,
    [
      solicitud,
      inventario,
      entrega
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Producto pedido registrado` });
      }
    }
  );
});

//Petición put
router.put("/producto_pedido/:id", (req, res) => {
  const {
    solicitud,
    inventario,
    entrega
  } = req.body;
  const { id } = req.params;

  let actualizarProductoPedido = `UPDATE producto_pedido SET solicitud=?, inventario=?, entrega=?
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarProductoPedido,
    [
      solicitud,
      inventario,
      entrega,
      id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Producto pedido actualizado correctamente` });
      } else {
        res.status(500);
      }
    }
  );
});

//Petición delete
router.delete("/producto_pedido/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM producto_pedido WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El producto_pedido ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;