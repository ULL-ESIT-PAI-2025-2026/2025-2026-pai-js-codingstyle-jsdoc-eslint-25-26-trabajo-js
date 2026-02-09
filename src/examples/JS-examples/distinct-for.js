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
 * @desc shows how the loop works with “in” and "of"
 */

'use strict';

function forIn(list) {
  for (let memberId in list) { // index
    console.log(memberId);
  }
}

function forOf(list) {
  for (let memberValue of list) { // value
    console.log(memberValue);
  }
}

function main() {
  let list = [3, 2, 1, 0];
  forIn(list);
  console.log('---------------------------------')
  forOf(list);
}

main();
