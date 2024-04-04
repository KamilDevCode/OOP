const Inc = function () {
	console.log(this);
	/*
    
{name: 'counter1', number: 0, inc: ƒ, status: ƒ}
inc: ƒ ()
name: "counter1"
number: 1
status: ƒ ()
[[Prototype]]
: Object


{name: 'counter2', number: 0, inc: ƒ, status: ƒ}
inc: ƒ ()
name: "counter1"
number: 1
status: ƒ ()
[[Prototype]]
: Object
*/ // object counter1 i counter2
	console.log(this.number); // 1
	this.number = this.number + 1;
}

const status = function () {
    console.log('Current number is: ' + this.number)
}


const counter1 = {
    name: 'counter1',
    number: 0,
    inc: Inc,
    status: status,
}

const counter2 = {
    name: 'counter2',
    number: 0,
    inc: Inc,
    status: status,
}
// console.log(counter1);
// console.log(counter2);
counter1.inc(); // this będzie odnosiło się do counter1
// counter1.status(); // number będzie 2 
counter2.inc();

counter2.status();
;
// kontekstem wywołania funkcji inc dla counter1 i counter2 jest counter1 i counter 2 - na to wskazuje this i poprzez this możmy odnosić się do obiektu na którym wywoływana jest funkcja. koontekstem wywołania możemy sterować i możemy narzucac funkcjom - kontekstem wywołania jest to na czym ta funkcja jest wyoływana

//this nie jest zmienna tylko słowem kluczowym, który zawsze wskazuje na obiekt, który jest kontekstem wyołania danej funkcji

// kontekstem wywołania dowolnej funkcji w globalnym kontekście jest właśnie window,a zwracana wartość jest równa undefined jeśli wywołamy jakąś funkcję , która jest używana wewnątrz obiektów jako metoda wywołana na obiekcie będzie miała ten dany obiekt jako kontekst wykonawczy , a jeśli zostanie wywołana w globalnym scopie / globalnym zakresie to bedzie miala przekazany globalny obiekt window jako this, jako kontekst wykonawczy.

// window.number mamy NaN bo window.number ktory rowny jest undefined zwiększamy o 1 a undefied plus 1 daje nam NaN bo wywołaliśmy funkcje w kontekście globalnym


//----------------------factory function:

// const makeCounter = function (name) {
//     return {
//         name: name,
//         number: 0,
//         inc: makeCounter.inc,
//         status: makeCounter.status
//     }
// }

// makeCounter.inc = function () {
//     this.number = this.number + 1
// }

// makeCounter.status = function () {
//     console.log('Current number is: ' + this.number)
// }


// const counter1 = makeCounter('counter1') 
// const counter2 = makeCounter('counter2') 



// const numbers = [1,2]

// const add = ([a,b]) => {
//     // const a = numbers[0]
//     // const b = numbers[1]

//     // const [a, b] = numbers
//     // console.log(a, b)


//     return a + b
// }


// console.log(add(numbers));

//array destructuring with parametrs:


// function calculateTotalPrice([price, quantity]) {
//     let totalPrice = price * quantity;
//     return totalPrice;
// }

// let product = [10, 5]; // Cena: 10, Ilość: 5
// let total = calculateTotalPrice(product);
// console.log(`Total price: $${total}`); // Wyświetli: Total price: $50

// // kolejny przykład:

// function makePizza(size, toppings) {
//   return {
//     size: size,
//     toppings: toppings
//   };
// }

// let pizza = makePizza(12, ['pepperoni', 'mushrooms']);
// console.log(pizza);

// // nastęny przykład:

// function add({ a, b }) {
//   return a + b;
// }

// let result = add({ a: 1, b: 2 });
// console.log(result);


// // destructuring - wydobywanie danych

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     country: 'USA',
//     job:{
//       position: 'Engineer',
//       company: 'Google'
//     }
//   };
  
//   const { name, age } = person;
  
//   console.log(name); // John
//   console.log(age); // 30

//   const { name: firstName, age: userAge, ...rest } = person;
  
//   console.log(firstName); // John
//   console.log(userAge); // 30
//   console.log(rest); // { city: 'New York', country: 'USA'}


//   // destrukturyzacja zagnieżdzonego obiektu:
// const { job: { position, company } } = person;


// console.log(position); // Engineer
// console.log(company); // Google


// const me = {
//   name: "Kamil", 
//   age: 30
// }

// const { name: firstName} = me


// // console.log(firstName); // Kamil


// const createPerson = (name, age) => {
//   return {
//     name: name,
//     age: age
//   }
// }

// const person = createPerson('Kamil', 30)

// // konstruktor
// const Person = function (name, age){
//   this.name = name
//   this.age = age
// }


// const person2 = new Person('Damian', 40)



// console.log(personName); // Damian
// // console.log(personAge); // 40

// const person3 = new Person('Kamil', 30)

// // const {name: firstName, age: personAge} = person3

// const {firstName: name} = person3

// console.log(person3); // Kamil
// // console.log(personAge); // 30    

// console.log(person, person2, person3);

// po której stronie jest nazwa zmiennej a po której właciwość? wlasciwosci obiektu piszemy z lewej strony sa wyszukiwan z obiektu a nazwy zmiennej gdzie maja znalezc sie wartosci z obiektu po prawej stronie, czyli:
//  name: jako wlasciwosc obiektu firstName przypisujemy do tej zmiennej



// --------------rest i spread operator---------

const logAllArgs = function(args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]); 
}
}

console.log(logAllArgs(1,2,3, [4,5], {a: 4, b: 6} ))
// dlaczego undefined?

