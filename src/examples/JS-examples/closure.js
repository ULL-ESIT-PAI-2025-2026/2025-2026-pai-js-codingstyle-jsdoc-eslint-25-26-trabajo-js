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
 * @desc Shows the behaviour of closure in functions.
 *
 */
'use strict'

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
let trice = multiplier(3);
console.log(twice(5));
console.log(trice(4));