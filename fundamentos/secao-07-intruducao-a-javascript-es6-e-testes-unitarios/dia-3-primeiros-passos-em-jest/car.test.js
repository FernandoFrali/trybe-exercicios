const { car, truck } = require("./car.js");

describe("Test car and truck", () => {
  it("Objeto car possui: marca, ano, km, ar e cor", () => {
    const cars = {
      marca: "hyundai",
      ano: 2001,
      km: 0,
      ar: "sim",
      cor: "cinza",
    };
    expect(cars).toEqual(car);
  });
  it("Car year is 2001", () => {
    expect(car).toHaveProperty("ano", 2001);
  });
});
