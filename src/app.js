import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let quien = [
    "El gato",
    "Mi abuela",
    "El cartero",
    "Mi pájaro"
  ];

  let como = [
    "se comió",
    "orinó",
    "falló",
    "rompió"
  ];

  let que = [
    "el trabajo",
    "el proyecto",
    "el código",
    "el archivo"
  ];

  let cuando = [
    "justo antes de enviarlo.",
    "anoche.",
    "esta mañana.",
    "5 minutos antes."
  ];

  document.getElementById("generate").addEventListener("click", function () {
    let excuse =
      quien[Math.floor(Math.random() * quien.length)] + " " +
      como[Math.floor(Math.random() * como.length)] + " " +
      que[Math.floor(Math.random() * que.length)] + " " +
      cuando[Math.floor(Math.random() * cuando.length)];

    document.getElementById("excusa").innerHTML = excuse;
  });
};