/*

W funkcji logAllArgs próbujesz użyć pętli for do iteracji po elementach, ale oczekujesz, że args będzie tablicą, co nie jest poprawne w przypadku wywołania funkcji, które przekazuje różne argumenty, a nie pojedynczą tablicę. Dlatego args.length będzie undefined, ponieważ nie można wywołać .length na typie undefined.

Jeśli chcesz używać tej funkcji, aby przyjmować różne argumenty i wyświetlać je, możesz zastosować obiekt arguments, który jest dostępny we wszystkich funkcjach JavaScript i reprezentuje wszystkie przekazane do funkcji argumenty jako tablicę podobny obiekt. Oto jak możesz to zrobić:
*/


// const logAllArgs = function(args) {
//   for(let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]); 
// }
// }

// console.log(logAllArgs(1,2,3, [4,5], {a: 4, b: 6} ))


const logArgs = (...args) => args.forEach(arg =>  console.log(arg))

logArgs(1,2,3, [4,5], {a: 4, b: 6} )

/*
operatorrest może zbierać wszystkie argumenty funkcji oraz pozostałe argumenty

W tym przypadku możesz użyć metody forEach, ponieważ args jest tablicą, a nie obiektem arguments. W definicji funkcji logArgs, parametr ...args jest destrukturyzowany jako tablica za pomocą operatora rest (...). Dzięki temu, gdy wywołujesz funkcję logArgs i przekazujesz do niej argumenty, są one zbierane w postaci tablicy o nazwie args.

Ponieważ args jest tablicą, możesz na niej używać metod tablicowych, takich jak forEach, map, filter itp. W tym konkretnym przypadku, forEach jest używane do iteracji po wszystkich elementach tablicy args, co pozwala na wyświetlenie każdego argumentu przy użyciu console.log(arg)
*/


const loggAllArgs = function(firstArg, ...restOfArgs) {
  console.log('This is first argument', firstArg);
  console.log('this is rest of arguments', restOfArgs);
}


loggAllArgs(1,2,3, [4,5], {a: 4, b: 6} ) // This is first argument 1
//this is rest of arguments (4) [2, 3, Array(2), {…}]

const loggAllArgsAgain = function(firstArg, ...restOfArgs) {

  console.log(`this is a firstArgument: ${firstArg}`)
  console.log(`this is a restOfArgs: ${restOfArgs}`)
}

loggAllArgsAgain({a: 4, b: 6}, [4,5] ) //this is a firstArgument: [object Object] this is a restOfArgs: 4,5
// jesli mamy przekazany obiekt a mamy template string to cale wyrazenie zostanie zamienione na string poniewaza zamieniony obiekt na string to mamy [object object]

//-------------es 10 lista zmian---------:

//podaj listę zmian w es 10:

// const me = {
//     name: "Kamil",
//     age: 30,
//     lastName: "Lewandowski"
    
// }

// const newEntries = Object.entries(me)

// console.log(newEntries); /*
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Kamil']
// 1: (2) ['age', 30]
// 2: (2) ['lastName', 'Lewandowski']
// length: 3
// */

// const entries = Object.fromEntries(newEntries)

// console.log(entries); /*
// { name: 'Kamil', age: 30, lastName: 'Lewandowski' }
// */


const me = { name: "KAmil", lastName: "Lewandowski" };

const meEntries = Object.entries(me);

console.log(meEntries);/*
/ (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Kamil']
// 1: (2) ['lastName', 'Lewandowski']
// length: 2
*/


const meEntriesLowerCase = meEntries.map(([key, val]) => {
	return [key, val.toLowerCase()];
});

console.log(meEntriesLowerCase);

const meLowerCase = Object.fromEntries(meEntriesLowerCase);

console.log(meLowerCase);



// -------------------------FACTORY FUNCTIONS------------------

const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }
}

const person1 = createPerson('Kamil', 30)

console.log(`hello my name is ${this.name} and i am ${this.age} years old`);


// funkcje konstruktora:

// const Person = function (name, age){
//   this.name = name
//   this.age = age
// }

// const person2 = new Person('Damian', 40)


// // constructor function
// const Counter = function (name) { 
//     // this points at newly created  empty object
//     // when is used with new keyword
//     this.name = name
//     this.number = 0 
// }

// Counter.prototype.inc = function () {
//     this.number = this.number + 1
// }

// Counter.prototype.status = function () {
//     console.log('Current number is: ' + this.number)
//     return this.number
// }

// const counter1 = new Counter('counter1')
// const counter2 = new Counter('counter2')
// const counter3 = new Counter('counter3')
// const counter4 = new Counter('counter4')

// counter1.inc()
// counter2.inc()
// counter2.inc()
// if (counter1.status() !== 1) throw new Error('Counter 1 do not work')
// if (counter2.status() !== 2) throw new Error('Counter 2 do not work')

// funkcje konstruktora:

const Car  = function (name, color) {
  this.name = name
  this.color = color
}

Car.prototype.drive = function () {
  console.log('I am driving')

  this.status = function () {
    console.log('I am driving')
  }

  this.stop = function () {
    console.log('I am stopped')
  }

  this.status()

  this.stop()

  return this
}

const car1 = new Car('BMW', 'red')
car1.drive()

const car2 = new Car('Audi', 'blue')
car2.drive()

console.log(car1.prototype === Car.prototype);
console.log(car1.prototype === car2.prototype);

console.log(Car.prototype.isPrototypeOf(car1)); // Output: true
console.log(Car.prototype.isPrototypeOf(car2)); // Output: true


// w każdej funkcji istnieje właściwość prototype, która jest obiektem i możemy do środka tego obiektu dodawaać kolejne właściwości , w prototype jest constructor- właściwość wskazująca na funkcję konstruktora, jeśli funkcja jest użyta ze słowem kluczowym new to znaczy ze te slowo stworzy nowy obiekt, uzyje tego obiektu jako this wewnątrz tej funkcji i podstawi pod prototyp tego nowego obiektu właściwość prototype z funkcji z której ten obiekt został stworzony.

// prototyp i właściwość prototype to dwie rożne kwestie w javascript to ten sam obiekt, ale wlasciwosc prototype jest wzorem dla wszystkich prototypow obiektu 
// w zwiazku z tym, ze prototype jest obiektem możemy dodawać dowolną ilość wlaściwości, w przypadku car do wlasciwosci drive  przypisujemy kolejne funkcje 

