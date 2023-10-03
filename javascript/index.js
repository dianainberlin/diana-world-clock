function showTimeZone() {
  let berlinTimeElement = document.querySelector("#berlinTime");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let berlinDateElement = document.querySelector("#berlinDate");
  let berlinDate = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinDate.format("dddd, MMM DD");

  let newYorkTimeElement = document.querySelector("#newYorkTime");
  let newYorkTime = moment().tz("America/New_York");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newYorkDateElement = document.querySelector("#newYorkDate");
  let newYorkDate = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkDate.format("dddd, MMM DD");

  let londonTimeElement = document.querySelector("#londonTime");
  let londonTime = moment().tz("Europe/London");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let londonDateElement = document.querySelector("#londonDate");
  let londonDate = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonDate.format("dddd, MMM DD");

  let hongKongTimeElement = document.querySelector("#hongKongTime");
  let hongKongTime = moment().tz("Asia/Hong_Kong");
  hongKongTimeElement.innerHTML = hongKongTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let hongKongDateElement = document.querySelector("#hongKongDate");
  let hongKongDate = moment().tz("Asia/Hong_Kong");
  hongKongDateElement.innerHTML = hongKongDate.format("dddd, MMM DD");
}

function displayCityData(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("dddd, MMM DD");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let displayCityElement = document.querySelector("#citiesDisplayed");
  displayCityElement.innerHTML = `<div class="card timezone-card w-75 mb-3">
          <div class="row">
            <div class="col-sm">
              <ul>
                <li class="city-name"><p class="h3">${cityName}</p></li>
                <li class="city-date">${cityDate}</li>
              </ul>
            </div>
            <div class="col-sm city-timezone">
              <h1 class="display-4">${cityTime}</h1>
            </div>
          </div>
        </div>`;
}

setInterval(showTimeZone, 1);

let selectCity = document.querySelector("#select-city");
selectCity.addEventListener("change", displayCityData);
