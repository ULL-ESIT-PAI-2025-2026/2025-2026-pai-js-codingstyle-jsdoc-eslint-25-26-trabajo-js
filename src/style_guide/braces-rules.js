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

/**
 *  The opening { on the same line as the statement
 * - The line is broken just after {
 * - The line is broken just after the last line inside the block
 * - The line is broken just after }, unless it is a logical continuation, that is, 
 *   an `else`, `catch`, or `while` statement in a `do-while` statement. If there is one of these, it is left on the 
 *   same line as }
 *
 */
'use strict'

function deployOnFriday() {
  try {
    pushToProd();
  } catch (disaster) {
    blameTheIntern();
  }

  if (bossIsWatching) {
    pretendToWork();
  } else {
    watchMemes();
  }
}