// slowo kluczowe new podczzas wywolania funkcji konstruktora oprocz tego ze tworzy nowy obiekt w car1, nastepnie wywoluje te funkcje  Car podstawiajac ten obiekt pod slowo kluczowe this i dodaje do prototypu tego obiektu car.prototype i ta wlasciwosc car.prototype laduje w prototypie Car

// car1.name przeszukuje javascript obiekt car1 i szuka wlasciwosc name , każdy z obiektów ma swój prototyp, czyli inny obiekt, który jest zbiorem wspólnych właściwości dla tego obiektu




// każda np tablica ma swój wlasny prototyp w ktorym znajduja się rozne metody [] instancja tablicy, czyli obiekt powstał na wzór każdej innej tablicy a w konstruktorze każdej tablicy jest funkcja tworzaca tablice, doklądnie tak samo kazdy obiekt {} powstaje z funkcji która służy do tworzenia obiektów 

//w js istnieja wbudowane funkcje konstruktora sluzace do tworzenia instancji, czyli pojedynczych obiektów literly obiektu, literaly tablicy, stringu 

// konstruktor new Array, new Object, new String stworzza nam nowe obiekty o typie Array, Object, String 
// konsrruktor new String wyciagnie nam string w psostaci obiektowej literal obiektu wyciaga od razu wartosc z tego obiektu jakim jest typ prymitywny, typy prymitywne nadal sa typami prymitywnymi, a nie obiektami, nie maja wlaściwości 



// prototyp tez jest obiektem i ma wlasciwosc proto
// a kazdy obiekt ma swoj wlasny prototyp czyli wlasciwosci dla wszystkich obiektow  a Object jest podstawowa jednstka dla wszystkich obiektow w javascrip


// car1.__proto__.constructor; dzieki konstruktorowi temu dowiadujemy sie jaka funkcja utworzyla obiekt  ƒ (name, color) {
  // this.name = name
  // this.color = color
// }

// dlatego wewnatrz dowolenj funkcji we wlasciwosci prototype domyslnie zapisany jest konstruktor z referencją na sama siebie poniewaz wladciwosc prototype stanie sie prototypem obiektu tworzonych na podstawie funkcji:  new Car('BMW', 'red') car1.drive() const car2 = new Car('Audi', 'blue') car2.drive() i wewnatrz obiektow bedzie dostepna wlasciwosc konstruktor  w ktorej bedzie zapisana funkcja ktora skonstruowala dany obiekt \


// --------------------PROJECT---------------

const Counter = function (selector) {
  const container = document.querySelector(selector)

  if(!container){
    throw new Error(`container ${selector} not found`)
  }
  this.selector = selector
  this.container = container
  this.number = 0

  console.log(this)
}

Counter.prototype.init = function(){
  this.render()

}

Counter.prototype.render = function(){
  this.container.innerText = ''

  const h1 = document.createElement('h1')
  const button = document.createElement('button')
  button.innerText = 'inc'
  // button.addEventListener('click', () => {
  //   this.inc()
  //   // this.status()
  //   // this.init()
  // })
  
  // console.log(this);
  // console.log(this.inc);
  
  const self = this // counter 1
  
  button.addEventListener('click',
  function(){
    

    // tę funkcje wywołuje przeglądarka w dev toolsach mamy annonymous zadna funkcja nie jest na call stacku funcja przekazano jako handler  jest wywołana w momencie klikniecia w przycisk addeventlistener jest metoda wyzszego rzedu , jesli podpinamy handler pod dany element na którym chcemy wywołać metode addeventlistener to wartością this jest referencja do tego elementu na którym została wykonana funkcja handler
    console.log(this); // button Inc
    console.log(this === button) // true
    // console.log(this.inc);
    console.log(self)
    // this.inc()


    // this nie działą na zasadzid scope pomimo, ze handler jest zadeklarowany w scopie funkcji render to nie przyjmie this na zasadzie sscope  ale zaisujc this w zmiennej self to ta funkcja handler zapamieta referencje do tej zmiennej self, a zmienna self zapisze referencje do tego do czego wskazuje slowo kluczowe this funkcji render a this wskazywało na nasz obiekt , wiec self bedzie mialo zapamietany nasz obiekt , a z uwagi na to ,ze identyfikatory zmiennych dzialaja na zasadzie scope to ta funkcja poszuka w zewnetrznym scopie self 

    self.inc()
  })
 
  this.container.appendChild(button)

  // ----------ZA POMOCA FUNKCJI STRZALKOWEJ------
  // const button2 = document.createElement('button')
  // button2.innerText = 'dec'
  // button2.addEventListener('click', () => {
  //   this.dec()
  // })


  //--------- ZA POMOCA DEKLARACJI FUNKCJI---------:
  const button2 = document.createElement('button')
  button2.innerText = 'dec'
  button2.addEventListener('click', function(){
    self.dec()
  })


  this.container.appendChild(button2)
  h1.innerText = this.number
  this.container.appendChild(h1)
}

Counter.prototype.inc = function(){
  this.number++
  this.render()
}

Counter.prototype.dec = function(){
  this.number--
  this.render()
}
Counter.prototype.status = function(){
  console.log( `Current number is: ${this.number}`) 
  return this.number
}

const Counter1 = new Counter('.counter-1')
const Counter2 = new Counter('.counter-2')
/*
THIS ODNOSI SIĘ DO .--COUNTER-1
Counter {selector: '.counter-1', container: div.counter-1, number: 0}
container: div.counter-1
number: 0
selector: ".counter-1"

[[Prototype]]: Object
inc: ƒ ()init
: ƒ ()render
: ƒ ()status
: ƒ ()constructor
: ƒ (selector)
[[Prototype]]
: Object
*/

Counter1.init()
Counter2.init()


