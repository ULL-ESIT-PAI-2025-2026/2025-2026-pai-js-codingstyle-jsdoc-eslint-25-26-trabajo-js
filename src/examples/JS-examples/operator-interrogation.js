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
 * @desc Shows the behaviour of the ?? operator.
 *
 */
'use strict'

console.log( 0 || 100 );
 // → 100 
console.log( 0 ?? 100 );
 // → 0 
console.log( null ?? 100 );
 // → 100
console.log( undefined ?? 100);
 // → 100
