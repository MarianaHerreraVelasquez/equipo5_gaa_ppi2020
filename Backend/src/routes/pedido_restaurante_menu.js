const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Pedido restaurante menu 
//Petición get
router.get("/pedido_restaurante_menu", (req, res) => {
  mysqlConnection.query("SELECT * FROM pedido_restaurante_menu", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/pedido_restaurante_menu", (req, res) => {
  const {
    id_pedido,
    id_restaurante,
    id_menu
  } = req.body;

  let nuevoPedidoRestauranteMenu = `INSERT INTO pedido_restaurante_menu (  id_pedido,
    id_restaurante, id_menu) VALUES (?,?,?)`;

  mysqlConnection.query(
    nuevoPedidoRestauranteMenu,
    [
      id_pedido,
      id_restaurante,
      id_menu
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Pedido restaurante menu registrado` });
      }
    }
  );
});

//Petición put
router.put("/pedido_restaurante_menu/:id", (req, res) => {
  const {
    id_pedido,
    id_restaurante,
    id_menu
  } = req.body;
  const { id } = req.params;

  let actualizarPedidoRestauranteMenu = `UPDATE pedido_restaurante_menu SET id_pedido=?, id_restaurante=?, id_menu=?
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarPedidoRestauranteMenu,
    [
      id_pedido,
      id_restaurante,
      id_menu,
      id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Pedido restaurante menu actualizado correctamente` });
      } else {
        res.status(500);
      }
    }
  );
});

//Petición delete 
router.delete("/pedido_restaurante_menu/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM pedido_restaurante_menu WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El pedido_restaurante_menu ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;