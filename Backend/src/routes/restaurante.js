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
    id_telefono,
    id_tipo_ciudad
  } = req.body;

  let nuevoRestaurante = `INSERT INTO restaurante (  tipo,
    direccion,
    marca,
    id_telefono,
    id_tipo_ciudad  ) VALUES (?,?,?,?,?)`;

    mysqlConnection.query(
      nuevoRestaurante,
      [
        tipo,
        direccion,
        marca,
        id_telefono,
        id_tipo_ciudad
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
router.put("/restaurante/:id", (req, res) => {
  const {
    tipo,
    direccion,
    marca,
    id_telefono,
    id_tipo_ciudad
  } = req.body;
  const { id } = req.params;

  let actualizarRestaurante = `UPDATE restaurante SET tipo=?, direccion=?, marca=?, id_telefono=?, id_tipo_ciudad=? 
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarRestaurante,
    [
      tipo,
      direccion,