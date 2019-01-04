/****************************
*Variables and data types

// console.log('Hello World!!!');
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

// console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// This are single line comments

*/



/***************************
*Variable mutation and type coercion


var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried; // Declared the variables
job = 'Teacher';    // Assigned values
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is your Last Name');
console.log(firstName + ' ' + lastName);
*/



/**********************************
*Basic Operators

var year, yearJohn, yearMark;
now = 2018

// Math operator
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now / 10);
console.log(now - 5);
console.log(now);

// Logical operator
var now, ageJohn, ageMark, johnOlder;
ageJohn = 28;
ageMark = 33;

johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Is this a String");
var x;
console.log(typeof x);
*/


/***************************
* Operator Precedence


var fullAge, now, johnYear;
fullAge = 18;
now = 2018;
johnYear = 1989;

// Multiple operators
var isFullAge = now - johnYear >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - johnYear;
var ageMark = 35;
var avg = (ageMark + ageJohn) / 2;
console.log(avg);

console.log(isFullAge, avg);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++; // x = x + 1
console.log(x);
x--;
console.log(x);
*/


/******************************
//* BMI Calculation

var johnMass, markMass, johnHeight, markHeight;
johnHeight = 1.73; // kg
markHeight = 2.62; // kg
johnMass = 175; // meters
markMass = 160; // meters

// John's BMI
var jBmi = johnMass / (johnHeight**2);
console.log('This is John\'s BMI', jBmi);

// Mark's BMI
var mBmi = markMass / (markHeight**2);
console.log('This is Mark\'s BMI', mBmi);

// Boolean value
var ask = mBmi > jBmi;
console.log('Is Mark\'s BMI higher than John\'s?', ask);

*/

/*****************************************
If / else statment

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName, 'Will hopefully be married soon :)');
}

var isMarried = true;
if(isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName, 'Will hopefully be married soon :)');
}

var johnMass, markMass, johnHeight, markHeight;
johnHeight = 5.73; // kg
markHeight = 2.62; // kg
johnMass = 175; // meters
markMass = 160; // meters

// John's BMI
var jBmi = johnMass / (johnHeight**2);
console.log('This is John\'s BMI', jBmi);

// Mark's BMI
var mBmi = markMass / (markHeight**2);
console.log('This is Mark\'s BMI', mBmi);

// Boolean value
// var ask = mBmi > jBmi;
// console.log('Is Mark\'s BMI higher than 
// John\'s?', ask);

if(mBmi > jBmi){
    console.log('Mark has a higher BMI than John\'s');
} else {
    console.log('John has a higher BMI than Mark\'s');
}

*/

/********************************************
* Boolean Logic


var firstName, age;
firstName = 'John';
age = 35;

if(age < 13){
    console.log(firstName, ' is a boy.');
} else if (age >=13 && age < 20) { //teenage age >= 13 and < 20
    console.log(firstName + ' is a teenage'); 
} 
  else if (age >=20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

*/


/************************************************
* The Ternary Operator and Switch Statements


var firstName, age;
age = 15;
firstName = 'John';

// Ternary Operator
age >= 18 ? console.log(firstName, 'drinks beer.') : console.log(firstName, 'drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if(age >= 18){
    var drink = 'beer';
} else {
    var drink = 'juice';
}


// Switch statement
var job = 'driver';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives Uber in Dallas.');
        break;
    case 'designer':
        console.log(firstName + ' designes website in Plano.');
        break;
    default:
        console.log(firstName + ' does something else.');
}



switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenage'); 
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

/*
firstName = 'John';
age = 35

if(age < 13){
    console.log(firstName, ' is a boy.');
} else if (age >=13 && age < 20) { //teenage age >= 13 and < 20
    console.log(firstName + ' is a teenage'); 
} 
  else if (age >=20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/************************************************
* Truthy and Falsy values and equality operatiors


// falsy values: undefined, null, 0, '', NaN
// truty values: NOT falsy values

var height;
height = 23;

if(height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

if(height === '23'){
    console.log('The == operator does type coercion!');
} else {
    console.log('The === operator does not type coercion!');
}

*/

