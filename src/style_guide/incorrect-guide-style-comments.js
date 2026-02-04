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

'use strict'

function pow(x,n) //1. Missing space afetr comma, 8. Incorrect variable naming 
{ // 2. Brace is not in the same line as statement
  let result=1; // 3. no space arround '=' 
  for(let i=0;i<n;i++) {result*=x;} // 4. Coding horror
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // 3. no space arround '=' , 5. mutiple declarations in the same line, 8. Incorrect variable naming 
if (n<=0) // 3. no space arround <=
{ // 2. Brace is not in the same line as statement
console.log(`Power ${n} is not supported, please enter an integer number greater than zero`); //6. No indentation, 7 More than 80 characters in the smae line
}
else
{ // 2. Brace is not in the same line as statement
console.log(pow(x,n)) //6. No indentation
}
