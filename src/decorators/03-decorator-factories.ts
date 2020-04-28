class Person {
  color = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @customError(' [ Pilot() ] - My custom error message')
  pilot(): void {
    throw new Error(' [ User ] - Error while creating users');
    console.log(' [ Boat ] pilot()');
  }
}

// decorator factories - returns a function
function customError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(` [ Decorator ] - ${message}`);
      }
    };
  };
}
// now instantiating the User and calling the method
const person = new Person();
person.pilot();
