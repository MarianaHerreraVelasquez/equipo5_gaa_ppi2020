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
