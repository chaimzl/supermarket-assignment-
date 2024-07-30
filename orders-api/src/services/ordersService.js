
const ordersRepo = require("../repos/ordersRepo");


const setOrder = async (order) => {
  await ordersRepo.setOrder(order);
  return;
};
const getOrders = async () => {
  var res = await ordersRepo.getOrders();
  return res;
};

module.exports = {
  setOrder,
  getOrders
};