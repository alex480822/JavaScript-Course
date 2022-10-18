const name = "lisa";
console.log("name");
let age = 23;
let late = 20;
console.log(late);
const life = 28;

const Myname = "Adrian";
const fovMeal = "schabowy";
console.log("Mam na imię " + Myname + " moim ulubionym daniem jest " + fovMeal);

const lastName = "Moje Nazwisko";
const letters = 10;
console.log(lastName);
console.log(lastName + "zawiera " + letters + " liter");
// MUSI BYĆ W GRAWISACH
console.log(`Cześć, jestem   ${Myname} `);

// Zadanie
// const firstName = 'Tomek'
// age = 12;
// age = 18;

// const favColor = "niebieski";
// const favMeal = "schabowy";

// let currentCar;
// currentCar = "Audi";

// let firstNameSecond = "Ania";
// let ageSecond = 24;
// let ulubionyKolor = "czerwony";

//Zadanie

const msg = "to jest testowa wiadomość";

const newMsg = msg.toUpperCase();
console.log(newMsg.toLowerCase());

const date = new Date();
console.log(date.toLocaleDateString("en"));

const userName = "Adrian";
const newUsername = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(newUsername);

//Zadanie
/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂 
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/

const text1 = "powiększ mnie!";
console.log(text1.toUpperCase());
const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
console.log(text2.toLowerCase());
const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
console.log(text3.slice(6));
const text4 = 'sprawdź, czy zawieram słowo "czy"';
console.log(text4.includes("czy"));
const text5 =
	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
console.log(text5.charAt(2));
const text6 = "pies zamień każde słowo pies, na słowo kot pies";
console.log(text6.replaceAll("pies", "kot"));
const text7 = "podziel, ten, string, od, przecinków";
console.log(text7.split(","));

// Typ Number
const num1 = 23;
const num2 = "45";
console.log(num1 + num2);
const num3 = 123.23123;
console.log(num3.toFixed(2));
const num4 = "5678";
console.log(parseInt(num4));

// null & undefined

let a = null;
console.log(a);

// Typy złożone
const table1 = [123, "abc", true, ["abcde"]];
const colors = ["red", "green", "blue"];
console.log(colors);

//funkacja:
function test() {
	console.log("cześć jestem w funkcji");
}
test();

//obiek, w środku tworzymy pary klucz wartość:
const person = {
	name2: "Klaudia",
	age2: 23,
	favColor: null,
};
console.log(person);

let x = 4;
x++;
x++;
x++;
console.log(`Inkrementacja: ${x}`);
x--;
x--;
console.log(`Inkrementacja: ${x}`);

//modulo
const modulo = 10 % 7;
console.log(`Reszta z dzielenia 10/7 wynosi: ${modulo}`);

let y = 10;
x += y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);
x &= y;
console.log(x);

// operatory porównania
console.log(10 == "10");
console.log(10 === "10");
console.log("10" === "10");
console.log("---");
console.log(`Negacja odwaraca działąnie: ${10 != "10"}`);
console.log(`Negacja odwaraca działąnie: ${10 !== "10"}`);
console.log(`Negacja odwaraca działąnie: ${"10" !== "10"}`);

// i
if (true && false) {
	console.log("Like");
} else {
	console.log("dislike");
}
//lub
if (true || false) {
	console.log("Like");
} else {
	console.log("dislike");
}
// ! zaprzeczenie
if (!true) {
	console.log("Like");
} else {
	console.log("dislike");
}

//instrukcja warunkowa if
console.log("---");
const color = "blue";
if (color == "blue") {
	if (10 > 0) {
		console.log("true true");
	} else {
		console.log(`Drugi "if" nie spełniony`);
	}
} else {
	console.log("false");
}

//Zagnieżdżona instrukcaj if
console.log("---");
const pass = "qwqweeq22wwe!";
if (pass.length > 10 && pass.includes("!")) {
	console.log("masz bardzo dobre hasło");
} else if (pass.length > 10) {
	console.log("masz dobre hasło");
} else {
	console.log("zmień swoje hasło na lepsze");
}

// SWITCH

console.log("---");
const day = "piątek";

switch (day) {
	case "poniedziałek":
		console.log("Dziś jest poniedziałek");
		break;
	case "wtorek":
		console.log("Dziś jest wtorek");
		break;
	case "środa":
		console.log("Dziś jest środa");
		break;
	case "czwartek":
		console.log("Dziś jest czwartek");
		break;
	case "piątek":
		console.log("Dziś jest piątek");
		break;
	default:
		console.log("weekend");
}