/************************************************************************
* HomeWork
*
var johnT, mikeT, maryT;
johnT = (89 + 120 + 103)/3;
mikeT = (116 + 94 + 123)/3;
maryT = (97 + 134 + 105)/3;

//johnT = (89 + 120 + 103)/3;
//mikeT = (97 + 134 + 105)/3;
//maryT = (89 + 120 + 103)/3;

switch(true){
    case johnT >= mikeT && johnT >= maryT:
        if(johnT > mikeT && johnT > maryT){
            console.log('John\'s team is the winner with an avg score of ' + johnT); 
        } else if(johnT === mikeT && johnT === maryT){
            console.log('This is a 3 way tie with an avg score of '+ johnT);       
        } else if(johnT === mikeT){
            console.log('its 2 way tie between John and Mike\'s teams with an avg score of '+ johnT);  
        } else {
            console.log('its 2 way tie between John and Mary\'s teamswith an avg score of '+ johnT); 
        }
        break;
        
     case mikeT >= johnT && mikeT >= maryT:
        if(mikeT > johnT && mikeT > maryT){
            console.log('Mike\'s team is the winner with an avg score of ' + mikeT); 
        } else if(mikeT === johnT){
            console.log('its 2 way tie between Mike and Mike\'s teams with an avg score of '+ mikeT);  
        } else {
            console.log('its 2 way tie between Mike and Mary\'s teamswith an avg score of '+ mikeT); 
        }
        break;
        
    case maryT >= johnT && maryT >= mikeT:
        if(maryT > johnT && maryT > mikeT){
            console.log('Mary\'s team is the winner with an avg score of ' + maryT); 
        } else if(maryT === johnT){
            console.log('its 2 way tie between Mike and Mike\'s teams with an avg score of '+ maryT);  
        } else {
            console.log('its 2 way tie between Mike and Mary\'s teamswith an avg score of '+ maryT); 
        }
        break;
}

*/

/*******

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenage'); 
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


/*************************************
* Functions


function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1998);
var ageMike = calculateAge(1964);
var ageJane = calculateAge(1948);
console.log(ageJohn, ageMike, ageJane);


function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');  
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearUntilRetirement(1990, 'Joe');
yearUntilRetirement(1964, 'Mike');
yearUntilRetirement(1945, 'Jane');
*/


/**************************************
* Function Statements and Expressions


// Function declaration
//function whatDoYouDo(job, firstname){}


//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives for Uber';
        case 'designer':
            return firstName + ' design website';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('architect', 'Nancy'));
console.log(whatDoYouDo('designer', 'Ada'));

*/


/********************************************************
* Arrays
/*

var names = ['John', 'Mark', 'Jane'];
var year = new Array(1998, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Joseph';
console.log(names[1]);

names[5] = 'Mary';
console.log(names[5]);
console.log(names);

names[names.length] = 'Ada';
console.log(names);

year[year.length] = 2015;
console.log(year);
*/

// Different Data Types
/*
var john = ['Joseph', 'Glover', 1980, 'designer', false];
john.push('blue'); // Method that add to the end of the array.
console.log(john);

john.unshift('Mr.'); // Method that add Mr. to the beginning of the array.
john.pop(); // Method that remove from the end of the array.
console.log(john);

john[john.length] = 45;
console.log(john);

john.shift();
console.log(john); // Method that remove from the beginning of the array.

console.log(john.indexOf(1980)); // Method that returns the position of the element in the array.


console.log(john.indexOf(1981)); // If not in the array, it will return -1
// indexOf is also used to test if an element is in the array.

var isTeacher = john.indexOf('teacher') === -1 ? 'John is NOT a teacher' : 'John IS a teacher';

console.log(isTeacher);


var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a teacher' : 'John IS a designer';

console.log(isDesigner);

*/

