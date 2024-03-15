"use strict";
/** @format */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    constructor(id, name, age) {
        _Employee_id.set(this, void 0); // private syntax
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.age = age;
    }
    getId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    setId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
_Employee_id = new WeakMap();
let almustapha = new Employee(1, "Almustapha", 32);
console.log("almustapha", almustapha);
console.log("age", almustapha.getAge());
