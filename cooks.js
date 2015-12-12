function cook(cookID, first, last, email, phoneNumber, lattitude, longitude, menu, mainCusine) {
	this.cookID = id;
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.phoneNumber = phoneNumber;
	this.lattitude = lattitude;
	this.longitude = longitude
	this.menu = menu;
	this.mainCuisine = mainCusine;
}

function menu(dish1, dish2, dish3) {
	this.dish1 = dish1;
	this.dish2 = dish2;
	this.dish3 = dish3;
}

function dish(displayName, costPerServing, ingredients, maxServings, cusineType) {
	this.displayName = name;
	this.costPerServing = costPerServing;
	this.ingredients = ingredients;
	this.maxServings = maxServings;
	this.cuisineType = cuisineType;
}

var chickenBriyani = new dish("Chicken Briyani", 8, ["Chicken", "Rice", "Curry"], 4, "Pakistani");
var spinichPaneer = new dish("Spinich Paneer", 6, ["Spinich", "Crepe"], 6, "Indian");
var chanaMasala = new dish("Chana Masala", 7, ["Curry", "Meat", "Chickpeas"], 8, "Indian");

var shayMenu = new menu(chickenBriyani, spinichPaneer, chanaMasala);

var shay = new cook(000000001, "Shay", "Knushnood", "sherryBaby@gmail.com", "3133118008", 42.3314, 83.0458, shayMenu, "Pakistani");