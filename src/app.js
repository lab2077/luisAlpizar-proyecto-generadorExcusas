import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const quien = ["El gato", "Mi abuela", "El cartero", "Mi pájaro"];
  const como = ["se comió", "orinó", "falló", "rompió"];
  const que = ["el trabajo", "el proyecto", "el código", "el archivo"];
  const cuando = ["justo antes de enviarlo.", "anoche.", "esta mañana.", "5 minutos antes."];

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  document.getElementById("generate").addEventListener("click", function () {
    
    let excuse = `${randomItem(quien)} ${randomItem(como)} ${randomItem(que)} ${randomItem(cuando)}`;

    document.getElementById("excusa").innerHTML = excuse;
  });
};