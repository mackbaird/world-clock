let edinburghTime = moment()
  .tz("Europe/London")
  .format("dddd, MMMM D, YYYY h:m A");

let tampaTime = moment()
  .tz("America/New_York")
  .format("dddd, MMMM D, YYYY h:m A");

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");

function showCityTime(event) {
  if (event.target.value === "edinburgh") {
    alert(`It is ${edinburghTime} in Edinburgh, UK`);
  }
  if (event.target.value === "tampa") {
    alert(`It is ${tampaTime} in Tampa, FL USA`);
  }
  if (event.target.value === "tokyo") {
    alert(`It is ${tokyoTime} in Tokyo, Japan`);
  }
}
let citySelect = document.querySelector("#city-selector");
citySelect.addEventListener("change", showCityTime);