// --------Zmiana kontekstu – bind, call i apply-------:


const sayHello = function(hello = 'hello', endMark = '!') {
	// console.log('kontekst wywołania to:', this); //{name: 'Kamil', lastName: 'Lewandowski', sayHello: ƒ}
  console.log(`Hello ${this.name} ${this.lastName} ${hello} ${endMark}`);
};

sayHello() /* W przypadku pierwszego wywołania sayHello(), metoda sayHello jest wywoływana bezpośrednio w kontekście globalnym, więc this wskazuje na obiekt globalny (np. window w przypadku przeglądarki). Ponieważ w obiekcie globalnym nie ma zdefiniowanej właściwości name ani lastName, dlatego otrzymujesz wynik undefined*/

sayHello('Hi', '!!!!')

const Me ={
  name: "Kamil",
  lastName: "Lewandowski",
  sayHello: sayHello
}

Me.sayHello() /* W przypadku drugiego wywołania sayHello(), metoda sayHello jest wywoływana z obiektu Me, który zawiera właściwość name i lastName. W tym przypadku this wskazuje na obiekt Me. */

// aby to uzyskac nie musze przypisywac tej funcji do srodka tego obiektu:

sayHello.call(Me) /*Metoda call() pozwala na wywołanie funkcji z określonym kontekstem (wartością this). W przypadku sayHello.call(Me), metoda sayHello jest wywoływana w kontekście obiektu Me, co oznacza, że this w funkcji sayHello będzie wskazywać na obiekt Me. Dlatego też otrzymujesz oczekiwany wynik "Hello Kamil Lewandowski". Metoda call() umożliwia nadanie dowolnego kontekstu funkcji podczas jej wywoływania. */

Me.sayHello('Hi', '!!!!')
// const person = {
//   name: 'Kamil',
//   lastName: 'Lewandowski',
//   sayHello: sayHello
// }

// person.sayHello() /* W przypadku trzeciego wywołania sayHello(), metoda sayHello jest wywoływana z obiektu person, które zawiera właściwość name i lastName. W tym przypadku this wskazuje na obiekt person. */


// bez przypisywania funkcji do obiektu wywołać ją w kontekscie tego obiektu: this wskazuje na obiekt bo kontekstem wywołania jest zawsze obiekt. i najczęściej this jsest ty co stoi przed kropką,

const person = {
name: 'DArek',
lastName: 'Lewandowski'

}

sayHello.call(person) /* funkcja call przyjmuje jako pirwszy argument kontekst wywołania,   */

sayHello.call(person, "Howdy", "!!!!") // pierwszym argumentem jest kontekst i drugi argument to argumenty przekazane do funkcji jako parametry: (hello = 'hello', endMark = '!')

sayHello.apply(person) /*  Hello Kamil Lewandowski , bez przekazania argumentów będzie hello undefined */

// sayHello.apply(person, 'Hi', '!!!!') 
// script.js:615 Uncaught TypeError: CreateListFromArrayLike called on non-objectat script.js:615:10 " oznacza, że metoda apply została wywołana na wartości, która nie jest obiektem, ale jest traktowana jako obiekt w kontekście, w którym powinna być tablicą. Jest to najprawdopodobniej spowodowane błędem w przekazywaniu argumentów do metody apply.

// W przypadku metody apply, pierwszy argument powinien być obiektem, na którym funkcja zostanie wywołana jako this, a drugi argument powinien być tablicą zawierającą argumenty przekazywane do funkcji. W twoim przypadku, pierwszy argument (person) wydaje się być poprawnym obiektem, ale drugi argument został przekazany jako pojedyncze wartości ('Hi' i '!!!!'), a nie jako tablica, co jest wymagane przez apply. Stąd pojawia się błąd. Aby rozwiązać ten problem, musisz przekazać argumenty jako tablicę, tak jak pokazano wcześniej.

sayHello.apply(person, ['Howdy', '!!!!']) // drugim argumentem jest zawsze tablica argumentów)

// apply możemy zapisać też inaczej tworząc nową tablicę z argumentami a następnie przekazać tę tablicę z argumentami jako referencję do argumentu funkcji

const args = ['Hyie', '!!!!']
sayHello.apply(person, args)

const sayHelloBound = sayHello.bind(person) // napisanie funkcji bind nie wywołuje jej ale zwraca funkcje która jsst stworzona na pdstawie pierwotnej funkcji i na sztywno ma przypiany kontekst 

console.log(sayHelloBound) /*ƒ () {
	console.log(this); //{name: 'Kamil', lastName: 'Lewandowski', sayHello: ƒ}
	console.log(`Hello ${this.name} ${this.lastName}`);
} */

sayHelloBound === sayHello /* false bind z funkcji robi nowa funkcje która na stałe jest związana z kontekstem przypisanym jako argument*/

Me.sayHello === sayHello // true

// funkcja nie może zmienić kontekstu
sayHelloBound() 


// jesli stworzymy nowy obiekt to kontekst i tak jest juz na stale przypisany do funkcji
const person2={
  name: 'Jan',
  lastName: 'Kowalski'

}
sayHello.call(person2) /*kontekst wywołania to: {name: 'Jan', lastName: 'Kowalski'}*/

sayHello.apply(person2) /*kontekst wywołania to: {name: 'Jan', lastName: 'Kowalski'}*/

sayHelloBound(person2) /*kontekst wywołania to: {name: 'Kamil', lastName: 'Lewandowski'}
Hello Kamil Lewandowski kontekst nie uległ zmianie*/


/*   ---------RÓŻNICE CALL I APPLY ----------*/

// call: Metoda call wywołuje funkcję z określonym kontekstem (this) oraz przekazuje argumenty jako pojedyncze argumenty funkcji. Syntax: function.call(context, arg1, arg2, ...)

// apply: Metoda apply wywołuje funkcję z określonym kontekstem (this) i przekazuje argumenty jako tablice. Syntax: function.apply(context, [arg1, arg2, ...])


