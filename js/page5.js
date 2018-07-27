const loc = document.getElementById("loc");
const bac = document.getElementById("bac");
const frw = document.getElementById("frw");
const got = document.getElementById("got");
const result = document.querySelector(".result");
const text = document.querySelector(".text");

loc.addEventListener("click", showScreenData);
bac.addEventListener("click", goBack);
frw.addEventListener("click", goForward);
got.addEventListener("click", goTo);

function showScreenData (e) {
  result.innerHTML = `
  <p>window.history.length = "${window.history.length}"</p>
  <p>window.history = "${window.history}"</p>
  <p class="comment">см. консоль</p>
  `;
  console.log(window.history);
  
}

function goBack () {
  window.history.back();
}
function goForward () {
  window.history.forward()
}
function goTo () {
  window.history.go(-1)
}