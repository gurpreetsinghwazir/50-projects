let getRadius = document.getElementById("radius");
let calculate = document.getElementById("submit");
let volume = document.getElementById("volume");

calculate.addEventListener("click", display);

function display(event) {
  event.preventDefault();

  let radius = parseFloat(getRadius.value);

  console.log("Radius:", radius);

  if (radius <= 0) {
    volume.value = "NaN";
  } else {
    let calVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume.value = calVolume.toFixed(4);
  }

  console.log("Volume:", volume.value);
}
