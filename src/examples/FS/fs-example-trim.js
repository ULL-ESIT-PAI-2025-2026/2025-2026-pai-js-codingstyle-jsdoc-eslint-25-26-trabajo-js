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
 * @desc Maximum of three integer numbers
 *       The program reads three numbers and prints their maximum.
 * @see {@link https://jutge.org/problems/P90615_en}
 * @see {@link https://www.w3schools.com/nodejs/nodejs_filesystem.asp}
 *
 */

'use strict';

const MINIMAL = -Infinity;


/**
 * Reads as many numbers as given and returns the maximum.
 * @param {array} numbers- The numbers given to the function
 * @returns {number} Maximum number of the previous collection
 */
function maximum (numbers) {
  let max = MINIMAL;
  for (let number of numbers) {
   console.log(number);
   if (number > max) max = number;
  }
  return max;
}

/**
 * @desc Processes the input by storing each element in an array, its trimmed for no empty chains '', and each element is 
 *       turned into a number by the .map(Number)
 */
function processInput () {
  const fs = require('fs')
  const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
  let result = maximum(input);
  console.log(result);
}

processInput();