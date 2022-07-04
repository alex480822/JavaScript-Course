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
 
const text1 = 'powiększ mnie!'
console.log(text1.toUpperCase());
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
console.log(text2.toLowerCase());
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
console.log(text3.slice(5));
const text4 = 'sprawdź, czy zawieram słowo "czy"'
console.log(text4.includes('czy'));
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
console.log(text5.charAt(2));
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
console.log(text6.replaceAll('pies', 'kot'))
const text7 = 'podziel, ten, string, od, przecinków'
console.log(text7.split(' '))