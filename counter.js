const Counter = function (selector) {
	const container = document.querySelector(selector);

	if (!container) throw new Error("Container element not found");

	this.selector = selector;
	this.container = container;
	this.number = 0;
};

Counter.prototype.init = function () {
	this.render();
};

Counter.prototype.render = function () {
	this.container.innerText = "";

	const h1 = new Header(this.number)
	const button = new Button("+", () => this.inc());
	h1.innerText = this.number;
	
	this.container.appendChild(h1.render());
	this.container.appendChild(button.render());
};

Counter.prototype.inc = function () {
	this.number = this.number + 1;
	this.render();
};

Counter.prototype.status = function () {
	console.log("Current number is: " + this.number);
	return this.number;
};

Counter.prototype.toString = function () {
	return "Current number is: " + this.number;
};

Counter.prototype.valueOf = function () {
	return this.number;
};
