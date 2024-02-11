const TheatersService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listTheaters(req, res) {
  const data = await TheatersService.list();
  res.json({ data });
}

module.exports = {
  listTheaters: asyncErrorBoundary(listTheaters),
};