// To samo tylko z if

if (day === "poniedziałek") {
	console.log("Dziś jest poniedziałek");
} else if (day == "wtorek") {
	console.log("Dziś jest wtorek");
} else if (day == "środa") {
	console.log("Dziś jest środa");
} else if (day == "czwartek") {
	console.log("Dziś jest czwartek");
} else if (day == "piątek") {
	console.log("Dziś jest piątek");
} else {
	console.log("weekend! ;)");
}

// instrukcja warunkowa
const z = 10;
const newX = z > 20 ? `${z} > 20` : `${z} < 20`;
console.log(newX);

const q = 50;
const w = 30;

if (q > w) {
	console.log(`${q} > ${w}`);
}

// Zadanie
const color1 = "blue";
const newColor1 = "green";
if (color1 == newColor1) {
	console.log(`Kolory się zgadzają`);
} else {
	console.log(`Kolory się nie zgadzają`);
}

// Zadanie
const s = 100;
const d = 50;
if (s > d) {
	console.log(`${s} > ${d}`);
} else if (s == d) {
	console.log(`Liczby są równe`);
} else if (s < d) {
	console.log(`${s} < ${d}`);
}

//Zadanie
const promo = "60%";

switch (promo) {
	case "20%":
		console.log(`Dziś mamy 20% zniżki`);
		break;
	case "30%":
		console.log(`Dziś mamy 30% zniżki`);
		break;
	case "40%":
		console.log(`Dziś mamy 40% zniżki`);
		break;
	default:
		console.log(`Dziś mamy ${promo} zniżki`);
}

//Zadane
const r = 10 % 2;
if (r == 0) {
	console.log(`Liczba jest parzysta`);
} else {
	console.log(`Liczba jest nieparzysta`);
}

//Zadanie to samo tylko operatorem warunkowym
const t = 11;
const checkT = t % 2 == 0 ? `t jest parzyste` : `t nie jest parzyste`;
console.log(checkT);

//Bardziej zaawansowane zadanie z if

const f = 50;
let textF;

if (f >= 100) {
	textF = `x > 100`;
} else if (f <= 100 && f > 30) {
	textF = `X jest średniakiem`;
} else if (f <= 30) {
	textF = `x jest mały`;
}

console.log(textF.toUpperCase());

// Pętla for
for (let i = 0; i < 6; i++) {
	console.log(i);
}

// for
const animalS = [`pies`, `kot`, `ryba`, `kurak`, `papuga`];
for (let u = 0; u < animalS.length; u++) {
	console.log(animalS[u]);
}

// Zadanie for
const colorsTable = [`red`, `orange`, `black`];

for (let j = 0; j < colorsTable.length; j++) {
	console.log(colorsTable[j]);
}

// Pętla while
let p = 0;
while (p < 4) {
	console.log(p);
	p++;
	//musi być inkrementacja bo w przeciwnym wypadku pętla będzie wykonywać się bez końca
}

console.log(`do while`);
//Pętla DO while - odwrotna do while
let o = 0;
do {
	o++;
	console.log(o);
} while (o < 2);

console.log(`For of`);
const numberOfs = [1, 2, 3, 4, 5];
for (const numberOf of numberOfs) {
	console.log(numberOf * 3);
}
//
console.log(`To samo tylko zapisane zwykłym forem`);
for (let l = 0; l < numberOfs.length; l++) {
	console.log(numberOfs[l] * 2);
}

console.log(
	`Odwołanie do konkretnego elementu w tablicy.Czyli 3 element razy 2 = 6`
);
for (let l = 0; l < numberOfs.length; l++) {
	console.log(numberOfs[2] * 2);
}

//Zadanie pętla for
const cities = [`Chicago`, `Warsaw`, `Poznan`, `Berlin`];

for (u = 0; u < cities.length; u++) {
	console.log(`To miasto nazywa się: ${cities[u].toLocaleUpperCase()}`);
}

// Zadanie while
let k = 0;
while (k < 10) {
	k += 2;
	console.log(k);
}
console.log(`Zadanie do while`);
// Zadanie DO While
let rr = 20;
console.log(`Wartość przed pętą DO WHILE rr = ${rr}`);
do {
	rr -= 3;
} while (rr > 0);
console.log(`Wartość po wykonaniu pętli  DO WHILE rr = ${rr}`);

//Zadanie For of z tablicą
console.log(`Zadanie for of- podzielone przez 5 `);
const tableForOf = [5, 8, 10, 23, 48, 60];
for (const numbersTable of tableForOf) {
	numbersTable / 5;
	console.log(numbersTable);
}

