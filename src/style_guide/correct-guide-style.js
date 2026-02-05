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

function pow(number, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= number;
  }

  return result;
}

let number = prompt("number?", "");
let exponent = prompt("exponent?", "");

if (exponent <= 0) {
  console.log(`Power ${exponent} is not supported,`
      + `please enter an integer number greater than zero`);
} else {
  console.log( pow(number, exponent) );
}
