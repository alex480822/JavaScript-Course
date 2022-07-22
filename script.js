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

// // Pętla for
for (let i = 0; i < 6; i++) {
	console.log(i);
}

// // for
const animalS = [`pies`, `kot`, `ryba`, `kurak`, `papuga`];
for (let u = 0; u < animalS.length; u++) {
	console.log(animalS[u]);
}

// // // Zadanie for
const colorsTable = [`red`, `orange`, `black`];

for (let j = 0; j < colorsTable.length; j++) {
	console.log(colorsTable[j]);
}
