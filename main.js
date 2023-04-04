console.log("main.js loaded");


const myArray = [ 15, 14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35];


console.log(myArray);

let som = 0;

for (let i = 0; i < myArray.length; i++) {
    const getal = myArray[i];
    som = som + getal;
}

const average = som/myArray.length;

console.log("Gemiddelde is: ", average);