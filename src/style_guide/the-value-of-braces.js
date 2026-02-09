/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Martínez Sopo
 * @author Marco Aguiar Álvarez
 * @author Diego García Hernández
 * @since Feb 01 2026
 */

'use strict';

function createUser() {
  // THIS ISN´T PYTHON!!
  if (user.isAuthenticated)
    grantAccess();
    logAccess(); // This will execute always!

  // Correct way:
  if (user.isAuthenticated) {
    grantAccess();
    logAccess();
  }
}

function createUser2() {
  // Wrong: for statements need always {}
  for (let i = 0; i < 5; ++i) console.log(i);

  // Even if it is just one line, always use {}.
  for (let i = 0; i < 5; ++i) {
    console.log(i);
  }
}

function exeptionToTheRule() {
  // EXCEPTION: simple if with no else statement 
  if (Array.length < 1) return null;
}