// My Challenge 3 result
/*
var bills = new Array(48, 124, 268);
var tips = [48, 124, 268];

function calTips(totalBill){
	switch(true){
		case totalBill < 50:
		  return tips[0] = totalBill * 0.20;
		  break;
        case totalBill >= 50 && totalBill <= 200:
		  return tips[1] = totalBill * 0.15;
		  break;
        case totalBill > 200:
		  return tips[2] = totalBill * 0.10;
		  break;
	}
}



var firstRes = calTips(48);
var secondRes = calTips(124);
var thridRes = calTips(268);


//All tips array
console.log(tips);

//New total array - Bill + tips

bills[0] = tips[0] + bills[0];
bills[1] = tips[1] + bills[1];
bills[2] = tips[2] + bills[2];

console.log(bills);

//console.log('This is the total ' + bills)

*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/


/****************************************
* Objects (objects are arrays that have names assigned to them) and Properties


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family:['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);

// How to retrieve data from object.
console.log(john.firstName); // Dot Notation
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// Another way to initialize an Object
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1998;
jane['lastName'] = 'Smith';
console.log(jane);

*/


/****************************************
* Objects and Methods - Methods are functions that you can add to Object.

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    family:['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){ // calcAge: function(birthYear){
        return 2018 - this.birthYear; // Use this.birthYear
    }
};


// console.log(john.calcAge(birthYear)); // if you are not using this.birthYear
console.log(john.calcAge());


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    family:['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){ // calcAge: function(birthYear){
        this.age = 2018 - this.birthYear; // You can store the output of the john object itself.
    }
};


// console.log(john.calcAge(birthYear)); // if you are not using this.birthYear
john.calcAge();

console.log(john);

*/

/*************************************************
* Coding Challenge 4


/******************************
//*BMI Calculation

var johnMass, markMass, johnHeight, markHeight;
johnHeight = 1.73; // kg
markHeight = 2.62; // kg
johnMass = 175; // meters
markMass = 160; // meters

// John's BMI
var jBmi = johnMass / (johnHeight**2);
console.log('This is John\'s BMI', jBmi);

// Mark's BMI
var mBmi = markMass / (markHeight**2);
console.log('This is Mark\'s BMI', mBmi);

// Boolean value
var ask = mBmi > jBmi;
console.log('Is Mark\'s BMI higher than John\'s?', ask);



var john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.73,
    mass: 175,
    calcBmi: function(){
        return this.bmi = this.mass / (this.height**2);
    }
}

//john.calcBmi();
//console.log(john);


var mark = {
    firstName: 'Mark',
    lastName: 'Odis',
    height: 2.62,
    mass: 160,
    calcBmi: function(){
        return this.bmi = this.mass / (this.height**2);
    }
}

//mark.calcBmi();
//console.log(mark);

if(john.calcBmi() > mark.calcBmi()){ // call the method and use it at the sametime. 
    console.log('John\'s BMI is higher than Mark\'s?', john.firstName, john.lastName, john.bmi);
} else {
    console.log('Mark\'s BMI is higher than John\'s?', mark.firstName, mark.lastName, mark.bmi);
}

*/


/********************************************************
* Loops and iteration
*
// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++


for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++



var john = ['Joseph', 'Glover', 1980, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/

// Continue and break statements

//var john = ['Joseph', 'Glover', 1980, 'designer', false];
/*
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; // continues and skips numbers
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; // break out of the loop not a string.
    console.log(john[i]);
}
*/
/*******************
//var john = ['Joseph', 'Glover', 1980, 'designer', false];
for (var i = john.length - 1; i >= 0; i--) {
    //if (typeof john[i] !== 'string') continue; // continues and skips numbers
    console.log(john[i]);
}
*/

// Codding Challenge 5
// Creating the objects for John
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        for (i = 0; i < this.bills.length; i++){
            //Determin percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to the correspoing arrarys
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

// Creating the objects for Mark
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        for (i = 0; i < this.bills.length; i++){
            //Determin percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            // Add results to the correspoing arrarys
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

john.calcTips();
mark.calcTips();
console.log(john, mark);


// How to calc avg tips
function calcAve(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
        return sum / tips.length;
}

// This is how you call the functions and add it to the objects.
john.average = calcAve(john.tips);
mark.average = calcAve(mark.tips);
console.log(john, mark);








































































































































































































































































































































