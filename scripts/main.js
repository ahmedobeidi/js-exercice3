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