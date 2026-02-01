/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Martínez Sopo
 * @author Marco Aguiar Álvarez
 * @author Diego García Hernández
 * @desc Shows the behaviour of the key word var.
 * @since Feb 01 2026
 */
'use strict'
 
let x = 10;   // global

if (true) {
  let y = 20; // local 
  var z = 30; // global
}

console.log(y);
console.log(z);

function dummy () {
  var invisible = 40; // only in function
  console.log(invisible);
}

console.log(invisible);