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
 * @desc Uses the paradox of chicken or egg to show stack overflow
 *
 */
'use strict'

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + ' went first.');