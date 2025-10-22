import {
  productsData,
  initDatabase,
  userCart,
  addToCart,
  removeFromCart,
  clearCart,
  price,
  discount,
  calculateCost,
} from "./src/scripts/app.js";

import { PRODUCTS_MOCK } from "./mock-data/products_mock.js";

initDatabase(PRODUCTS_MOCK);
console.log(productsData);
const listOfItems = document.getElementById("listOfItems");

productsData.forEach((item) => {
  // Card
  const card = document.createElement("div");
  card.classList.add("itemContainer");
  // Heading
  const heading = document.createElement("h4");
  heading.textContent = item.title;
  heading.classList.add("cardTitle");
  // Thumbnail
  const thumbnail = document.createElement("img");
  thumbnail.src = item.thumbnail;
  thumbnail.alt = `${item.title} picture`;
  // Price
  const price = document.createElement("p");
  price.textContent = item.price;
  price.classList.add("price");
  // Quantity
  const quantity = document.createElement("p");
  quantity.textContent = item.quantity;
  quantity.classList.add("quantity");
  // Button
  const addButton = document.createElement("button");
  addButton.addEventListener("click", () => {
    addToCart(item.id);
  });
  addButton.innerHTML = "Add to cart";
  addButton.classList.add("addBtn");
  // Add to card
  card.append(heading, thumbnail, price, quantity, addButton);
  // Add to section
  listOfItems.append(card);
});

const shoppingCart = document.getElementById("shoppingCart");

userCart.map((item) => {
  // Card
  const card = document.createElement("div");
  card.classList.add("itemContainer");
  // Heading
  const heading = document.createElement("h4");
  heading.textContent = item.title;
  heading.classList.add("cardTitle");
  // Thumbnail
  const thumbnail = document.createElement("img");
  thumbnail.src = item.thumbnail;
  thumbnail.alt = `${item.title} picture`;
  // Price
  const price = document.createElement("p");
  price.textContent = item.price;
  price.classList.add("price");
  // Quantity
  const quantity = document.createElement("p");
  quantity.textContent = item.quantity;
  quantity.classList.add("quantity");
  // Button
  const removeButton = document.createElement("button");
  removeButton.addEventListener("click", () => {
    removeFromCart(item.id);
  });
  removeButton.innerHTML = "Remove from cart";
  removeButton.classList.add("removeBtn");
  // Add to card
  shoppingCart.append(heading, thumbnail, price, quantity, removeButton);
  // Add to section
  listOfItems.append(shoppingCart);
});

console.log(userCart);
