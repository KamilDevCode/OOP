//  class keyword:  

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}


const person = new Person('Kamil', 'Lewandowski')
person.sayHello()

console.log(person)

class Counter {
    constructor(initialValue = 0){
        this.initialValue = initialValue
    }
    inc(){
        this.initialValue++
    }
    dec(){
        this.initialValue--

    }
}

const counter = new Counter(0)
counter.inc()
counter.inc()
counter.dec()

console.log(typeof Counter) // function 
console.log(typeof counter) // object

console.log(Counter.prototype === counter.__proto__) // true
console.log(Counter.prototype === Object.prototype) // false
console.log(Counter.prototype === Function.prototype) // false
console.log(counter.__proto__ === Object.prototype) // false
console.log(Counter.prototype.constructor === Counter) // true


// conclusion: We have the keyword "class", followed by the name of the class, which is a function because typeof Counter === 'function'. We can override a class because nothing protects it, for example const. We have a new keyword "constructor", which is a constructor function that is called when we use the new keyword in the context of a new object. In the constructor function, "this" refers to the new object. We have a new way of defining the prototype property because we can write it within the class body.