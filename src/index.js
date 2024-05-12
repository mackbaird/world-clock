function showCityTime(event) {
  let currentTime = moment()
    .tz(event.target.value)
    .format("dddd, MMMM D, YYYY h:mm A");
  alert(`It is ${currentTime} in ${event.target.value}`);
}
let citySelect = document.querySelector("#city-selector");
citySelect.addEventListener("change", showCityTime);

function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".cityDate");
  let newYorkTimeElement = newYorkElement.querySelector(".cityTime");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".cityDate");
  let madridTimeElement = madridElement.querySelector(".cityTime");
  let madridTime = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".cityDate");
  let londonTimeElement = londonElement.querySelector(".cityTime");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