//-------------Funkcje strzałkowe – arrow functions

// const sayHelloArrow = (name, lastName) => {
//   console.log(`Hello ${name} ${lastName}`);
// }

// sayHelloArrow('Jan', 'Kowalski')

// const sayHelloArrow2 = (name, lastName) => {
//   console.log(`Hello ${name} ${lastName}`);
// }

// sayHelloArrow2('Jan', 'Kowalski')

// sayHelloArrow2.call(this, 'Jan', 'Kowalski')

// sayHelloArrow2.apply(this, ['Jan', 'Kowalski'])

// sayHelloArrow2.bind(this, 'Jan', 'Kowalski')

// sayHelloArrow2.call(this, 'Jan', 'Kowalski')



// róznice z funkcjami strzałkowymi:
// funkcje strałkowe nie posiadają obiektu prototype.

function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3,{
  name: 'Jan'
}, [4,5,6], {a: 4, b: 6}); // Arguments (4) [1, 2, 3, {...}, Array(3), {...}]

const showArgsArrow = () => {
  console.log(arguments);
}

// showArgsArrow(1, 2, 3,{
//   name: 'Jan'
// }, [4,5,6], {a: 4, b: 6}); //Uncaught ReferenceError: arguments is not defined at showArgsArrow

// funkcje konstruktora:

// function Greeter (name) {
//   this.name = name;
//   console.log(`Hello ${this.name}`)

// } 

// const greeter = new Greeter('Kamil')


// const GreeterArrow = (name) =>{
//   this.name = name;
//   console.log(`Hello ${this.name}`)
// }
  
// const greeter2 = new GreeterArrow('Adam') //script.js:721 Uncaught TypeError: GreeterArrow is not a constructor 


// GreeterArrow.prototype.sayHello = function () {
//   console.log(`Hello ${this.name}`)
// } //VM22655:2 Uncaught TypeError: Cannot set properties of undefined (setting 'sayHello')

// funkcja strzakowa nie może być konstruktorem, nie ma prototype, ma rowniez inaczej zwiazane this z leksykalnego scope - miejsca gdzie została zadeklrowana 

// w deklaracji funkcji this zalezy od miejsca wywołania, zaś w funkcji strzalkowej od leksykalnego scope, czyli od miejsca gdzie została zadeklarowana funkcja strzałkowa nie tworzy własnego kontekstu this, ale korzysta z kontekstu this ze swojego otaczającego zakresu (scope) podczas definiowania. W praktyce oznacza to, że this w funkcji strzałkowej odnosi się do this z otaczającego kontekstu, niezależnie od tego, w jaki sposób została wywołana.


const sayHiArrow = () => {
  console.log('kontekst wywołania to:', this);
  console.log(`Hi ${this.name}`)
}

sayHiArrow()

// Wartość this w funkcjach wyższego rzędu (część 1)


const button = document.createElement('button')
button.innerText = 'Click'

document.body.appendChild(button)

button.addEventListener('click', () => {
	console.log("kontekst wywołania funkcji strzałkowej to:", this); //kontekst wywołania to: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
	
})

const clickHandler1 = function() {
	console.log("kontekst wywołania deklaracji funckcji function to:", this); // button click --this wskazuje na kontekst w jakim funkcja jest wywoływana -- cała ta funkcja jest zadeklarowana w globalnym scopie, dlatego że możemy przypisać ją do zmiennej i przekazać jako callback , ona ne jest wywoływana w globalnym scopie nie ma clickHandler() jedynie jest wywoływana przez addEventListenera w takim scopie w jakim jest wywoływana w addEventListener - nie wiemy w jakim scopie ja wywołuje ma implementację jako "[native code]", oznacza to, że jest ona obsługiwana przez samą przeglądarkę lub silnik JavaScriptu, a nie jest to kod, który możesz zobaczyć lub modyfikować w JavaScript. Jest to część języka JavaScript zapewniana przez środowisko uruchomieniowe. w funcjach wyzszego rzedu pochodzących od przeglądarki jedynym sposobem na spradzenie this podczas wywołania callBacku jest klikniecie w przycisk bo wtedy zostanie wykonany kod i this w ramach tego callbacku bedzie wskazywalo na referencje do tego elementu na ktorym listener jest przypiety
}
  
    button.addEventListener('click', clickHandler1)


    const button2 = document.createElement('button')

    button2.innerText = 'Click 2'
    document.body.appendChild(button2)

    const clickHandler2 = () => {
      console.log('kontekst wywołania to:', this);
    }

    function clickHandlerSecond() {
      console.log('kontekst wywołania to:', this);
    }
    button2.addEventListener('click', clickHandler2)
    button2.addEventListener('click', clickHandlerSecond)







    const makeButtons = function () {
			const button1 = document.createElement("button");
			button1.innerText = "REGULAR FUNC";

			const button1ClickHandler = function () {
				console.dir(this);
			};

			button1.addEventListener("click", button1ClickHandler);

			document.body.appendChild(button1);

			const button2 = document.createElement("button");
			button2.innerText = "REGULAR FUNC BOUND";

			const button2ClickHandler = function () {
				console.dir(this);
			};
			const button2ClickHandlerBound = button2ClickHandler.bind(this);

			button2.addEventListener("click", button2ClickHandlerBound);

			document.body.appendChild(button2);

			const button3 = document.createElement("button");
			button3.innerText = "REGULAR FUNC BOUND INLINE";

			button3.addEventListener(
				"click",
				function () {
					console.dir(this);
				}.bind(this)
			);

			document.body.appendChild(button3);

			const button4 = document.createElement("button");
			button4.innerText = "ARROW FUNC";

			button4.addEventListener("click", () => console.dir(this));

			document.body.appendChild(button4);
		};

//   this w funkcjach wyzszego rzedu

