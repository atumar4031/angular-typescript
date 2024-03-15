/** @format */

class Employee {
	#id: number; // private syntax
	private name: string;
	private age: number;

	constructor(id: number, name: string, age: number) {
		this.#id = id;
		this.name = name;
		this.age = age;
	}

	getId() {
		return this.#id;
	}

	setId(id: number) {
		this.#id = id;
	}

	getName() {
		return this.name;
	}
	setName(name: string) {
		this.name = name;
	}

	getAge() {
		return this.age;
	}

	setAge(age: number) {
		this.age = age;
	}
}

let almustapha = new Employee(1, "Almustapha", 32);
console.log("almustapha", almustapha);
console.log("age", almustapha.getAge());
