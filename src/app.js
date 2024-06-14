/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#texto").innerHTML = generadorDeExcusas();
  });
  document.querySelector("#texto").innerHTML = generadorDeExcusas();
};
//write your code here
let generadorDeExcusas = () => {
  let quien = ["José Hernando", "Alberto", "Marcos", "Frodo"];
  let accion = ["atropelló", "hackeo", "estrelló", "rompió"];
  let que = ["mi portátil", "mi Imac", "mi móvil", "mi moto"];
  let cuando = [
    "antes de las clases",
    "ayer",
    "esta mañana",
    "mientras echaba la siesta"
  ];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);
  return (
    quien[quienIndex] +
    " " +
    accion[accionIndex] +
    " " +
    que[queIndex] +
    " " +
    cuando[cuandoIndex]
  );
};
