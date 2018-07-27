const res = document.getElementById("res")
const acc = document.getElementById("accur")
const lat = document.getElementById("lat")
const lon = document.getElementById("lon")
const glc = document.getElementById("glc")

let  geocoder;

const accurancy = {
    val: 0
}

acc.addEventListener('change', setAccurancy)
glc.addEventListener('click', getGeoData)

function getGeoData () {
    geocoder = new google.maps.Geocoder();
    // Feature detection
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    }
}

function setAccurancy (e) {
    accurancy.val = acc.value
    getGeoData ()
}

//Get the latitude and the longitude;
function success(position) {
  const latitude = position.coords.latitude.toFixed(accurancy.val)
  const longitude = position.coords.longitude.toFixed(accurancy.val)
  lat.textContent = latitude
  lon.textContent = longitude
  codeLatLng(latitude, longitude)
}

function error() {
  res.innerHTML = "Geocoder failed";
}

function codeLatLng(latitude, longitude) {
  const latlng = new google.maps.LatLng(latitude, longitude);
  geocoder.geocode({ latLng: latlng }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      console.log(results);
      res.innerHTML = results.map(el => `<p>${el.formatted_address}</p>`).join("");
      } else {
        res.innerHTML = "No results found";
      }
  });
}
