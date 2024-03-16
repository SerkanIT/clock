// setInterval , setTimeout //

// 1 second => 1000ms //
// let minute = 60 * 1000;

// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

// setTimeout(() => {
// console.log("Hello Serkan");
// }, 1000)

function locationClock() {
  const hozir = new Date();
  const soat = hozir.getHours().toString().padStart(2, "0");
  const minuta = hozir.getMinutes().toString().padStart(2, "0");
  const sekunda = hozir.getSeconds().toString().padStart(2, "0");
  const soatSanavchi = `${soat}:${minuta}:${sekunda}`;

  const clockElement = document.getElementById("clockTime");
  clockElement.textContent = soatSanavchi;

  setTimeout(locationClock, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  locationClock();
});