const myOwnForEach = function (array, callback, thisArg) {


  for (let i = 0; i < array.length; i++) {
     const element = names[i]
     const index = i;
     const array = names

    //  if (thisArg) {
		// 		callback = callback.bind(thisArg);
		// 		/* Sprawdza, czy został dostarczony argument thisArg. Jeśli tak, to przypisuje funkcję callback związaną z kontekstem przekazanym przez thisArg za pomocą metody bind(). Dzięki temu wewnątrz funkcji callback wartość this będzie ustawiona zgodnie z wartością thisArg */
		// 	}

    if(thisArg){
			callback.call(thisArg || this, element, index, array);
			// do wywołania funkcji callback zostanie uzyty kontekst pochodzący z thisArg funkcji myOwnForEach jako pierwszy argument

			/* w przypadku wywołania funkcji call jeśli thisArg nie istnieje jest rowne undefined 
      if(thisArg): Ten warunek sprawdza, czy został dostarczony argument thisArg. Jeśli tak, to wykonuje się reszta kodu, w przeciwnym razie pomija się resztę kodu i funkcja zwrotna (callback) jest wywoływana bez zmiany kontekstu this.

callback.call(...): Wywołuje funkcję zwrotną (callback) z użyciem metody call. Metoda call pozwala na wywołanie funkcji, pozwalając na ustawienie własnego kontekstu (this) oraz przekazanie argumentów do funkcji.

thisArg || this: W przypadku, gdy thisArg jest dostępny, używa go jako kontekstu (this) dla funkcji zwrotnej. W przeciwnym razie, jeśli thisArg nie jest dostępny, kontekst this pozostaje niezmieniony.

element, index, array: Są to argumenty przekazane do funkcji zwrotnej (callback). element oznacza bieżący element w tablicy, index oznacza indeks tego elementu, a array to cała tablica, na której operuje funkcja wyższego rzędu (np. forEach
      
      
      */
}

    //  callback(element, index, array)
  }
}

const names = ['John', 'Jane', 'Mark']
window.myName = 'Kamil from window'

console.log(this);

const greeter =  function(name, index, array) {
		// console.log(this);
     /* this w tym przypadku jest wewnatrz scope funkcji wywoływanej przez metodę forEach 
    
    funkcja forEach jesli nie przekażemy jej argumentu thisArg, wewnętrznie JavaScript użyje wartości undefined jako kontekstu this podczas wywoływania funkcji zwrotnej dla każdego elementu tablicy. Oznacza to, że this wewnątrz funkcji zwrotnej będzie odnosić się do obiektu globalnego (np. window w przypadku przeglądarki internetowej, lub global w środowisku Node.js).
    */

		console.log(`Hello ${name} , I'm ${this.myName}`);
}
//  ,[myName]  po  przecinku drugi argument czyli thisArg bedacy kontekstem 


// Test 1: Wywołanie funkcji forEach z funkcją zwrotną greeter
 /*Funkcja greeter wykorzystuje kontekst this, który jest ustalony na obiekt globalny (w przeglądarce jest to obiekt window). Zatem oczekujemy, że this.myName wewnątrz funkcji greeter będzie odwoływać się do zmiennej myName zdefiniowanej na obiekcie window.*/
names.forEach(greeter)
myOwnForEach(names, greeter)



// Test 2: Wywołanie funkcji forEach z funkcją zwrotną greeter i przekazaniem thisArg
/* Tutaj przekazujemy obiekt { myName: 'Kamil from thisArg' } jako thisArg. Oczekujemy, że this.myName wewnątrz funkcji greeter będzie odwoływać się do zmiennej myName z tego przekazanego obiektu, a nie z obiektu globalnego window*/
names.forEach(greeter, {myName: 'Kamil from thisArg'})
myOwnForEach(names, greeter, {myName: 'Kamil from thisArg'}) 


const greeterArrow = (name, index, array) => {
    console.log(`Hello ${name} , I'm ${this.myName}`);
}


// Test 3: Wywołanie funkcji forEach z funkcją zwrotną greeterArrow:

/*Funkcja greeterArrow jest zdefiniowana jako funkcja strzałkowa, co oznacza, że nie posiada własnego kontekstu this. Zamiast tego, this wewnątrz funkcji strzałkowej dziedziczy kontekst z otaczającego zakresu, czyli z tego miejsca, gdzie została zdefiniowana. W tym przypadku, jest to globalny kontekst window. */

names.forEach(greeterArrow)
myOwnForEach(names, greeterArrow)


// Test 4: Wywołanie funkcji forEach z funkcją zwrotną greeterArrow i przekazaniem thisArg
/*Podobnie jak w poprzednim teście, funkcja greeterArrow nie będzie miała własnego kontekstu this, a będzie dziedziczyć go z otaczającego zakresu. Jednakże, dzięki przekazaniu thisArg, możemy kontrolować, na co wskazuje this wewnątrz funkcji greeterArrow, ignorując domyślny kontekst globalny window i korzystając z kontekstu przekazanego przez thisArg.*/
myOwnForEach(names, greeterArrow, {myName: 'Kamil from thisArg'})
names.forEach(greeterArrow, {myName: 'Kamil from thisArg'})
/*Hello John , I'm Kamil from window
script.js:865 Hello Jane , I'm Kamil from window
script.js:865 Hello Mark , I'm Kamil from window
script.js:877 Hello John , I'm Kamil from window
script.js:877 Hello Jane , I'm Kamil from window
script.js:877 Hello Mark , I'm Kamil from window
script.js:877 Hello John , I'm Kamil from window
script.js:877 Hello Jane , I'm Kamil from window
script.js:877 Hello Mark , I'm Kamil from window 

funkcja greeterArrow jest zdefiniowana w globalnym kontekście, więc this wewnątrz tej funkcji strzałkowej odnosi się do obiektu globalnego, który w przeglądarce jest reprezentowany przez obiekt window. Dlatego, kiedy odwołujesz się do this.myName w funkcji greeterArrow, otrzymujesz wartość zmiennej myName z obiektu window,

funkcja strzalkowa bierze this ze scope leksykalnego, z którego została zaddeklaowana  a została zadeklarowana w globalnym scopie gdzie this wskazuje na window i w zwiazku z tym funkcja ma na sztywno przypisane this na window niezaleznie od sposobu w jaki zostanie wywołana 
*/