console.log(`Sprawdzenie które liczby są parzyste a które nie`);
const tab = [5, 8, 10, 23, 48, 60];
for (const tabNumb of tab) {
	if (tabNumb % 2 === 0) {
		console.log(
			`%cLiczba ${tabNumb} jest parzysta`,
			`background-color: gold; color: black;`
		);
	} else {
		console.log(
			`%cliczba ${tabNumb} jest nieparzysta `,
			`background-color: lightgreen;color:black;`
		);
	}
}

//METODY W TABLICACH
console.log(`Metody w tablicach`);
const numbersArray = [1, 2, 3, 4, 5];
//Unshift dodaje elementy na początku tablicy- przesuwa indexy
numbersArray.unshift(-1, 0);
console.log(numbersArray);

//shift- usuwa pierwszy element z indexem 0
numbersArray.shift();
console.log(numbersArray);

//push dodaje elementy na końcu tablicy
numbersArray.push(`gold`, 123);
console.log(numbersArray);

//pop usuwa ostatni element tablicy
numbersArray.pop();
numbersArray.pop();
console.log(numbersArray);

//Methods task
const taskArray = [123, 321, `abcd`, `efgh`];
console.log(taskArray);
taskArray.unshift(0);
console.log(taskArray);
taskArray.pop();
console.log(taskArray);
taskArray.push(`ghi`, `jk`);
console.log(taskArray);
taskArray.shift();
console.log(taskArray);

console.log(`metoda map`);
function multiply(xx) {
	return xx * 2;
}

//Metoda map- podobny do pętli, wykonuje jakiś kod na każdym elemencie tablicy. W nawiasach podajemy nazwę funkcji, której kod ma się wykonać na elementach tablicy
//ZAWRACA NAM NOWĄ TABLICĘ
const newNumbers = numbersArray.map(multiply);
console.log(numbersArray);
console.log(newNumbers);

//concat- łączy dwie tablice ze sobą. Nie jest medotą destrukcyjną nie wpływa negatwywnie na oryginalną tablicę.
const kfc = [`k`, `f`, `c`];
const newKfc = numbersArray.concat(kfc, 23, `test`);
console.log(newKfc);

//spred operator- rozsmarowywuje tablice tak, że mamy dostęp do każdej właściwości. Dodatkowo może łączyć tablice np.
console.log(`Spred operator`);
console.log(kfc);

const drinks = [`pepsi`, `sok`, `kawa`];
const meals = [`schabowy`, `spaghetti`, `zupa`];
//Łączenie tablic spred'em
const menu = [...drinks, ...meals];
console.log(menu);

//Methods task
const numbersTask = [0, 0, 1, 1, 2, 2, 2];
const colorsTask = ["red", "green", "blue", true, 123];
const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];
//slice- wycina kawałek tablicy- metoda niedestrukcyjna
console.log(`slice`);
const numbersTask2 = numbersTask.slice(0, 2);
console.log(numbersTask2);

console.log(`slice 2`);
const numbersTask3 = numbersTask.slice(-3);
console.log(numbersTask3);
//Splice- wycina kawałek tablicy- metoda destrukcyjna, zmienia zawrtość oryginalnej tablicy
console.log(`splice randomstuff`);
const randomStuff = colorsTask.splice(-2);
console.log(randomStuff);
console.log(colorsTask);

console.log(`Task cars`);
const newCars = cars.splice(2, 4);
console.log(newCars);
console.log(`cars`);
console.log(cars);

//Task that filters table for even numbers
//Filter- filtruje tablicę w poszukiwaniu żądanych wartości podanych w warunku w nawiasach. Dodatkowo można filtrować tablicę np. funkcją jak poniżej:
const numbers2 = [0, 23, 48, 175, 2, 34, 11];
function numbers(x) {
	return x % 2 === 0;
}
console.log(numbers2.filter(numbers));
//forEach bierze tablice na którą nakłądamy metodę a następnie na każdym elemencie tablicy wykonywany jest kod.
console.log(`funkcja foreach`);
numbers2.forEach((num) => console.log(num * 5));

//includes sprawdza czy tablica zwiera konkretne elementy
console.log(`metoda icloudes`);
console.log(numbers2.includes(0));

//indexof sprawdza index jakiegoś elementu w tablicy. Jeżeli zwróci wartość -1 to znaczy, że tablica nie przechowuje takiego elementu
console.log(`indexOf`);
console.log(numbers2.indexOf(34));

//Zadanie
const letterS = [`c`, `d`];

