const onli = document.getElementById("online");
const plat = document.getElementById("platform");
const cook = document.getElementById("cookie");
const geop = document.getElementById("geo");
const lang = document.getElementById("language");
const oscp = document.getElementById("oscpu");
const medi = document.getElementById("media");
const result = document.querySelector(".result");
const text = document.querySelector(".text");

onli.addEventListener("click", isOnline);
plat.addEventListener("click", getPlatform);
cook.addEventListener("click", isCookie);
geop.addEventListener('click', getGeoPosition)
lang.addEventListener('click', getLanguage)
oscp.addEventListener('click', getOS)
medi.addEventListener('click', getMedia)
// resu.addEventListener('click', show)

function isOnline() {
  result.innerHTML = `Браузер в режиме ${
    window.navigator.onLine ? "online" : "offline"
  }`;
}
function getPlatform() {
  result.innerHTML = `Браузер версии ${window.navigator.userAgent}`;
}
function getMedia() {
  result.innerHTML = `mediaDevices ${window.navigator.mediaDevices.getUserMedia()}`;
}
function getLanguage() {
  result.innerHTML = `Интерфейса браузера ${window.navigator.language}`;
}
function getOS() {
  result.innerHTML = `Браузер работает под операционной системой ${window.navigator.oscpu || window.navigator.platform}`;
}
function isCookie() {
  result.innerHTML = `Браузер  ${window.navigator.cookieEnabled ? "позволяет" : "не позволяет"} поддерживать cookie`;
}
function getGeoPosition () {
    navigator.geolocation.getCurrentPosition(success, error);
 
}


function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    result.innerHTML = `
    <pre><code>
navigator.geolocation
         .getCurrentPosition(success, error);

function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    return [latitude, longitude]
}

function error() {
    return "Error";
}    
    </code></pre>
    <p>Latitude   is ${latitude.toFixed(0)} °</p> 
<p>Longitude is ${longitude.toFixed(0)} °</p>`;
}

function error() {
    return "Error";
}