const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

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