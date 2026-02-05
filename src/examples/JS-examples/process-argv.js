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
 * @desc Describe how process.argv works
 *
 */

'use strict';

function processArguments(parameters) {
  for (let argument in parameters) {
    console.log(argument + ' = ' + parameters[argument]);
  }
}

processArguments(process.argv);