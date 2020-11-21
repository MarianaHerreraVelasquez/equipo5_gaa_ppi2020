const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Tipo ciudad
//Petición get
router.get("/tipo_ciudad", (req, res) => {
  mysqlConnection.query("SELECT * FROM tipo_ciudad", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/tipo_ciudad", (req, res) => {
  const {
    nombre,
    latitud,
    ubicacion,
    orientacion
  } = req.body;

  let nuevoRestauranteCiudad = `INSERT INTO tipo_ciudad ( nombre,
    latitud,
    ubicacion,
    orientacion ) VALUES (?,?,?,?)`;

  mysqlConnection.query(
    nuevoRestauranteCiudad,
    [
      nombre,
      latitud,
      ubicacion,
      orientacion
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Nuevo restaurante ingresado en ciudad` });
      }
    }
  );
});

//Petición put
router.put("/tipo_ciudad/:id", (req, res) => {
  const {
    nombre,
    latitud,
    ubicacion,
    orientacion
  } = req.body;
  const { id } = req.params;

  let actualizarCiudad = `UPDATE tipo_ciudad SET nombre=?, latitud=?, ubicacion=?, orientacion=?
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarCiudad,
    [
      nombre,
      latitud,
      ubicacion,
      orientacion,
      id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `El restaurante ingresado en ciudad fue actualizado` });
      } else {
        res.status(500);
      }
    }
  );
});

//Petición delete 
router.delete("/tipo_ciudad/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM tipo_ciudad WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `Datos de ciudad del restaurante han sido eliminados` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;