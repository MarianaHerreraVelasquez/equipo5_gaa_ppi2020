const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db.js');

const { Router } = require("express");

// Restaurante
//Petición get

router.get("/restaurante", (req, res) => {