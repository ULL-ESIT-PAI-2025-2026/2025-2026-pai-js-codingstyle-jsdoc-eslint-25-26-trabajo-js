/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Martínez Sopo
 * @author Marco Aguiar Álvarez
 * @author Diego García Hernández
 * @since Jan 30 2026
 * @desc Shows how to use JSDoc comments
 *
 */
'use strict'

/**
 * @desc This function prints 'Hello, World!'
 *
 * @returns 'Hello, World!'
 */
function foo() {
  return 'Hello, World!';
}

/**
 * @desc This function calculates the square of number
 *
 * @param {Number} number to be squared
 * @returns {Number} square of variable number
 */
function square(number) {
  return number * number;
}

function main() {
  console.log(foo());
  console.log(square(5));
}

main();