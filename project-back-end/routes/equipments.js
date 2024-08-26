const jsonschema = require("jsonschema");
const express = require("express");

const Equipment = require("../models/equipment");

const router = new express.Router();

router.get("/", async function (req, res, next) {
    try {
      const equipments = await Equipment.findAll();
      return res.json({ equipments });
    } catch (err) {
      return next(err);
    }
  });
  




module.exports = router;