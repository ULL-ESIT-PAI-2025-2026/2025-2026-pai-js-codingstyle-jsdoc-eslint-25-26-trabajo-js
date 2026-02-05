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


// Correct: breaking the line in asignation and in division.
let currentEstimate =
    calc(currentEstimate + x * currentEstimate) /
    2.0;

// Wrong: breaking the line in the middle of a function call.
const currentEstimate2 = calc(currentEstimate2 + x *
    currentEstimate2) / 2.0;


// Correct: Breaking the line AFTER the operator 
const longString = 'This is a very long sentence ' +
    'that needs to be split into ' +
    'multiple parts.';


// EXCEPTION: breaking the line after the ')'
const data = user.getData()
    .toLowerCase()
    .split(',');

