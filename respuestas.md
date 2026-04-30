27. Diferencia entre let, const y var
Let es para cuando una variable puede cambiar su valor más adelante.
Ejemplo: un puntaje que va aumentando durante el juego.

Const es para cuando el valor no va a cambiar.
Ejemplo: el nombre del jugador o una configuración fija.
Aunque sea const, si es un objeto o array, sus propiedades sí pueden cambiar.

Se recomienda evitar Var porque tiene problemas de alcance (scope) y puede generar errores difíciles de detectar.
No respeta bien los bloques (if, for, etc.), mientras que let y const sí.



28. ¿Qué es el scope?
El scope es el alcance que tiene una variable según dónde fue creada.

function mostrarNombre() {
 let nombre = "Local";
 console.log(nombre);
}

mostrarNombre();
console.log(nombre);

¿Qué se muestra primero?
Primero se muestra: Local

¿Qué se muestra después?
Después se muestra: Global

¿Por qué?
Porque hay dos variables llamadas nombre: una global ("Global"), una local dentro de la función ("Local")
Dentro de la función se usa la variable local, que tiene prioridad.
Fuera de la función, se usa la variable global.



29. Diferencia entre array y objeto:
Un array se usa cuando tenemos una lista de elementos ordenados.
Ejemplo:
const inventario = ["espada", "poción", "llave"];
Esto representaría una lista de objetos que tiene el jugador.

Un objeto se usa cuando queremos agrupar datos con nombre (propiedades).
Ejemplo:
const jugador = {
 nombre: "Luna",
 vida: 100,
 nivel: 3
};
Esto representaría un jugador con características específicas.

Básicamente:
El array es una lista de elementos
Un objeto → conjunto de propiedades con nombre



30. Eventos en JavaScript
Un evento en JavaScript es una acción que ocurre en la página y que JavaScript puede detectar para reaccionar.

boton.addEventListener("click", function () {
 console.log("El usuario hizo clic");
});

¿Qué elemento escucha el evento?
El botón (boton).

¿Qué evento se está escuchando?
El evento "click" (cuando el usuario hace clic).

¿Qué acción se ejecuta?
Se ejecuta la función que muestra en consola:
El usuario hizo clic

¿Dónde podríamos aplicar esto?
En una página web o videojuego para:
iniciar un juego
abrir un menú
disparar una acción
enviar un formulario

Básicamente, para reaccionar a acciones del usuario.