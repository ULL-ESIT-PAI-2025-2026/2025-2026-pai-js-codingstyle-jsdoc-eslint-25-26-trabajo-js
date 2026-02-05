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
 * @desc Shows the execution order of declarative functions.
 *
 */

'use strict';

function entryPoint() {
  console.log('Future says:', future());
}

entryPoint();

function future() {
  return 'You will pass PAI';
}