document.addEventListener("DOMContentLoaded", function(event) {
  const divs = Array.from(document.getElementsByClassName('will-fade'));
  divs.forEach((div, i) => setTimeout( () => div.classList.add('fade-in'), i * 500))
});