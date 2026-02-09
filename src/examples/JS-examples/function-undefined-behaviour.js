/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Martínez Sopo
 * @author Marco Aguiar Álvarez
 * @author Diego García Hernández
 * @desc Shows the behaviour of a function with an empty return or no return
 * @since Feb 01 2026
 */

'use strict';

function noReturn () {
 let elcheTeam = 'I am not doing anything';
}

function emptyReturn () {
 let oviedoTeam = 'Me neither';
 return
}

function main() {
  let firstResult = noReturn();
  let secondResult = emptyReturn();
  console.log(typeof firstResult, typeof secondResult);
}

main();
