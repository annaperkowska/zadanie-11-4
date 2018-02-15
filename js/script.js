function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is $" + this.price)
}

var iPhone6S = new Phone("Apple", 5555, "red"),
	GalaxyS6 = new Phone("Samsung", 4444, "yellow"),
	One = new Phone("OnePlus", 3333, "green"),
	Nokia3310 = new Phone("Nokia", 2222, "grey");

iPhone6S.printInfo();

GalaxyS6.printInfo();

One.printInfo();

Nokia3310.printInfo();