const sum = (a, b) => {
  if (!a || !b) throw new Error("Parameter not valid");

  if (isNaN(a) || isNaN(b)) throw new Error("Parameter not valid");

  return a + b;
};

module.exports = { sum };
