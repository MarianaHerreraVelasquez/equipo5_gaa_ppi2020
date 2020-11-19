const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");


// Restaurante
//Petición get
router.get("/restaurante", (req, res) => {
  mysqlConnection.query("SELECT * FROM restaurante", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/restaurante", (req, res) => {
  const {
    tipo,
    direccion,
    marca,
    ID_telefonos,
    ID_tipo_ciudad

  } = req.body;

  let nuevoRestaurante = `INSERT INTO restaurante (  tipo,
    direccion,
    marca,
    ID_telefonos,
    ID_tipo_ciudad  ) VALUES (?,?,?,?,?,?)`;

  mysqlConnection.query(
    nuevoRestaurante,
    [
      tipo,
      direccion,
      marca,
      ID_telefonos,
      ID_tipo_ciudad
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Restaurante ingresado` });
      }
    }
  );
});

//Petición put
router.put("/restaurante/:ID", (req, res) => {
  const {
      tipo,
      direccion,
      marca,
      ID_telefonos,
      ID_tipo_ciudad
  } = req.body;
  const { ID } = req.params;

  let actualizarRestaurante = `UPDATE restaurante SET tipo=?, direccion=?, marca=?, ID_telefonos=?, ID_tipo_ciudad=? 
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarRestaurante,
    [
      tipo,
      direccion,
      marca,
      ID_telefonos,
      ID_tipo_ciudad,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Restaurante actualizado con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/restaurante/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM restaurante WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El restaurante ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;