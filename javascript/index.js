function displayCityDate() {
  let berlinDateElement = document.querySelector("#berlinDate");
  let berlinDate = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinDate.format("dddd, MMM DD");

  let newYorkDateElement = document.querySelector("#newYorkDate");
  let newYorkDate = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkDate.format("dddd, MMM DD");

  let londonDateElement = document.querySelector("#londonDate");
  let londonDate = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonDate.format("dddd, MMM DD");

  let hongKongDateElement = document.querySelector("#hongKongDate");
  let hongKongDate = moment().tz("Asia/Hong_Kong");
  hongKongDateElement.innerHTML = hongKongDate.format("dddd, MMM DD");
}

function showTimeZone() {
  let berlinTimeElement = document.querySelector("#berlinTime");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss");

  let newYorkTimeElement = document.querySelector("#newYorkTime");
  let newYorkTime = moment().tz("America/New_York");
  newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");

  let londonTimeElement = document.querySelector("#londonTime");
  let londonTime = moment().tz("Europe/London");
  londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");

  let hongKongTimeElement = document.querySelector("#hongKongTime");
  let hongKongTime = moment().tz("Asia/Hong_Kong");
  hongKongTimeElement.innerHTML = hongKongTime.format("HH:mm:ss");
}

displayCityDate();
setInterval(showTimeZone, 1);
