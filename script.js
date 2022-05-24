let car = {
  Manufactures: 'Nissan',
  Model: 'X-Trail',
  Year: 2017,
  "Average speed": 90,
  "Fuel tank capacity": 80,
  "Average fuel consumption per 100 km": 8,
  Drivers: ['Hue', 'Jack', 'John'],
}
function displayInformation(car) {
  for (let entrie of Object.entries(car)) {
  alert(entrie);
  }
}
displayInformation(car);

function addNewDriver() {
  car.Drivers.push('Sam')
  alert(car.Drivers)
}
addNewDriver()

let distance = prompt("Enter travel distance")

  function calcTime() {
      time = distance/car["Average speed"]
          if (time>4) {
              time += 1
              alert(`For your travel you need ${time.toFixed(1)} hours`)
          } else {
              alert(`For your travel you need ${time.toFixed(1)} hours`)
          }  
  }
calcTime()

  function calcFuel() {
      fuel = distance/car["Average fuel consumption per 100 km"]
      if (fuel>car["Fuel tank capacity"]) {
          alert("For your travel you need more fuel")
      } else {
          alert("You have enought fuel for the travel")
      }
  } 
calcFuel()  

let nameOfDriver = prompt("Enter the driver's name for the trip")
  function isPermittedDriver() {
      if (nameOfDriver != (car["Drivers"])) {
          alert("This driver is not allowed to drive your car")
      } else {
          alert("This driver is allowed to drive your car")
      }
  }

isPermittedDriver()