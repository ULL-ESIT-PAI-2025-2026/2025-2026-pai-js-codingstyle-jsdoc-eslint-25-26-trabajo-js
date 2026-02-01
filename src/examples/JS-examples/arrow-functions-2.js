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
 * @desc Second part of the arrow functions examples. Shows .map() and .forEach()
 *
 */

'use strict'

console.log('with .map()');

let input = [1, 2, 3];
let doubled = input.map(x => x * 2);

console.log('original =', input);
console.log('doubled =', doubled);



console.log('with .forEach()');

input.forEach((x, i) => {
  input[i] = x * 2;
});

console.log('original =', input);
