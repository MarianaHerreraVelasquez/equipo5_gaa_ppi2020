const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Menu
//Petición get
router.get("/menu", (req, res) => {
  mysqlConnection.query("SELECT * FROM menu", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/menu", (req, res) => {
  const {
    precios,
    platillos,
    ID_categoria
  } = req.body;

  let nuevoMenu = `INSERT INTO parque (  precios,
    platillos,
    ID_categoria ) VALUES (?,?,?,?)`;

  mysqlConnection.query(
    nuevoMenu,
    [
      precios,
      platillos,
      ID_categoria
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Menu ingresado` });
      }
    }
  );
});

//Petición put
router.put("/menu/:ID", (req, res) => {
  const {
      precios,
      platillos,
      ID_categoria
  } = req.body;
  const { ID } = req.params;

  let actualizarMenu = `UPDATE menu SET precios=?, platillos=?, ID_categoria=?
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarMenu,
    [
      precios,
      platillos,
      ID_categoria,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Menu actualizado correctamente` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/menu/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM menu WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El menu ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;