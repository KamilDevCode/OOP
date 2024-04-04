const DecreasingCounter = function (selector) {
	Counter.call(this, selector);
	/**  jesli tworzymy funkcje konstruktora i wywołujemy ją ze słowem kluczowym new to ta funkcja konstruktora zostanie wywołana w kontekscie nowego obiektu wiec this bedzie nowym obiektem a nim chcemy miec wszystko co mamy w counterze wiec za pomoca funkcji call chcemy wywołac funkcje Counter i przekarzemy selektor
	

	**/
};

// ---DecreasingCounter.prototype = Counter.prototype;

// oba prototypy DecreasingCounter i Counter są ustawione na ten sam obiekt prototypowy.Kiedy zmieniasz liczbę w instancji DecreasingCounter, która jest oparta na prototypie DecreasingCounter, faktycznie zmieniasz tę samą liczbę w prototypie Counter, ponieważ oba obiekty prototypowe wskazują na ten sam obiekt.Aby naprawić ten problem, zamiast ustawiać DecreasingCounter.prototype na Counter.prototype, powinieneś stworzyć nowy obiekt, który dziedziczy z Counter.prototype poprzez Object.create()

DecreasingCounter.prototype.inc = function () {
	this.number = this.number - 1;
	this.render();
};

DecreasingCounter.prototype = Object.create(Counter.prototype);
//Object.create Tworzy nowy obiekt prototypowy dla DecreasingCounter, który dziedziczy właściwości i metody z Counter.prototype. Ten nowy obiekt prototypowy jest teraz niezależny od Counter.prototype, co oznacza, że zmiany dokonane w DecreasingCounter.prototype nie wpłyną na Counter.prototype, ani odwrotnie.

DecreasingCounter.prototype.constructor = DecreasingCounter;
/**Ustawia właściwość constructor dla prototypu DecreasingCounter na funkcję konstruktora DecreasingCounter. Jest to ważne, ponieważ domyślnie, po ustawieniu DecreasingCounter.prototype na obiekt stworzony przez Object.create(Counter.prototype), właściwość constructor wskazywałaby na funkcję konstruktora Counter.. 
 * 
 *  JavaScript, właściwość constructor jest właściwością, która odnosi się do funkcji konstruktora, która została użyta do utworzenia obiektu. Domyślnie, gdy tworzysz nową funkcję konstruktora, jej właściwość constructor jest ustawiana na samą siebie. Jednak w przypadku dziedziczenia, gdy modyfikujesz prototyp, możesz musieć ręcznie ustawić właściwość constructor, aby wskazywała na prawidłową funkcję konstruktora.

W tym przypadku, kiedy modyfikujemy prototyp DecreasingCounter, należy ręcznie ustawić jego właściwość constructor na funkcję konstruktora DecreasingCounter. W ten sposób JavaScript będzie wiedział, która funkcja konstruktora jest używana do tworzenia nowych instancji DecreasingCounter.
*/

/**
	w counter2 za pomocą Counter.call(this, selector) wszystkie właściwościz Counter1 - cała ta funkcja została wywołana w kontekscie counter2: selector, container, number pod this przypisało się do nowego DecreasingCounter -counter2 bo wywołaliśmy cCounter za pomocą call w kontekście nowego obiektu przekazując dokładnie te same argumenty nastęnie za pomocą object.create stworzyliśmy nowy pusty obiekt, który w swoim prototypie miał counter.prototype - w DecreasingCounter.prototype staje sie prototypem kazdego obiektu ktory powstanie za pomoca DecreasingCounter, DecreasingCounter tworzy nam counter2 ktora jest intsncja DecreasingCounter i w swoim prototypie ma decreasingCounter.prototype - w DecreasingCounter  */

DecreasingCounter.prototype.dec = function () {
	// this.number = this.number - 1;
	this.number--;
	this.render();
};

/** nasz DecreasingCounter nie ma przycisku i musi skorzystać z funkcji render() w Counter.prototype , więc musi wywoływać funkcję render, ale musi mieć też swoją funkcję render która doda do niego przycisk. wiec w DecreasingCounter.prototype musimy zdefiniować funkcję render. Problem jest gdy definiuje funkcje render() w jego prototype nie ma funkcji render dopiero w prototypie counter jest funkcja render   */
DecreasingCounter.prototype.render = function () {
	/**
	  wywołania metody render z prototypu klasy Counter, ale z kontekstem bieżącej instancji DecreasingCounter

	  Counter.prototype.render odnosi się do oryginalnej metody render zdefiniowanej w prototypie klasy Counter.

	call(this) służy do wywołania tej metody, ale w kontekście określonym przez argument this. W tym przypadku this odnosi się do bieżącej instancji DecreasingCounter.

	Dzięki temu wywołaniu, kod w metodzie render klasy Counter jest wykonany, ale jest to wykonywane na obiekcie DecreasingCounter. Oznacza to, że jeśli w metodzie render klasy Counter znajduje się odwołanie do this, będzie to odnosić się do instancji DecreasingCounter, a nie Counter
	  
	  **/



	Counter.prototype.render.call(this);

	// const button = document.createElement("button");

	// button.innerText = "-";

	const button = new Button('-', () => this.dec());


	/**
	 * this.dec() jest wywołaniem metody dec() na bieżącej instancji obiektu.

	this odnosi się do bieżącej instancji obiektu, na której jest wykonywana metoda.
		
	dec() jest metodą zdefiniowaną dla obiektu, na którym jest wywoływana. W tym przypadku, this.dec() oznacza wywołanie metody dec() na bieżącej instancji obiektu.

	W kontekście kodu, który został udostępniony wcześniej, this.dec() zostanie wywołane po kliknięciu przycisku -. Metoda dec() jest odpowiedzialna za zmniejszenie liczby (przechowywanej przez obiekt DecreasingCounter) o 1 i ponowne wyrenderowanie interfejsu użytkownika zaktualizowaną wartością.
	 */


	// button.addEventListener("click", () => this.dec());

	// this.container odnosi się do kontenera, który został zdefiniowany podczas inicjalizacji obiektu Counter lub DecreasingCounter. Jest to element DOM, który został znaleziony przy użyciu selektora przekazanego jako argument do konstruktora.



	this.container.appendChild(button.render());
};
