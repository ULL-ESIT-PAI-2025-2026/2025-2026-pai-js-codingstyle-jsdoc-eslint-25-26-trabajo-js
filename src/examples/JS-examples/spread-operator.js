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
 * @desc Show how work spread operator
 *
 */

'use strict';

function maxWithoutSpread(list) {
  console.log(Math.max(list));
}

function maxWtihSpread(list) {
  console.log(Math.max(...list));
}

function main() {
  let list = [0 , 1 , 2 , -1];
  maxWithoutSpread(list);
  console.log('--------------------')
  maxWtihSpread(list);
}

main();