// -------------Object.prototype-------------

// const obj0 = new Object();
const obj1 = {};
const obj2 = { name: "Kamil" };
const obj3 = { name: "Kamil", lastName: "Lewandowski" };


const obj4 = {valueOf: () =>"I\m valueOf function"}

const obj5 ={toString: function(){return 'I\m toString function'}}

const obj6 = {
  "name": "Kamil",
  "lastName": "Lewandowski",
  toString: function(){
    // for(let key in this){
    //   console.log(this)
    //   console.log(key, this[key]);

    //   if(this.hasOwnProperty(key)){
    //     console.log('this hasOwnProperty', key, this[key]);
    //   }
    // }
    let string = ''
    for(const property in this){
      console.log(property, this[property]);
      const value = this[property];
      if(typeof value === 'function') continue;
        string = `${string}${value}`
      

      // if(this.hasOwnProperty(property)){
      //   console.log('this hasOwnProperty', property, this[property]);
      // }
      return string;
    }
  }
}


// console.log(Object.prototype === obj0.__proto__); // true 

console.log(Object.prototype.constructor === Object);
// console.log(obj0.__proto__.constructor === Object); // każdy obiekt, każda instancja ma zapisana w sobie referencję/odwołanie do funkcji konstruktora któa została użyta do stworzzenia tego obiektu.

// value of zwraca wartość z obiektu

console.log(obj3.valueOf()) //{name: 'Kamil', lastName: 'Lewandowski'} w obiekcie 3 nie znajduje właściwości valueOf więc zaczyna szukać w prototypie, a w obj4 możemy wywołać funkcję, ponieważ obiekt ten zawiera w sobie właściwość valueOf wiec funkcja ostanie wywołana. Interpreter znajduje na poziomie włsciwosci obektu i nie musi szukać w prototypie

// console.log(`hello ${obj0}`)
console.log(`hello ${obj6}`)

// object.hasOwnProperty funkcja sprawdza czy dany obiekt ma właściwość, która jest jego własną właściwością

console.log(obj6.hasOwnProperty('toString'))
console.log(obj3.hasOwnProperty('toString'))


// ------------OBJECT.CREATE------------

const base = {
  toString: function(){
    let string = ''

    /* The above code is iterating over the properties of the `this` object and concatenating the
    values of non-function properties into a single string. The code skips any properties that are
    functions using the `continue` keyword. */
    for(const property in this){
      const value = this[property]

      if(typeof value ==="function") continue
      string =`${string} ${value}` 
    }
    return string
   // petla iteruje po wszystkich wlasciwosciach obiektu i do stringu dodajemy wartościi ze stringu.  
  }
}
const obj7 = {name: 'Jane'}
console.log(obj7)
console.log(`hello ${obj7}`);// hello ['object Object']

/* The above code is attempting to concatenate the string 'hello' with the object `obj7`. However,
since `obj7` is an object, when it is implicitly converted to a string, it will be represented as
`'[object Object]'`. So, the output of the code will be `'hello [object Object]'`. */

console.log('hello' + obj7)  // hello ['object Object'] ({}).toString() ====>>>'[object Object]'

// obiekt jako perwszy argument przyjuje obiekt ktory ma stac sie prototypem 
const obj0 = {names: 'Kamil'}
const obj8 = Object.create(base)
obj8.name = 'Kamil'
console.log(`hello ${obj8}`, obj8);
//  czy prototyp obiektu obj0 wskazuje na prototyp wbudowany Object.prototype. Otrzymujesz true, co jest spodziewanym zachowaniem, ponieważ obiekt obj0 jest stworzony za pomocą zapisu obiektowego i domyślnie dziedziczy z Object.prototype.
console.log(obj0.__proto__ === Object.prototype); 
console.log(obj8.__proto__ === Object.prototype);
console.log(obj8.toString()) // Kamil

const obj9 = Object.create(obj8) //obj8.isPrototypeOf(obj9) true

const normalObject = Object.create({}) // object.create tworzy nowy obiekt na podstawie prototypu który zostal mu przekazany - pusty literał obiektu - a w literale stworzył się nowy obiekt z nowym prototypem pusty obiekt będzie przepuszczał wszelkie zapytania o właścwości i jeslii JS zacznie szukac w prototypie pustego obiektu nic nie znajdzie i zcnie szukac w swoim prototypie
const nullObject = Object.create(null) // przekazujesz null jako prototyp dla nowego obiektu. Używając null jako prototypu, nowy obiekt nie będzie dziedziczył żadnych właściwości ani metod od żadnego innego obiektu, nawet od wbudowanego prototypu Object.prototype. To oznacza, że nie będzie miał prototypu, a przez to nie będzie dziedziczył żadnych właściwości lub metod.
nullObject.lastName ="Lewandowski"
console.log(nullObject)

// console.log(`HEllo${normalObject}`)
// console.log(`HEllo${nullObject}`) // js potrzebuje wlasciwosci toString() ktora jest wbudowana we wszystkie obiekty majace prototyp Object.prototype zeby mozna wykonywac operacje na obiektach


// const myArray = [1, 2, 3];

// const newArray = myArray.map(function(element) {
//   console.log('kontekstem jest:',this); // 'this' odnosi się do tablicy 'myArray'
//   return element * 2;
// }, myArray); // Podajemy 'myArray' jako kontekst dla 'this'

// console.log(newArray); // Output: [2, 4, 6]


// const myArray = [1, 2, 3];
// const newArray = myArray.map(element => {
//   console.log('kontekstem jest', this); // 'this' zachowuje kontekst z miejsca definicji funkcji strzałkowej, jest nim window
//   return element * 2;
// });

