import { PRODUCTS_MOCK } from "../../mock-data/products_mock.js";
import { productsData, initDatabase } from "../scripts/app";

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
    expect(() => initDatabase("iPhone")).toThrow(
      "Parameter should be an array"
    );
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
