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
 * @desc Shows distinct types of syntaxis of the arrow functions.
 *
 */
'use strict'

const isEven = n => {
  if (n % 2 === 0) return true;
  return false;
};

console.log(isEven(4));

const exponente1 = (x) => { return x * x; }; //No haga esto, no cumple guía de estilo
const exponente2 = x => x * x;

console.log(exponente1(2));
console.log(exponente2(2));

const cuerno = () => {
  console.log('Toot');
};

cuerno();

