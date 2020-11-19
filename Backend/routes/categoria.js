const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');

const { Router } = require("express");

// Categoria
//Petición get
router.get("/categoria", (req, res) => {
  mysqlConnection.query("SELECT * FROM categoria", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/categoria", (req, res) => {
  const {
    nombre,
    referencia
  } = req.body;

  let nuevaCategoria = `INSERT INTO categoria  (  nombre,
    referencia ) VALUES (?,?,?)`;

  mysqlConnection.query(
    nuevaCategoria,
    [
      nombre,
      referencia
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Categoria ingresada` });
      }
    }
  );
});

//Petición put
router.put("/categoria/:ID", (req, res) => {
  const {
    nombre,
    referencia
  } = req.body;
  const { ID } = req.params;

  let actualizarCategoria = `UPDATE categoria SET nombre=?, referencia=?
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarCategoria,
    [
      nombre,
      referencia,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Categoria actualizada correctamente` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/categoria/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM categoria WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `La categoria ha sido eliminada` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;