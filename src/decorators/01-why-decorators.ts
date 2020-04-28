class User {
  color = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error(' [ User ] - Error while creating users');
    console.log(' [ Boat ] pilot()');
  }
}

/**
 *
 * @param target
 * @param key
 * @param desc - PropertyDescriptor is an object meant to configure property on other object
 *
 * Property Descriptor - specifically on method has follwoing properties
 *  - writable - whether or not this property can be changed.
 *  - enumerable - whether or not this property get looped over by for ..in
 *  - value - current value
 *  - configurable - property definition can be changed and property can be deleted
 */
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  // get the function value
  const method = desc.value;

  // writing the value of fun
  desc.value = function () {
    try {
      method();
    } catch (err) {
      console.log(' [ Decorator ] - Error while creating users');
    }
  };
}

// now instantiating the User and calling the method
const user = new User();
user.pilot();
