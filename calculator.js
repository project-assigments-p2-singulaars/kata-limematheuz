function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("orale, no se puede dividir pendejo");
  }
  return a / b;
}

module.exports = {
  suma,
  resta,
  multiplicacion,
  division,
};
