import { PRODUCTS_MOCK } from "../../mock-data/products_mock.js";

let productsData = [];

function initDatabase(data) {
  if (!Array.isArray(data)) throw new Error("Argument should be an array");
  productsData.push(...data);
}

let userCart = [];

function addToCart(id) {
  if (isNaN(id)) throw new Error("Argument should be a number");
  const product = productsData.find((item) => item.id === id);
  if (!product) throw new Error("Argument does not exist in database.");
  userCart.push(product);
}

function removeFromCart(id) {
  if (isNaN(id)) throw new Error("Argument should be a number");
  const product = productsData.find((item) => item.id === id);
  if (!product) throw new Error("Argument does not exist in database.");
  userCart = userCart.filter((product) => product.id !== id);
}

export { productsData, initDatabase, userCart, addToCart, removeFromCart };
