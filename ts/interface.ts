/** @format */

class Country {
	name?: string;
	code?: number;
}
interface Address {
	state: string;
	city: string;
	country: Country[];
}
