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

// class Counter {
//     constructor(initialValue = 0){
//         this.initialValue = initialValue
//     }
//     inc(){
//         this.initialValue++
//     }
//     dec(){
//         this.initialValue--

//     }
// }

// const counter = new Counter(0)
// counter.inc()
// counter.inc()
// counter.dec()

// console.log(typeof Counter) // function 
// console.log(typeof counter) // object

// console.log(Counter.prototype === counter.__proto__) // true
// console.log(Counter.prototype === Object.prototype) // false
// console.log(Counter.prototype === Function.prototype) // false
// console.log(counter.__proto__ === Object.prototype) // false
// console.log(Counter.prototype.constructor === Counter) // true


// conclusion: We have the keyword "class", followed by the name of the class, which is a function because typeof Counter === 'function'. We can override a class because nothing protects it, for example const. We have a new keyword "constructor", which is a constructor function that is called when we use the new keyword in the context of a new object. In the constructor function, "this" refers to the new object. We have a new way of defining the prototype property because we can write it within the class body.


//  class pole and pole.prototype

class Pole {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    get area() {
        return this.length * this.width
    }
    get perimeter() {
        return 2 * (this.length + this.width)
    }
}


const pole = new Pole(10, 20)
console.log(pole) //Pole {length: 10, width: 20}
console.log(pole.area)
console.log(pole.perimeter)

// w klasach jestesmy w stanie zapisac deklaracje obiektu bbez konstruktora, jesli w klasie znajdziemy wlasciwosc gdzie jest operator przypisania = to zostanie dodana do instancji obiektu In classes, we are able to declare an object without a constructor. If we find a property in the class where there is an assignment operator "=", it will be added to the object instance.

class Counter {
    number = 1

    inc = () => {
        this.number++ // funkcja ta nie znajduje sie w prototypie a jedynie w obiekcie Counter, wiec bedzie utwozona dla kazdej instancji obiektu to bedzie x funkcji a nie jedna wspolna 
        // The function does not reside in the prototype but only in the Counter object, so it will be created for each instance of the object, resulting in x functions rather than one shared.
        
    }
}

const counter1 = new Counter()
console.log(counter1.number) //0
console.log(counter1.inc()) //ƒ ();
console.log(counter1.inc()) //ƒ ();
console.log(counter1.inc()) //ƒ ();
console.log(counter1) //Counter {number: 4}


// inheritance: extend and super:

class Person1 {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

class Employee extends Person {
    constructor(name, lastName, position) {
        super(name, lastName)
        this.position = position
    }
    sayPosition() {
        console.log(`I am ${this.position}`)
    }
}


const employee = new Employee('Kamil', 'Lewandowski', 'developer')
employee.sayHello()
employee.sayPosition()

console.log(employee) //Employee {name: 'Kamil', lastName: 'Lewandowski', position: 'developer'}

