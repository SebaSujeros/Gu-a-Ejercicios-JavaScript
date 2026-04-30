console.log("Guía JavaScript iniciada");

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

//EJERCICIO 1
/* const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);
 */



//EJERCICIO 2
/* let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeTotal = puntosBase + bonus - penalizacion;

console.log("Puntaje total:", puntajeTotal);
 */



//EJERCICIO 3
/* const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  // Convertir valor a número
  const numero = Number(valor);

  // Sumar 10
  const resultado = numero + 10;

  // Mostrar el resultado en pantalla
  mensaje.textContent = "Resultado: " + resultado;
});
 */



//EJERCICIO 4
/* const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");


boton.addEventListener("click", function () {
  if (input.value > 12) {
    mensaje.textContent = "Puede jugar";
  } else {
    mensaje.textContent = "No puede jugar";
  }
});
 */



//EJERCICIO 5
/* boton.addEventListener("click", function () {
  if (input.value > 70) {
    mensaje.textContent = "Jugador en buen estado";
  } else if (input.value > 30) {
      mensaje.textContent = "Jugador herido";
  } else if (input.value > 1) {
      mensaje.textContent = "Jugador en peligro";
  } else {
      mensaje.textContent = "Game Over";
  }
});
 */



//EJERCICIO 6
/* let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("El juego ha comenzado");
    break;

  case "configuracion":
    console.log("Abriendo configuración");
    break;

  case "creditos":
    console.log("Mostrando créditos");
    break;

  case "salir":
    console.log("Saliendo del juego");
    break;

  default:
    console.log("Opción no válida");
}
 */



//EJERCICIO 7
/* for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("Empieza!");
 */



//EJERCICIO 8
/* let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal = puntajeTotal + 10;
}

console.log(puntajeTotal);
 */



//EJERCICIO 9
/* const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

// primer objeto
console.log(inventario[0]);

// último objeto
console.log(inventario[inventario.length - 1]);

// cantidad total
console.log(inventario.length);
 */



//EJERCICIO 10
/* const inventario = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}
 */



//EJERCICIO 11
/* let mochila = [];

mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");
mochila.pop(mochila.length - 1);
console.log(mochila);
 */



//EJERCICIO 12
/* const inventario = ["espada", "poción", "llave", "escudo"];

if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}
 */



//EJERCICIO 13
/* function saludarUsuario(nombre) {
  console.log("Hola, " + nombre);
}

saludarUsuario("Milo");
 */



//EJERCICIO 14
/* function calcularVidaRestante(vida, daño) {
 return vida - daño;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);
 */



//EJERCICIO 15
const sumar = (a, b) => {
 return a + b;
};

console.log(sumar(10, 5));