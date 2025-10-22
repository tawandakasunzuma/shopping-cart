import {
  productsData,
  initDatabase,
  userCart,
  addToCart,
  removeFromCart,
  price,
  discount,
  calculateCost
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
    expect(userCart.length).toBe(1);
    expect(userCart[0].title).toBe("iPhone X");
  });
});

describe("removeFromCart", () => {
  it("should be a function with 1 parameter", () => {
    expect(typeof removeFromCart).toBe("function");
    expect(removeFromCart.length).toBe(1);
  });
  it("should throw a error if parameter is not a number", () => {
    expect(() => removeFromCart("false")).toThrow(
      "Argument should be a number"
    );
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
    expect(() => removeFromCart(10)).toThrow(
      "Argument does not exist in database."
    );
  });
  it("should remove item from cart by using id", () => {
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
    removeFromCart(1);
    expect(userCart.length).toBe(1);
    expect(userCart[0].price).toBe(899);
  });
});

describe("price, discount, netPrice", () => {
  it('should be numbers', () => {
    expect(typeof price).toBe("number");
    expect(typeof discount).toBe("number");
  });
});

describe("calculateCost", () => {
  it('should be a function', () => {
    expect(typeof calculateCost).toBe("function");
  });
  it('should take 2 parameters and throw error if not number', () => {
    expect(calculateCost.length).toBe(2);
    expect(() => calculateCost(2,"money")).toThrow("Arguments should both be numbers")
  });
  it('should calculate netPrice after deducting discount from price', () => {
    expect(calculateCost(2000,15)).toBe(1700);
  })
});