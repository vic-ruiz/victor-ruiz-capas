import { cartDao as api } from "../daos/index.js";

async function getCarts(req, res) {
  try {
    const carts = await api.getAll();
    carts
      ? res.status(200).json(carts)
      : res.status(404).json({ message: "No carts available" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getCartByID(req, res) {
  try {
    const cart = await api.getOne(req.params.id);
    cart
      ? res.status(200).json(cart)
      : res
          .status(404)
          .json({ message: "cart not found. id: " + req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export { getCarts, getCartByID };
