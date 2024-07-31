const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController");


router.route("/healthcheck").get((req, res) => {
  res.send();
});


router.post("/create-order", ordersController.setOrder)
router.get("/", ordersController.getOrders)


module.exports = router;