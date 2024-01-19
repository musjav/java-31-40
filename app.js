
// var dObj = new Date();
// console.log(dObj);

// var a = new Date();
// var dStr = a.toString();
// console.log(dStr);

// var d = a.getDay();
// // console.log(d);
// currentdayIndex = d;

// var dayNames =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var currentday=dayNames[currentdayIndex];
// var a=dayNames.indexOf("thursday");
// alert(currentday +":-"+ "the day found at" +"::-"+ a);

// var currentDate = new Date();
// console.log(currentDate);
// var h =currentDate.getDay();
// console.log(h);
// var a =currentDate.getFullYear();
// console.log(a);
// var b =currentDate.getDate();
// console.log(b);
// var c =currentDate.getMonth();
// console.log(c);
// var d =currentDate.getMinutes();
// console.log(d);
// var e =currentDate.getHours();
// console.log(e);
// var f =currentDate.getSeconds();
// console.log(f);
// var g =currentDate.getMilliseconds();
// console.log(g);

// var later = new Date(2020,11,31);
// console.log(later);

// var old=new Date(1992,1,2)
// console.log(old);

// alert(new Date(1980, 0, 1).getTime());

// to change year we use setFullYear
// myDate.setFullYear(2022);

// function changeToJanuary(inputDate) {
//     // Clone the input date to avoid modifying the original
//     var modifiedDate = new Date(inputDate);

//     // Set the month to January (0-based, so 0 represents January)
//     modifiedDate.setMonth(0);

//     return modifiedDate;
// }

// // Example usage:
// var myDate = new Date();
// var resultDate = changeToJanuary(myDate);

// // Display the original and modified dates
// console.log('Original Date:', myDate);
// console.log('Modified Date (January):', resultDate);


// function changeDayOfWeek(year, month, day, newDayOfWeek) {
//     // Create a new Date object with the specified year, month, and day
//     var modifiedDate = new Date(year, month - 1, day);

//     // Check if the newDayOfWeek is a valid number (0 for Sunday, 1 for Monday, and so on)
//     if (newDayOfWeek >= 0 && newDayOfWeek <= 6) {
//         // Calculate the difference between the current day of the week and the desired day of the week
//         var dayOfWeekDifference = newDayOfWeek - modifiedDate.getDay();

//         // Adjust the date by adding the difference to it
//         modifiedDate.setDate(modifiedDate.getDate() + dayOfWeekDifference);
        
//         return modifiedDate;
//     } else {
//         // Invalid newDayOfWeek
//         return null;
//     }
// }

// // Example usage:
// var originalDate = new Date(2022, 0, 15); // January 15, 2022 (Saturday)
// var newDate = changeDayOfWeek(2022, 1, 15, 3); // Change to Wednesday

// console.log('Original Date:', originalDate.toDateString());
// console.log('Modified Date:', newDate.toDateString());

// function Age(ab){
//     var a = new Date(ab);
//     var b = a.getFullYear();
// var c = new Date();
// var d = c.getFullYear();
// var e = d-b;
// console.log(e)
// }
// Age("01-01-2001");
// Age("02-14-2008");
// Age("06-15-1990");

// function calcDiscount(price,discount){
//     var amount =price -discount

//     console.log(amount);

// }





// function CalcAge(ab){
//     var a = new Date(ab);
//     var b = a.getFullYear();
// var c = new Date();
// var d = c.getFullYear();
// var e = d-b;
// console.log(e)
// }
// CalcAge("01-01-2001");
// CalcAge("02-14-2008");
// CalcAge("06-15-1990");

// function changeMinutes(inputTime) {
//     var newMinutes = prompt("Enter new minutes:");
//     inputTime.setMinutes(newMinutes);
//     return inputTime;
// }
// changeMinutes()

// function addHours(inputTime, hoursToAdd) {
//     inputTime.setHours(inputTime.getHours() + hoursToAdd);
//     return inputTime;
// }

// function calculateAge(birthDate) {
//     var currentDate = new Date();
//     // var birthYear =prompt("enter birth year");
//     var birthYear = birthDate.getFullYear();
//     var currentYear = currentDate.getFullYear();
//     var age = currentYear - birthYear;

