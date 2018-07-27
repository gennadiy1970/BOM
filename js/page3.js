const screen = document.querySelector(".screen");
const result = document.querySelector(".result");
const text = document.querySelector(".text");

screen.addEventListener("click", showScreenData);

function showScreenData (e) {
  result.textContent = `
  window.screen.width = ${window.screen.width}
  window.screen.height = ${window.screen.height}
  window.screen.availWidth = ${window.screen.availWidth}
  window.screen.availHeight = ${window.screen.availHeight}
  window.screen.colorDepth = ${window.screen.colorDepth}
  window.screen.pixelDepth = ${window.screen.pixelDepth}
  `;
}