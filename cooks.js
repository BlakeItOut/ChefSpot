function cook(cookID, first, last, email, phoneNumber, address, menu, mainCusine) {
	this.cookID = id;
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.phoneNumber = phoneNumber;
	this.address = address;
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