//     // Adjust age if birthday hasn't occurred yet this year
//     if (currentDate < new Date(currentYear, birthDate.getMonth(), birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

// function displayAlert() {
//     // First line of the function
//     alert("Hello, World!");
// }
// function askName() {
//    var userName = prompt("Enter name");
// }
// function callTwoFunctions() {
//     // Call function 1
//     displayAlert();

//     // Call function 2
//     askName();
// }
// function enterNameAndAlert() {
//     let name = prompt("Enter name");
//     alert("Hello, " + name + "!");
// }

// // Call the function
// enterNameAndAlert();

// function concat(first, second, third) {
//     // First line of the function
//     var result = first + second + third;
// }

// function concatenateStrings(str1, str2) {
//     let resultString = str1 + str2;
//     console.log(resultString);
// }

// function multiplyParameters(a, b, c) {
//     let result = a * b * c;
//     console.log(result);
// }

// function calculateAverage(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum / numbers.length;
// }

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// let result = addTwoNumbers(5, 7);
// console.log(result);

// function letterCounts(word) {
//     let counts = {};
    
//     for (let i = 0; i < word.length; i++) {
//         let letter = word[i];
//         counts[letter] = (counts[letter] || 0) + 1;
//     }

//     console.log(counts);
// }

// function setYearInDate(year) {
//     let currentDate = new Date();
//     currentDate.setFullYear(year);
//     console.log(currentDate);
// }

// function calculateAge(dateOfBirth) {
//     let currentDate = new Date();
//     let birthDate = new Date(dateOfBirth);
    
//     let ageInMilliseconds = currentDate - birthDate;
//     let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    
//     console.log(Math.floor(ageInYears));
// }

// function checkPresence(word) {
//     let names = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//     let result = names.includes(word);
//     console.log(result);
// }

// function repeatLetter(letter) {
//     let repeatedString = letter.repeat(10);
//     console.log(repeatedString);
// }

// function reverseArray(arr) {
//     let reversedArray = arr.reverse();
//     console.log(reversedArray);
// }

// function reverseNumber(num) {
//     let reversedNumber = parseInt(num.toString().split('').reverse().join(''));
//     console.log(reversedNumber);
// }

// function reverseNumber(num) {
//     let reversedNumber = parseInt(num.toString().split('').reverse().join(''));
//     console.log(reversedNumber);
// }

// function isPalindrome(str) {
//     let reversedStr = str.split('').reverse().join('');
//     let result = str === reversedStr;
//     console.log(result);
// }

// function capitalizeWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     let result = words.join(' ');
//     console.log(result);
// }

// function findMinMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     console.log(min, max);
// }


// function demonstrateLocalVariable() {
//     // Declare a local variable
//     let localVar = "I am a local variable.";

//     // Access and use the local variable
//     console.log(localVar);

//     // You can perform other operations with localVar here
// }

// // Call the function
// demonstrateLocalVariable();

// // Attempting to access localVar outside the function will result in an error
// // console.log(localVar); // Uncommenting this line will cause an error
// // //=================
// // Declare a global variable
// let globalVar = "I am a global variable.";

// function accessGlobalVariable() {
//     // Access and use the global variable
//     console.log(globalVar);

//     // You can perform other operations with globalVar here
// }

// // Call the function
// accessGlobalVariable();

// function performActionBasedOnVariable(value) {
//     switch (value) {
//         case 'case1':
//             console.log('Action 1 performed');
//             break;
//         case 'case2':
//             console.log('Action 2 performed');
//             break;
//         case 'case3':
//             console.log('Action 3 performed');
//             break;
//         default:
//             console.log('Default action performed');
//     }
// }

// // Example usage
// performActionBasedOnVariable('case2');
// // Output: Action 2 performed


// function checkCity(cityName) {
//     switch (cityName) {
//         case 'New York':
//             alert('User is in New York!');
//             break;
//         case 'London':
//             alert('User is in London!');
//             break;
//         case 'Tokyo':
//             alert('User is in Tokyo!');
//             break;
//         default:
//             alert('City not recognized. Please enter a valid city.');
//     }
// }

// // Example usage
// let userCity = prompt('Enter your city:');
// checkCity(userCity);


