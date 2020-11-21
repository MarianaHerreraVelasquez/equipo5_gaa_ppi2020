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
    id_restaurante
  } = req.body;

  let nuevaMesa = `INSERT INTO mesa (  numero,
    informacion,
    id_restaurante ) VALUES (?,?,?)`;

  mysqlConnection.query(
    nuevaMesa,
    [
      numero,
      informacion,
      id_restaurante
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Nueva mesa ingresada` });
      }
    }
  );
});

//Petición put
router.put("/mesa/:id", (req, res) => {
  const {
    numero,
    informacion,
    id_restaurante
  } = req.body;
  const { id } = req.params;

  let actualizarMesa = `UPDATE mesa SET numero=?, informacion=?, id_restaurante=?
  WHERE id = ?`;
  mysqlConnection.query(
    actualizarMesa,
    [
      numero,
      informacion,
      id_restaurante,
      id
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

//Petición delete 
router.delete("/mesa/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM mesa WHERE id =?`,
    [id],
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