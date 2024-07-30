
const ordersService = require("../services/ordersService");



const setOrder = async (req, res) => {
  const { body } = req;
  await ordersService.setOrder(body);
  res.send("Get all workouts11");
};


const getOrders = async (req, res) => {
  var results = await ordersService.getOrders();
  res.send(results)
};

module.exports = {
  setOrder,
  getOrders
};