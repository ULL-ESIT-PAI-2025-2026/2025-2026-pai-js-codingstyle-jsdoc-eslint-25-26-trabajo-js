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


console.log("El futuro dice:", future());

function future() {
  return "Nunca tendrás autos voladores";
}

/**
 * Explicar que
 * El código anterior funciona, incluso aunque la función esté definida debajo del código que la usa. Las declaraciones de función no forman parte del flujo de control regular de arriba hacia abajo. Conceptualmente se mueven al principio de su alcance y pueden ser utilizadas por todo el código en ese alcance.
 */