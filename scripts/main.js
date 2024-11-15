/* Exercice 1 
let iterations = 5;
let numberOfSpaces = 4;

for (let i = 1; i <= iterations; i++) {

    let star = "";
    let space = "";

    for (let j = 0; j < numberOfSpaces; j++) {
        space += " ";
    }

    for (let x = 0; x < i; x++) {
        star += "* "
    }

    console.log(space, star);
    numberOfSpaces--;
}
*/

/* Exercise 2
const superHeros = ["Spiderman", "Captain America", "Wolverine", "Superman"];

superHeros.forEach(function(hero) {
    console.log(`Je suis fan de ${hero}`);
});
*/

/* Exercise 3 
for (let i = 10; i >= 0; i--) {
    console.log(i);
    if (i === 0) { 
        console.log("Décollage");
    }
}
*/

/* Exercise 4 
const friends = ["jérémy", "hassan", "vincent", "Ahmed"];

let times = 1;
let friendName = "";

for (let i = 0; i < friends.length; i++) {
    
    friendName = friends[i] + " ";
    console.log(friendName.repeat(times));
    times++;
}
*/

/* Exercise 5.1 
while (true) {
    const number = 1;
    let guess = window.prompt("Enter a number between 1 and 3");
    guess = parseInt(guess);
    
    if ((guess > 3) || (guess < 1)) {
        window.alert("Wrong number, Try again!");
    }
    else if (guess === number) {
        window.alert("Success!");
        break;
    }
}
*/

/* Exercise 5.2 
while (true) {
    const number = 13;
    let guess = window.prompt("Enter a number between 10 and 20");
    guess = parseInt(guess);

    if (guess === number) {
        window.alert("You did it");
        break;
    }
    if (guess > 20) {
        window.alert("Smaller");
    }
    else if (guess < 10) {
        window.alert("Greater");
    }
    else {
        window.alert("Wrong number, try again");
    }
}
*/

/* Exercise 5.3 and 5.4
let number = window.prompt("Enter a number:");
number = Number(number);
let end = number + 10;

for (let i = number + 1; i <= end; i++) {
    console.log(i);
}
*/

/* Exercise 5.5 
let input = window.prompt("Enter a number:");
input = Number(input);
let result = "";

for (let i = 1; i <= 10; i++) {
    result += `${input} * ${i} = ${input * i}\n`;
}
window.alert(result);
*/

/* Exercise 5.6 
let input = window.prompt("Enter a number:");
input = parseInt(input);
let result = "";
let sum = 0;

for (let i = 1; i <= input; i++) {
    sum += i;
    if (i === input) {
        result += `+ ${i} = ${sum}`;
    }
    else if (i === input - 1) {
        result += `${i} `;
    }
    else {
        result += `${i} + `;
    }
}

console.log(result);
*/

/* Exercise 5.7 
let number = window.prompt("Enter a number:");
number = parseInt(number);
let result = 1;

for (let i = 1; i <= number; i++) {
    result = result * i;
}
window.alert(result);
*/

/* Exercise 5.8 
let arr = [];
let biggestNumber;
let index;

for (let i = 1; i <= 20; i++) {
    let number = window.prompt(`Enter number ${i}:`);
    number = Number(number);
    arr.push(number);
}

biggestNumber = arr[0];
index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
        index = i;
    }
}

window.alert(`The biggest number is: ${biggestNumber} at index: ${index}`);
*/

/* Exercise 5.9 
let arr = [];
let biggestNumber;
let index;

for (let i = 1; i > 0; i++) {
    let number = window.prompt(`Enter number ${i}:`);
    number = Number(number);
    arr.push(number);
    if (number === 0) { break }
}

biggestNumber = arr[0];
index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
        index = i;
    }
}

window.alert(`The biggest number is: ${biggestNumber} at index: ${index+1}`);
*/

/* Exercise 5.10 
const euros = [100, 50, 20, 10, 5, 2, 1];

const priceOfProducts = parseInt(window.prompt("Enter the price of the products:"));
let budget = parseInt(window.prompt("Enter your budget:"));
let rest = budget - priceOfProducts;

while (true) {
    if (budget < priceOfProducts) {
        budget = parseInt(window.prompt("Enter your budget:"));
        rest = budget - priceOfProducts;
        continue;
    }
    console.log(rest);
    break;
}

euros.forEach(function(euro) {
    let x;
    if (rest / euro >= 1) {
        x = Math.floor(rest / euro);
        alert(x + "billet de " + euro);
        rest = rest % euro;
    }
});
*/

// 175
// 3 BILLET DE 50
// 75
// 1 BILLET DE 50
// 25
// 1 BILLET DE 20
// 5
// 1 BILLET DE 5
// 0

