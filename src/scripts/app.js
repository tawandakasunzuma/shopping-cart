import { PRODUCTS_MOCK } from "../../mock-data/products_mock.js";

let productsData = [];

function initDatabase(data) {
  if (!Array.isArray(data)) throw new Error("Parameter should be an array");
  productsData.push(...data);
}

export { productsData, initDatabase };
