import { PRODUCTS_MOCK } from "../../mock-data/products_mock.js";
import {
  productsData,
  initDatabase,
  userCart,
  addToCart,
} from "../scripts/app";

beforeEach(() => {
  productsData.length = 0;
});

describe("productsData", () => {
  it("should be an array", () => {
    expect(Array.isArray(productsData)).toBeTruthy();
  });
  it("should be an empty array", () => {
    expect(productsData.length).toBe(0);
  });
});

describe("initDatabase", () => {
  it("should be a function", () => {
    expect(typeof initDatabase).toBe("function");
  });
  it("should have only 1 parameter", () => {
    expect(initDatabase.length).toBe(1);
  });
  it("should throw an error if array is not passed", () => {
    expect(() => initDatabase("iPhone")).toThrow("Argument should be an array");
  });
  it("should populate productsData with data", () => {
    const mockArray = [
      {
        id: 1,
        title: "iPhone 9",
        price: 549,
        brand: "Apple",
        category: "smartphones",
      },
      {
        id: 2,
        title: "iPhone X",
        price: 899,
        brand: "Apple",
        category: "smartphones",
      },
    ];
    initDatabase(mockArray);
    expect(productsData.length).toBe(2);
    expect(productsData).toEqual(mockArray);
  });
});

describe("userCart", () => {
  it("should be an empty array", () => {
    expect(Array.isArray(userCart)).toBeTruthy();
    expect(userCart.length).toBe(0);
  });
});

describe("addToCart", () => {
  it("should be a function with 1 parameter", () => {
    expect(typeof addToCart).toBe("function");
    expect(addToCart.length).toBe(1);
  });
  it("should throw a error if parameter is not a number", () => {
    expect(() => addToCart("false")).toThrow("Argument should be a number");
  });
  it("should an error if id for argument is not found", () => {
    const mockArray = [
      {
        id: 1,
        title: "iPhone 9",
        price: 549,
        brand: "Apple",
        category: "smartphones",
      },
      {
        id: 2,
        title: "iPhone X",
        price: 899,
        brand: "Apple",
        category: "smartphones",
      },
    ];
    initDatabase(mockArray);
    expect(() => addToCart(10)).toThrow("Argument does not exist in database.");
  });
  it("should add item to cart by using id", () => {
    const mockArray = [
      {
        id: 1,
        title: "iPhone 9",
        price: 549,
        brand: "Apple",
        category: "smartphones",
      },
      {
        id: 2,
        title: "iPhone X",
        price: 899,
        brand: "Apple",
        category: "smartphones",
      },
    ];
    initDatabase(mockArray);
    addToCart(2);
    expect(userCart[0].title).toBe("iPhone X");
  });
});
