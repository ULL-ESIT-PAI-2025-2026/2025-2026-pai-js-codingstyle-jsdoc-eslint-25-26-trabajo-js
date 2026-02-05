/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego García Hernández, Daniel Martínez Sopo, Marco Aguilar Álvarez
 * @since 31/01/2026
 * @desc ESLint example
 *       The program shows how to use ESLint to follow a coding style guide
 *
 */

'use strict';


/**
 * @desc this function add 2 numbers
 *
 * @param {Number} operand1
 * @param {Number} operand2
 * @returns {Number} returns the sum of operand1 and operand2
 */
function suma(operand1, operand2) {
  return operand1 + operand2;
}

/**
 * @desc this function sub 2 numbers
 * @param {Number} operand1 
 * @param {Number} operand2
 * @returns operand1 - operand2
 */
function resta(operand1, operand2) {
  return operand1 - operand2;
}

/**
 * @desc this function multiply 2 numbers
 *
 * @param {Number} operand1
 * @param {Number} operand2 
 * @returns {Number} operand1 * operand2
 */
function multiplica(operand1, operand2) {
  return operand1 * operand2;
}

/**
 * @desc this function divide 2 numbers
 *
 * @param {Number} operand1
 * @param {Number} operand2
 * @returns {Number} operand1 / operand2
 */
function divide(operand1, operand2) {
  if (operand2 = 0) { // Assignment instead of comparison
    throw new Error('No se puede dividir por cero');
  }
  return operand1 / operand2;
}

/**
 * @desc this function calculates the square of n
 * @param {Number} operand
 * @returns operand^2
 */
function cuadrado(operand) {
  return operand * operand;
}

/**
 * @desc this function does nothing
 */
function foo() {
  variable = 5; // global variable without declaration
}

function main() {
  const operand1 = 10;
  const operand2 = 5;

  operand1 = 'diez'; // Changing constant value

  console.log(`Suma: ${suma(operand1, operand2)}`);
  console.log(`Resta: ${resta(operand1, operand2)}`);
  console.log(`Multiplica: ${multiplica(operand1, operand2)}`);
  console.log(`Divide: ${divide(operand1, operand2)}`);

  foo();
  console.log(a); // Using undeclared variable

  var variable_mal_declarada = 1; // use of var instead of let/const
  console.log(`Cuadrado: ${cuadrado(variable_mal_declarada)}`); // Incorrect string interpolation
}

main();