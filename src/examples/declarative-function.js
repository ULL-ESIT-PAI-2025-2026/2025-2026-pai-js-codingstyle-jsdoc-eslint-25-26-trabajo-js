console.log("El futuro dice:", future());

function future() {
  return "Nunca tendrás autos voladores";
}

/**
 * Explicar que
 * El código anterior funciona, incluso aunque la función esté definida debajo del código que la usa. Las declaraciones de función no forman parte del flujo de control regular de arriba hacia abajo. Conceptualmente se mueven al principio de su alcance y pueden ser utilizadas por todo el código en ese alcance.
 */