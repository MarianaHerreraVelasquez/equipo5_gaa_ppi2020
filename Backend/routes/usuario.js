const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Usuario
//Petición get
router.get("/usuario", (req, res) => {
  mysqlConnection.query("SELECT * FROM usuario", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/usuario", (req, res) => {
  const {
    nombre,
    documento,
    direccion,
    contrasena,
    ID_tipo_usuario,
    ID_tipo_documento

  } = req.body;

  let nuevoUsuario = `INSERT INTO usuario (  nombre,
    documento,
    dirrecion,
    contrasena,
    id_tipo_usuario,
    id_tipo_documento ) VALUES (?,?,?,?,?,?,?)`;

  mysqlConnection.query(
    nuevoUsuario,
    [
      nombre,
      documento,
      direccion,
      contrasena,
      ID_tipo_usuario,
      ID_tipo_documento
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Usuario registrado` });
      }
    }
  );
});

//Petición put
router.put("/usuario/:ID", (req, res) => {
  const {
    nombre,
    documento,
    direccion,
    contrasena,
    ID_tipo_usuario,
    ID_tipo_documento
  } = req.body;
  const { ID } = req.params;

  let actualizarUsuario = `UPDATE usuario SET nombre=?, documento=?, direccion=?, contraseña=?, ID_tipo_usuario=?, ID_tipo_documento=? 
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarUsuario,
    [
      nombre,
      documento,
      direccion,
      contrasena,
      ID_tipo_usuario,
      ID_tipo_documento,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Usuario actualizado correctamente` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/usuario/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM usuario WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El usuario ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;