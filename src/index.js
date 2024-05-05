function showCityTime(event) {
  let currentTime = moment()
    .tz(event.target.value)
    .format("dddd, MMMM D, YYYY h:mm A");
  alert(`It is ${currentTime} in ${event.target.value}`);
}
let citySelect = document.querySelector("#city-selector");
citySelect.addEventListener("change", showCityTime);
