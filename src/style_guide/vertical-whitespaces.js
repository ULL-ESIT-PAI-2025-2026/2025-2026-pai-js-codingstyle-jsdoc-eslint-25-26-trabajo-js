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

//Example of a mandatory blank line
class User {
  login() {
    // ...
  }

  // MANDATORY blank line ⬆️
  logout() {
    // ...
  }
}

//Example of object literal
const userProfile = {
  //User Info
  userName: 'AlanTuring',
  level: 42,
  isOnline: 'false',

  //Contact methods
  email: 'alan.turing.67@ull.edu.es',
  number: 676967420,
  xAccount: '@alanturing67' 
};

//Example NOT TO do
function calculate() {
  // NOT HERE!
  
  let x = 10;
  let y = 20;
 
  
  return x + y; // OPTIONAL: Logical separation

  // NEITHER HERE! 
}

//Correct use
function calculate() {
  let x = 10;
  let y = 20;
              
  return x + y; // OPTIONAL: Logical separation
}