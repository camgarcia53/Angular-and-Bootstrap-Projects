<script>

 function makeCar() {
 var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
 var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
 var years = [2025,1902,1948,1954,2001];
 var colors = ["red", "blue", "tan", "yellow", "white"];
 var convertible = [true, false];

 var rand1 = Math.floor(Math.random() * makes.length);
 var rand2 = Math.floor(Math.random() * models.length);
 var rand3 = Math.floor(Math.random() * years.length);
 var rand4 = Math.floor(Math.random() * colors.length);
 var rand5 = Math.floor(Math.random() * 5) + 1;
 var rand6 = Math.floor(Math.random() * 2);

 var car = {
 make : makes[rand1],
 model: models[rand2],
 year: years[rand3],
 color: colors[rand4],
 passengers: rand5,
 convertible: convertible[rand6],
 mileage: 0
};
	return car;
 }
 



var userChoice = prompt("Do you like Cars?");
if (userChoice === "yes"){

} else if(userChoice === "no") {
	alert("BULLSHITTT");
    
} else {
	
};

function displayCar(car) {
 alert("Your new car is a " + car.year + " " + car.make + " " + car.model);
 }

 var carToSell = makeCar();
 displayCar(carToSell);


</script>

