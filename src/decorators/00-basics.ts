/*
 * decorators
 *  - decorators are Functions that can be used to modify/change different properties/methods of class.
 * decorators can be applied to -
 *  - properties
 *  - accessor
 *  - methods
 */
class Boat {
  // property
  //   @testDecorator
  color = 'red';

  // accessor
  //   @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // method
  @testDecorator
  pilot(): void {
    console.log(' [ Boat ] pilot()');
  }
}

/**
 *
 * @param target - returns the prototype of the Boat class or constructor function
 * @param key - key/name of the element we have applied decorator to i.e properties,accessors, methods
 * ! it runs for single time - when we define the class or when your file is executed
 */
function testDecorator(target: any, key: string): void {
  console.log(' target ', target);
  console.log(' key ', key);
}

// how decorator calls
// testDecorator(Boat.prototype, 'pilot'); // if we don't use decorator
