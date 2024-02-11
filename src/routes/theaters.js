const express = require("express");
const TheatersService = require("../services/theaters");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const router = express.Router();

async function listTheaters(req, res) {
  const data = await TheatersService.list();
  res.json({ data });
}

router.get("/", asyncErrorBoundary(listTheaters));

module.exports = router;
