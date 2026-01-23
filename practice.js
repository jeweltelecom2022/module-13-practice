// Practice Task- 01
var iHave = 1000;
var orangePrice = 300;
var applePrice = 400;
var totalOrangePrice = orangePrice * 1;
var totalApplePrice = applePrice * 1;

var totalCost = totalOrangePrice + totalApplePrice;
var returnTaka = iHave-totalCost;
console.log(returnTaka);

// Practice Task- 02

var mathmaticsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathmaticsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
var averageMarks = totalMarks / 5;

console.log(averageMarks.toFixed(2));

// Practice Task- 03

var smapleNumber = 119;
var modulusNumber = 119 % 5;
console.log(modulusNumber);

// Practice Task- 04

const a = isNaN("11");
console.log(a);


const b = isNaN(2-10);
console.log(b);

// ekhane const mane hocche eta 1 bar e decleare kora jabe, jodi same name er arekta const decleare kori tahole output error ashbe
// kintu jodi porer const tar name change kore dei tahole result false dekhay. tar mane hocche isNaN
// use korle braket e number thakuk kingba subtraction ,devidation,multiplicaion thakuk false dehabe 
// sheta "" dileo number count korbe na number likhar moto korleo false e dekhabe.