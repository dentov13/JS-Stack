class Dog {
	constructor(name) {
		this.name = name;
	}

	bark() {
		return `Gav gav, I am ${this.name}`;
	}
}

module.exports = Dog;