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