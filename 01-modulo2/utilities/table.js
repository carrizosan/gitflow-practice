/* eslint-disable no-unused-vars */
const colors = require("colors");

//Retorna una tabla de multiplicacion con una base y un limite dados.

const createTableByBase = (result, base, limit = 10) => {
  if (isNaN(base)) throw Error("Base parameter is not valid.");

  if (isNaN(limit)) throw Error("Limit parameter is not valid.");

  if (limit < 1) throw Error("Limit parameter is not valid.");

  result = `|||||||| TABLA DEL ${base} HASTA EL NUMERO ${limit} |||||||||\n`
    .rainbow;

  for (let i = 1; i <= limit; i++) {
    result +=
      `${base}`.random +
      " x ".green +
      `${i}`.random +
      " = ".green +
      `${base * i} \n`.random;
  }

  return result;
};

const createTableByBaseWithoutLayout = (result, base, limit = 10) => {
  if (isNaN(base)) throw Error("Base parameter is not valid.");

  if (isNaN(limit)) throw Error("Limit parameter is not valid.");

  if (limit < 1) throw Error("Limit parameter is not valid.");

  result = `|||||||| TABLA DEL ${base} HASTA EL NUMERO ${limit} |||||||||\n`;

  for (let i = 1; i <= limit; i++) {
    result += `${base}` + " x " + `${i}` + " = " + `${base * i} \n`;
  }

  return result;
};

exports.createTableByBase = createTableByBase;
exports.createTableByBaseWithoutLayout = createTableByBaseWithoutLayout;
