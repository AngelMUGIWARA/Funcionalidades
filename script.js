const boton = document.getElementById("boton-loco");

boton.addEventListener("click", () => {
  const color = `hsl(${Math.random() * 360}, 80%, 55%)`;
  boton.style.backgroundColor = color;
});