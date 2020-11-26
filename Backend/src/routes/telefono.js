const express = require("express"); //tabNIne
const router = express.Router();
const mysqlConnection = require("../db/db.js");

const { Router } = require("express");

// Telefonos
//Petición get
router.get("/telefono", (req, res) => {
  mysqlConnection.query("SELECT * FROM telefono", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/telefono", (req, res) => {
  const {
    movil,
    fijo,
    prefijo,
  } = req.body;
 
  let nuevoTelefono = `INSERT INTO telefono (  movil,
    fijo, prefijo) VALUES (?,?,?)`;

    mysqlConnection.query(
      nuevoTelefono,
      [
        movil,
        fijo,
        prefijo,
      ],
      (err, results, fields) => {
        if (err) {
          res.status(500);
        } else {
          res.status(201).json({ message: `Telefono registrado` });
        }
      }
      );
    });
    
    //Petición put
    router.put("/telefono/:id", (req, res) => {
      const {
        movil,
        fijo,
        prefijo,
      } = req.body;
      const { id } = req.params;

      let actualizarTelefono = `UPDATE telefono SET movil=?, fijo=?, prefijo=? 
      WHERE id = ?`;
      mysqlConnection.query(
        actualizarTelefono,
        [
          movil,
          fijo,
          prefijo,
          id
        ],
        (err, rows, fields) => {
          if (!err) {