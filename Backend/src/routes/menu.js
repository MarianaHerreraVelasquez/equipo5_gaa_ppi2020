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
    tipo, 
    platillos,
    id_categoria
  } = req.body;

  let nuevoMenu = `INSERT INTO parque (  tipo,
    platillos, id_categoria) VALUES (?,?,?)`;

  mysqlConnection.query(
    nuevoMenu,
    [
      tipo, 
      platillos,
      id_categoria
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
router.put("/menu/:id", (req, res) => {
  const {
    tipo, 
    platillos,
    id_categoria
  } = req.body;
  const { id } = req.params;

  let actualizarMenu = `UPDATE menu SET tipo=?, platillos=?, id_categoria=?
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarMenu,
    [
      tipo, 
      platillos,
      id_categoria, 
      id
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

//Petición delete 
router.delete("/menu/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM menu WHERE id =?`,
    [id],
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