// console.log(newArray); // Output: [2, 4, 6]


const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((item) => {
  console.log('kontekstem jest:', this); // Tutaj 'this' będzie odnosić się do kontekstu otaczającej funkcji lub zasięgu, może to być obiekt globalny lub inny kontekst, w zależności od miejsca, w którym funkcja strzałkowa została zdefiniowana w ym przypadku jest to window
	return item % 2 === 0;
});

console.log(evenNumbers);



// ----------------Object prototype----------------

// Object.prototype przykłady:
// metody zawarte we właściwości prototype funkcji konstruktora bedą dostępne we wszystkich instancjach obiektu jak wygląda łańcuuch prototypów:

/*Łańcuch prototypów w języku JavaScript to mechanizm, który umożliwia dziedziczenie właściwości i metod między obiektami. Każdy obiekt w JavaScript ma powiązany prototyp, który może być innym obiektem lub null. Gdy odwołujemy się do danej właściwości lub metody obiektu i nie znajdujemy jej w samym obiekcie, JavaScript automatycznie przeszukuje łańcuch prototypów, aby znaleźć tę właściwość lub metodę.

Wizualnie łańcuch prototypów w JavaScript może wyglądać następująco:

lua

           +----------------------+
           | Object.prototype     |
           +----------------------+
                     ^
                     |
           +----------------------+
           |   Prototype of obj1  |
           +----------------------+
                     ^
                     |
           +----------------------+
           |   Prototype of obj2  |
           +----------------------+
                     ^
                     |
           +----------------------+
           |   Prototype of obj3  |
           +----------------------+

*/ 
// Tworzymy obiekt bazowy (prototyp)
const baseObject = {
  baseProp: 'I am a property in the base object',
  baseMethod() {
    return 'I am a method in the base object';
  }
};

// Tworzymy obiekt, który dziedziczy właściwości i metody z obiektu bazowego
const derivedObject1 = Object.create(baseObject);
derivedObject1.derivedProp1 = 'I am a property in the first derived object';

// Tworzymy kolejny obiekt, który dziedziczy właściwości i metody zarówno z obiektu bazowego, jak i pierwszego pochodnego obiektu
const derivedObject2 = Object.create(derivedObject1);
derivedObject2.derivedProp2 = 'I am a property in the second derived object';

// Sprawdzamy, które właściwości/metody są dostępne bezpośrednio w obiekcie, a które są dziedziczone przez prototypy

console.log(derivedObject2.derivedProp2); // 'I am a property in the second derived object'
console.log(derivedObject2.derivedProp1); // 'I am a property in the first derived object'
console.log(derivedObject2.baseProp); // 'I am a property in the base object'

console.log(derivedObject2.baseMethod()); // 'I am a method in the base object'

/**
W tym przykładzie:

baseObject jest obiektem bazowym, który zawiera pewną właściwość baseProp i metodę baseMethod.
derivedObject1 jest obiektem pochodnym, który został stworzony z baseObject za pomocą metody Object.create(). Ma również swoją własną właściwość derivedProp1.
derivedObject2 jest kolejnym pochodnym obiektem, który został stworzony z derivedObject1 za pomocą metody Object.create(). Ma swoją własną właściwość derivedProp2.
Kiedy odwołujemy się do właściwości i metod derivedObject2, JavaScript najpierw szuka ich w derivedObject2. Jeśli nie znajdzie ich tam, sprawdza derivedObject1, a następnie baseObject i dalej wzdłuż łańcucha prototypów.
To jest bardziej szczegółowy przykład łańcucha prototypów w języku JavaScript, który pokazuje, jak dziedziczenie działa między obiektami. Każdy obiekt dziedziczy właściwości i metody z obiektów, które są jego prototypami, aż do osiągnięcia prototypu Object.prototype, który jest ostatnim ogniwem w łańcuchu. 

------------------------------------------------
Na początku mamy prototyp Object.prototype, który zawiera podstawowe metody i właściwości dostępne dla wszystkich obiektów w JavaScript. Na przykład, metody takie jak toString(), valueOf(), hasOwnProperty(), itp.

Tworząc nowy obiekt, ten obiekt ma prototyp, który jest powiązany z Object.prototype, co oznacza, że dziedziczy on wszystkie właściwości i metody z prototypu Object.prototype.

Jeśli tworzysz nowy obiekt za pomocą konstruktora lub za pomocą składni obiektu {}, prototyp tego obiektu może być zmieniony na inny obiekt. W tym przypadku prototyp obiektu staje się prototypem określonym przez konstruktor lub za pomocą metody Object.create().

Kiedy odwołujemy się do danej właściwości lub metody obiektu, a JavaScript nie może jej znaleźć w samym obiekcie, przeszukuje on łańcuch prototypów, zaczynając od prototypu danego obiektu i idąc w górę do momentu, gdy znajdzie odpowiednią właściwość lub metodę.

Oto przykładowy bardziej szczegółowy sposób przedstawienia łańcucha prototypów w JavaScript:

            +------------------------+
            |      Object.prototype  | <-- Podstawowy prototyp
            +------------------------+
                     ^
                     |
            +-----------------------+
            |         Obiekt A      | 
            |  (Prototyp: Object.prototype) |
            +-----------------------+
                     ^
                     |
            +-----------------------+
            |         Obiekt B      | 
            | (Prototyp: Obiekt A) | 
            +-----------------------+
                     ^
                     |
            +-----------------------+
            |         Obiekt C      | 
            | (Prototyp: Object.prototype) | 
            +-----------------------+
W tym przykładzie:

Obiekt A dziedziczy metody i właściwości z Object.prototype.
Obiekt B dziedziczy metody i właściwości z Obiektu A, a także z Object.prototype.
Obiekt C dziedziczy tylko metody i właściwości z Object.prototype, ponieważ jego prototyp jest ustawiony na Object.prototype
*/