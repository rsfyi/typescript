const car = { make: 'honda', year: 2018 };

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
const pd = Object.getOwnPropertyDescriptor(car, 'make');

/*
 * Property Descriptor returns
 * - 1. value - current value of the property
 * - 2. writable - true - if value associated with this property can be changed.
 * - 3. configurable - true - type of this property can be changed and property may be deleted from this object
 * - 4. enumerable - true - if property shows up during enumeration.
 */
console.log(pd);

// above console shows if the property is writable, suppose we want to make this property writable false
Object.defineProperty(car, 'make', { writable: false });

// verify if the property is writable
console.log(Object.getOwnPropertyDescriptor(car, 'make'));

// you can not change the value of 'make property'
// car.make = 'yamaha'; // ! Error - try this in browser

console.log(car); // you  will only get the original value..because writable is false
