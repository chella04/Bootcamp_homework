let myAge=32;
let earlyYears=2;         // first 2 years of dog let earlyYears=2;
earlyYears *=5;           // calculation of early 2 years of dog.
let laterYears= myAge-2;
laterYears *=4;           // calculation of later years of dog.

//calculating my age in dog years
let myAgeInDogYears= earlyYears+laterYears;

//Defining my name and converting to lower case
const myName= "Mani";
myName.toLowerCase();

//Displaying My name and age in dog years
console.log( "My name is " + myName + " I am " + myAgeInDogYears + " years old in dog years. ");


function calculateDogAge(age) 
{
    var humanYear =1;
    var dogYears= 7*age;
    console.log("Your doggie is "+ dogYears +" years old in dog years!")
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(10.5);