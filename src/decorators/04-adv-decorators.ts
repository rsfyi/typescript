@classDecorators
class ParamDecorators {
  color = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @errorLog(' [ Pilot() ] - My custom error message')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('flash');
    } else {
      console.log('snail');
    }
  }
}

// class level - decorators -> input - constructor function of class
function classDecorators(constructor: Function) {
  console.log(constructor);
}

// index - paramter position
function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

// decorator factories - returns a function
function errorLog(message: string) {
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
const paramDec = new ParamDecorators();
paramDec.pilot('fast');
