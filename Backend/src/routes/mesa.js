const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Mesa
//Petición get
router.get("/mesa", (req, res) => {
  mysqlConnection.query("SELECT * FROM mesa", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/mesa", (req, res) => {
  const {
    numero,
    informacion,
    ID_restaurante
  } = req.body;

  let nuevoNumeroMesa = `INSERT INTO mesa (  numero,
    informacion,
    ID_restaurante ) VALUES (?,?,?,?)`;

  mysqlConnection.query(
    nuevoNumeroMesa,
    [
      numero,
      informacion,
      ID_restaurante
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Nuevo numero de mesa ingresado` });
      }
    }
  );
});

//Petición put
router.put("/mesa/:ID", (req, res) => {
  const {
    numero,
    informacion,
    ID_restaurante
  } = req.body;
  const { ID } = req.params;

  let actualizarMesa = `UPDATE mesa SET numero=?, informacion=?, ID_restaurante=?
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarMesa,
    [
      numero,
      informacion,
      ID_restaurante,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Mesa actualizada con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/mesa/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM mesa WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `La mesa ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;