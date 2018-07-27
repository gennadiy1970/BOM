const loc = document.getElementById("loc");
const result = document.querySelector(".result");
const text = document.querySelector(".text");

loc.addEventListener("click", showScreenData);

function showScreenData (e) {
  result.textContent = `
  window.location = "${window.location}"
  `;
}