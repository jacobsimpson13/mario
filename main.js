// Fishing
"use strict";
//Global var
let numRawFish = 0;
let numRawSalmon = 0;
let numClownFish = 0;
let numPufferFish = 0;
let numJunk = 0;

// add event listener
document.getElementById("mainImg").addEventListener("click", catchFish);
document.getElementById("plus10").addEventListener("click", plus10);
document.getElementById("plus100").addEventListener("click", plus100);
document.getElementById("Until5Treasure").addEventListener("click", Until5Treasure);
//event fuinction
function catchFish() {
    let randNum = Math.random(); // returns random decimal 
    let place = Number(document.getElementById("place").value);
if (place < 7) {
    if (randNum < 0.99) {
        let randFish = Math.random();

        if (randFish < 0.45) {
            document.getElementById("results").innerHTML += "<img src='images/rawfish.jpg'>";
            numRawFish++; // Increment fish count
            document.getElementById("rawfish").innerHTML = numRawFish;
        } else if (randFish < 0.8) {
            document.getElementById("results").innerHTML += "<img src='images/raw_Salmon.png'>";
            numRawSalmon++; // Increment fish count
            document.getElementById("rawSalmon").innerHTML = numRawSalmon;
        } else if (randFish < 0.95) {
            document.getElementById("results").innerHTML += "<img src='images/Pufferfish_old.png'>";
            numPufferFish++; // Increment fish count
            document.getElementById("Pufferfish").innerHTML = numPufferFish;
        } else {
            document.getElementById("results").innerHTML += "<img src='images/Clownfish.png'>";
            numClownFish++; // Increment fish count
            document.getElementById("clownfish").innerHTML = numClownFish;
        }


    } else {
        document.getElementById("results").innerHTML += "<img src='images/leatherboots.jpg'>";
        numJunk++; // Increment fish count
        document.getElementById("junk").innerHTML = numJunk;
    }
} else if (place > 6) {
    if (randNum < 0.3) {
        let randFish = Math.random();

        if (randFish < 0.05) {
            document.getElementById("results").innerHTML += "<img src='images/rawfish.jpg'>";
            numRawFish++; // Increment fish count
            document.getElementById("rawfish").innerHTML = numRawFish;
        } else if (randFish < 0.1) {
            document.getElementById("results").innerHTML += "<img src='images/raw_Salmon.png'>";
            numRawSalmon++; // Increment fish count
            document.getElementById("rawSalmon").innerHTML = numRawSalmon;
        } else if (randFish < 0.25) {
            document.getElementById("results").innerHTML += "<img src='images/Pufferfish_old.png'>";
            numPufferFish++; // Increment fish count
            document.getElementById("Pufferfish").innerHTML = numPufferFish;
        } else {
            document.getElementById("results").innerHTML += "<img src='images/Clownfish.png'>";
            numClownFish++; // Increment fish count
            document.getElementById("clownfish").innerHTML = numClownFish;
        }


    } else {
        document.getElementById("results").innerHTML += "<img src='images/leatherboots.jpg'>";
        numJunk++; // Increment fish count
        document.getElementById("junk").innerHTML = numJunk;
    }
}
}


function plus10() {
    for (let n = 0; n < 10; n++) {
        catchFish();
    }
}

function plus100() {
    for (let n = 0; n < 100; n++) {
        catchFish();
    }
}

function Until5Treasure() {
    while (numJunk < 5) {
        catchFish();
    }
}
