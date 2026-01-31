/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego García Hernández, Daniel Martínez Sopo, Marco Aguilar Álvarez 
 * @since 31/01/2026
 * @desc ESLint example
 *       The program shows how to use ESLint to follow a coding style guide
 *
 */

'use strict';

function suma(a, b) { // Missing closing parenthesis
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b = 0) { // Assignment instead of comparison
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

function cuadrado(n) {
  return n * n;
}

function foo() {
  a = 5; // global variable without declaration
}

function main() {
  const num1 = 10;
  const num2 = 5;

  num1 = 'diez'; // Changing constant value

  console.log(`Suma: ${suma(num1, num2)}`);
  console.log(`Resta: ${resta(num1, num2)}`);
  console.log(`Multiplica: ${multiplica(num1, num2)}`);
  console.log(`Divide: ${divide(num1, num2)}`);

  foo();
  console.log(a); // Using undeclared variable

  var variable_mal_declarada = 1; // use of var instead of let/const
  console.log(`Cuadrado: ${cuadrado(variable_mal_declarada)}`); // Incorrect string interpolation
}

main();