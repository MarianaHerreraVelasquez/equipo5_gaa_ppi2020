const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Tipo de Usuario
//Petición get
router.get("/tipo_usuario", (req, res) => {
  mysqlConnection.query("SELECT * FROM tipo_usuario", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/tipo_usuario", (req, res) => {
  const {
    nombre
  } = req.body;

  let nuevoTipoUsuario = `INSERT INTO tipo_usuario (  nombre ) VALUES (?)`;

  mysqlConnection.query(
    nuevoTipoUsuario,
    [
      nombre
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Tipo de usuario registrado` });
      }
    }
  );
});

//Petición put
router.put("/tipo_usuario/:id", (req, res) => {
  const {
    nombre
  } = req.body;
  const { id } = req.params;

  let actualizarTipoUsuario = `UPDATE tipo_usuario SET nombre=? 
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarTipoUsuario,
    [
      nombre,
      id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Tipo de usuario actualizado con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//Petición delete
router.delete("/tipo_usuario/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM tipo_usuario WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El tipo de usuario ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;