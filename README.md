# Validador de Expresiones Equilibradas:

Este programa crea una función que reciba una expresión y determine si sus delimitadores (paréntesis «()», llaves «{}», y corchetes «[]») están equilibrados.

La función devuelve _True_ si están equilibrados y _False_ en caso contrario.

## Funcionamiento de la Identificación de Delimitadores:

La función identifica y verifica únicamente los paréntesis «()», las llaves «{}», y los corchetes «[]».
Los caracteres no delimitadores (como letras, números y operadores) son ignorados en el proceso de validación.

## Reglas para la Identificación de Expresiones Equilibradas:

Cada delimitador de apertura debe tener su correspondiente delimitador de cierre en el orden correcto.
Los delimitadores anidados deben cerrarse en el orden inverso al que se abrieron.

**Ejemplo:**

«({[]})» es equilibrado.

«([)]» no es equilibrado.

La expresión debe terminar con todos los delimitadores cerrados.


## Reglas de Manejo de Errores y Casos Especiales:

La función debe devolver _False_ si la expresión contiene un número desigual de delimitadores de apertura y cierre.

La función debe devolver _True_ si no hay delimitadores en la expresión, ya que se considera equilibrada.

Para cada caso, la función debe manejar adecuadamente delimitadores solitarios sin pareja de cierre o apertura.


## Manejo Interfaz para Ingresar y Validar Expresiones:

Se crear una interfaz simple en la que el usuario pueda ingresar una expresión y ver si está equilibrada o no.