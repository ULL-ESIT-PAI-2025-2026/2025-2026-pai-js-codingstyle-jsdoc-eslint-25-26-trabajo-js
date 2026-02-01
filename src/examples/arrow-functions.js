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

const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(4.5, 1));

const exponente1 = (x) => { return x * x; }; //No haga esto, no cumple guía de estilo
const exponente2 = x => x * x;

console.log(exponente1(2));
console.log(exponente2(2));

const cuerno = () => {
  console.log("Toot");
};

cuerno();

