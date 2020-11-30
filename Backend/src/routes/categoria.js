const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express")

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
    referencia ) VALUES (?,?)`;

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
router.put("/categoria/:id", (req, res) => {
  const {
    nombre,
    referencia
  } = req.body;
  const { id } = req.params;

  let actualizarCategoria = `UPDATE categoria SET nombre=?, referencia=?
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarCategoria,
    [
      nombre,
      referencia,
      id
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



