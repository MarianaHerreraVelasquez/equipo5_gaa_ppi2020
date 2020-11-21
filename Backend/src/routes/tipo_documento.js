const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Tipo de documento para el registro de un usuario
//Petición get
router.get("/tipo_documento", (req, res) => {
  mysqlConnection.query("SELECT * FROM tipo_documento", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/tipo_documento", (req, res) => {
  const {
    tarjeta_identidad,
    cedula,
    pasaporte,
    libreta_electoral,
    carnet_extranjeria
  } = req.body;

  let nuevoTipoDocumento = `INSERT INTO usuario (  tarjeta_identidad,
    cedula,
    pasaporte,
    libreta_electoral,
    carnet_extranjeria ) VALUES (?,?,?,?,?)`;

  mysqlConnection.query(
    nuevoTipoDocumento,
    [
      tarjeta_identidad,
      cedula,
      pasaporte,
      libreta_electoral,
      carnet_extranjeria
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Tipo de documento registrado` });
      }
    }
  );
});

//Petición put
router.put("/tipo_documento/:id", (req, res) => {
  const {
    tarjeta_identidad,
    cedula,
    pasaporte,
    libreta_electoral,
    carnet_extranjeria
  } = req.body;
  const { id } = req.params;

  let actualizarTipoDocumento = `UPDATE tipo_documento SET tarjeta_identidad=?, cedula=?, pasaporte=?, libreta_electoral=?, carnet_extranjeria=?
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarTipoDocumento,
    [
      tarjeta_identidad,
      cedula,
      pasaporte,
      libreta_electoral,
      carnet_extranjeria,
      id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Tipo de documento actualizado correctamente` });
      } else {
        res.status(500);
      }
    }
  );
});

//Petición delete 
router.delete("/tipo_documento/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM tipo_documento WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El tipo de documento ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;