/** @format */

function add(num1: number, num2: number): number {
	return num1 + num2;
}

const minusOne = (num: number): number => num - 1;

const plusOne = function (num: number): number {
	return num + 1;
};

let value: number = add(2, 3);
console.log(value);
console.log(minusOne(value));
console.log(plusOne(value));
