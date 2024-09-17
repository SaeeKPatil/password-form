
/*function myalert() {
    
    alert("JavaScript\nis\na\nclient-side\nprogramming\nlanguage.");
}

confirm('message');
var X = confirm("Click OK or Cancel");
alert("User selected option is: " + X);

var myVal=prompt("Enter any number:");
alert("User entered value is:" +myVal);
if(myVal<=100){
    alert(
        "User entered value is small or equal."
    );
}
var na="nit";
console.log(na);
var x1=34;
console.log(x1);
if(x>100){
    alert("Number is big");
}*/
function getDayMessage(day) {
    switch(day.toLowerCase()) {
        case 'monday':
            return "Start of the work week!";
        case 'tuesday':
            return "Second day of the work week.";
        case 'wednesday':
            return "Midweek already!";
        case 'thursday':
            return "Almost the weekend!";
        case 'friday':
            return "Last workday of the week!";
        case 'saturday':
            return "Weekend time!";
        case 'sunday':
            return "Relax, it's Sunday!";
        default:
            return "Invalid day!";
    }
}


var day = prompt("Enter a day of the week:");
alert(getDayMessage(day));

for (var i = 1; i <= 10; i++) {
    document.write("The value is: " + i);
    document.write("<br>");
}
for(i=1;i<=6;i++){
    document.write("<h"+i+">This is heading" +i);
    document.write("/h"+i+">");
}

// Variable declaration and array manipulation
var a = 10;
var ar = [1, 3, 4, 'a', 'abc', true, {a: 'abc'}];
console.log(a);
console.log(ar);
console.log(ar[6]);

ar.push(100);
console.log(ar);

ar.pop();
console.log(ar);

console.log(ar.join("+"));
console.log(ar.join("=="));

// Array manipulation with push, shift, and unshift
var arr = [];
arr.push(10, 20);
console.log(arr);

arr.shift();
console.log(arr);

arr.push(100);
console.log(arr);

arr.unshift(100);
console.log(arr);

// Array operations with push and pop
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);
console.log(rows);

// Understanding what .push() returns
rows.push("freeCodeCamp");
let pushed = rows.push();
console.log(pushed);
 
// Array constructor
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let tet = fruit.constructor;
console.log(tet);

// Array copyWithin method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let da = fruits.copyWithin(2, 0);
console.log(da);

const fal = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let hj = fal.copyWithin(2, 0, 2);
console.log(hj);

// Array entries method
const fru = ["Banana", "Orange", "Apple", "Mango"];
console.log(fru);
const list = fru.entries();
console.log([...list]);

// Array every method
const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 18;
}

let yu = ages.every(checkAge);
console.log(yu);

// More examples with every method
const survey = [
  { name: "Steve", answer: "Yes" },
  { name: "Jessica", answer: "Yes" },
  { name: "Peter", answer: "Yes" },
  { name: "Elaine", answer: "No" }
];

let result = survey.every(isSameAnswer);

function isSameAnswer(el, index, arr) {
  if (index === 0) {
    return true;
  } else {
    return el.answer === arr[index - 1].answer;
  }
}
console.log(result);

// Object literal creation
var person = {
  name: 'xyz',
  age: 20,
  hobbies: ['singing', 'dancing', 'chatting'],
  DOB: "12-4-1999",
  walking: function() {
    console.log("I am walking");
    return "hello";
  },
  watching: function() {
    console.log('I am watching');
    return 'hi';
  }
};

console.log(person);
console.log(person.name);
console.log(person.walking());

// Object creation with properties
var myobj = {};
myobj.name = 'MIT';
myobj.compName = 'CSE';
console.log(myobj);

// Object creation using constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person1 = new Person('Mahesh', 22);
console.log(person1);

// Slicing elements from an array
var str = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = str.slice(1, 3);
console.log(citrus);

const myBest = str.slice(-3, -1);
console.log(myBest);

// Array length
console.log(str.length);

// Substring from a string
var an = "Hello";
console.log(an.substring(2, 10));

// String replacement (case-sensitive)
var str1 = str.join(", ").replace("Mango", "fruit");
console.log(str);
console.log(str1);

// Modifying array elements
var arrr = ['a', 'b', 'c'];
arrr[0] = 'd';
console.log(arrr);

// String case conversion and trimming
var str2 = "   something   ";
console.log(str2.trim().toLowerCase());
console.log(str2.trim().toUpperCase());

// String padding
var e = "123";
var testStart = e.padStart(5, '0');
console.log(testStart);

var testEnd = e.padEnd(5, '0');
console.log(testEnd);