letterS.unshift(`a`, `b`);
letterS.push(`e`, `f`);
console.log(letterS);

console.log(letterS.includes(`c`));

//Zadanie
const numbersT = [1, 2, 3];
const foodT = [`Hot Dog`, `Humburger`, `pizza`];

const foodNumbersT = numbersT.concat(foodT);
const foodNumbersTspread = [...numbersT, ...foodT];
console.log(foodNumbersT);
console.log(foodNumbersTspread);

// Task 2
const Arnumbers = [1, 2, 15, 26, 48];

//Metoda map
function MapNumber(xx) {
	return xx * 5;
}
const NewMapNumber = Arnumbers.map(MapNumber);
console.log(NewMapNumber);

//Opcja 1- właściwa
// for(const number of NewMapNumber){
// 	if(number % 2 === 0){
// 		console.log(`Liczba przysta: ${number}`);
// 	}else{
// 		console.log(`Liczba nieprzysta: ${number}`);
// 	}
// }

//Druga opcja z pętką for
for (let i = 0; i < NewMapNumber.length; i++) {
	if (NewMapNumber[i] % 2 === 0) {
		console.log(`Liczba przysta: ${NewMapNumber[i]}`);
	} else {
		console.log(`Liczba nieparzysta: ${NewMapNumber[i]}`);
	}
}

console.log(`test`);
// for (const item of Arnumbers) {
// 	if (item % 2 === 0) {
// 		console.log(`liczba jest parzysta: ${item}`);
// 	}else{
// 		console.log(`Liczba jest nieparzysta: ${item}`);
// 	}
// }

for (let i = 0; i < Arnumbers.length; i++) {
	if (Arnumbers[i] % 2 === 0) {
		console.log(`Liczna parzysta : ${Arnumbers[i]}`);
	} else {
		console.log(`Liczba jest nieparzysta : ${Arnumbers[i]}`);
	}
}

const ArColors = [`niebieski`];
ArColors.unshift(`zielony`);
ArColors.push(`pomarańczowy`);
console.log(ArColors);

for (let i = 0; i < ArColors.length; i++) {
	console.log(
		`Mój ulubiony kolor to: ${
			ArColors[i].charAt(0).toUpperCase() + ArColors[i].slice(1)
		}`
	);
}

//Powyższa pętla przerobiona na for of

//Zadanie- za pomocą metody na stringu zrób z niego tablicę i przypisz do nowej zmennej.
let carsTask = `Audi,Mercedes,BMW,Nissan,Dodge`;
console.log(carsTask);
const carsTaskNew = carsTask.split(`,`);
console.log(carsTaskNew);

// if(carsTaskNew.length > 3){
// 	console.log(`Jest OK.`);
// }else{
// 	console.log(`Nie jest OK`);
// }
// Wersja skrócona
carsTaskNew.length > 3
	? console.log(`Jest OK- wersja skrócona`)
	: console.log(`Nie jest OK- wersja skrócona`);

console.log(`Podpunkt 4`);
if (carsTaskNew.includes(`Audi`)) {
	carsTaskNew.push(`Lamborghini`);
} else {
	carsTaskNew.pop();
}
console.log(carsTaskNew);

//FUNKCJE
function test(params) {
	console.log(`Cześć jestem funkcją`);
}
test();

//wyrażenie funkcyjne bez hojstingu
const helloWord = function () {
	console.log(`Cześć 123 bez hojstingu`);
};
helloWord();

//Funkcja z argumentami
function add(parametr) {
	console.log(`Podany argument to: ` + parametr);
}
add(`fajny tekst`);

function add2(x, y) {
	console.log(x, y);
	console.log(`Dodawaneie liczb:`, x, `,`, y, `wynosi:`, x + y);
}
add2(2, 3);
function add3(x, y) {
	if (x < y) return;
	console.log(x + y);
}
add3(10, 5);

function task1(name, number) {
	console.log(`Cześć mam na imię ${name} i mam ${number} lat`);
}
task1(`Adrian`, 6);

//Funkcja anonimowa. bardzo problematyczna bo nie można się do niej odwołać w dalszej części kodu.
const heading = document.querySelector(`h1`);
heading.addEventListener(`click`, function () {
	console.log(`Kliknięto mnie:`);
});

//Funkcja strzałkowa
const arrowFunction = () => {
	//Tak wygląda funkcja strzałkowa
};

const arrowFunction2 = (name, age) => {
	console.log(`Moje imię to: ${name}`);
};
arrowFunction2(`Kasia`);

const addArrow = (num1,num2) => num1 * num2
