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
    targeta_identidad,
    cedula,
    pasaporte,
    libreta_electoral,
    carnet_de_extranjeria
  } = req.body;

  let nuevoUsuario = `INSERT INTO usuario (  targeta_identidad,
    cedula,
    pasaporte,
    libreta_electoral,
    carnet_de_extranjeria ) VALUES (?,?,?,?,?,?)`;

  mysqlConnection.query(
    nuevoUsuario,
    [
      targeta_identidad,
      cedula,
      pasaporte,
      libreta_electoral,
      carnet_de_extranjeria
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
router.put("/tipo_documento/:ID", (req, res) => {
  const {
    targeta_identidad,
    cedula,
    pasaporte,
    libreta_electoral,
    carnet_de_extranjeria
  } = req.body;
  const { ID } = req.params;

  let actualizarTipoDocumento = `UPDATE tipo_documento SET targeta_identidad=?, cedula=?, pasaporte=?, libreta_electoral=?, carnet_de_extranjeria=?
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarTipoDocumento,
    [
      targeta_identidad,
      cedula,
      pasaporte,
      libreta_electoral,
      carnet_de_extranjeria,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Documento actualizado correctamente` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/tipo_documento/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM tipo_documento WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El documento ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;