//  the new keyword create a new object with the prototype of the constructor function 
// 1. creates new object
// 2. sets prototype of that object to prototype property of the constructor function
// 3. calls the constructor function in context of newly created object (1.)
// 4. return this object

function myOwnNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    const result = constructor.apply(obj, args);
    return result instanceof Object ? result : obj;
}

const Person = function(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayHello = function() {
    console.log(`Hello ${this.name}`)
}



