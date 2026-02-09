/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Martínez Sopo
 * @author Marco Aguiar Álvarez
 * @author Diego García Hernández
 * @since Feb 01 2026
 */

'use strict';

/**
 * Calcula la potencia de un número elevado a un exponente.
 * @param {number} number - La base del número a elevar.
 * @param {number} exponent - El exponente al que se eleva la base.
 * @returns {number} El resultado de number elevado a la potencia de exponent.
 */
function pow(number, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; ++i) {
    result *= number;
  }
  return result;
}

/**
 * @desc Checks if the exponent is valid and calculates the power of a number
 * @param {number} exponent - The exponent value to validate and use for the power calculation
 * @return {void}
 */
function checkExponent(number, exponent) {
  if (exponent <= 0) {
    console.log(`Power ${exponent} is not supported,`
        + `please enter an integer number greater than zero`);
  } else {
    console.log( pow(number, exponent) );
  }
}

/**
 * @desc Requests the user to enter a number and an exponent through prompts
 */
function proccesInputs() {
  let number = prompt("number?", "");
  let exponent = prompt("exponent?", "");
  checkExponent(number, exponent);
}

proccesInputs();
