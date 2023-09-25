let myAge;
const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

line.question('Age to be converted: ', (humanAge) => {
    myAge = humanAge;
let earlyYears = 2;
earlyYears *= 10.5;
//subtracted the initial value of myAge by 2 and then initialised the new variable laterYears to the current value of myAge
let laterYears = myAge - 2;
//juss multiplied the laterYears variable by 4 using the multiplication assignment operator
laterYears = laterYears * 4;
//To see the total age converted in dog years
let myAgeInDogYears = earlyYears + laterYears;
//create a variable assigned to a stirng then use the .lowercase()method to make the whole string a lowercase letter string
let myName = 'FAITH'
line.question('Your names: ', (names) => {
    myName = names;
myName = myName.toLowerCase();
//statement that displays my name and age in human years and then in the dg years
console.log(`Hi! This is ${myName}. I normally am ${myAge} years old which is ${myAgeInDogYears} dog years😉.`);
});
});