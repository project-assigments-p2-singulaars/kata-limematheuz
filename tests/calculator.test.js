import { expect, describe, it } from "vitest";
import { suma, resta, multiplicacion, division } from "../calculator.js";
// import { b } from "vitest/dist/suite-a18diDsI.js";

describe("calculadora", () => {
  it("should return the sum of two numbers", () => {
    expect(suma(2, 3)).toEqual(5);
  });

  it("should return the rest of two numbers", () => {
    expect(resta(5, 4)).toEqual(1);
  });

  it("should return the multiplication of two numbers", () => {
    expect(multiplicacion(3, 3)).toEqual(9);
  });

  it("should return the division between two numbers", () => {
    expect(division(4, 4)).toEqual(1);
  });
});
