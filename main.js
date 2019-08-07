// Constractor Function

function Random(min, max) {
    this.min = min;
    this.max = max;
    this.random = function () {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


// Creating Arrays of Letters and Numbers

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Creat Array that hold all arrays

let allArray = [numbersArray, lowerCaseArray, upperCaseArray]

// Create Objects for the Arrays

let all = new Random(0, allArray.length);

all.random();

let numbers = new Random(0, numbersArray.length);

numbers.random();

let letters = new Random(0, lowerCaseArray.length);

letters.random();

//Create Generator Button and EventListener

let button = document.getElementById('submit');

button.addEventListener('click', generate);


// Generator function

function generate() {

    let el = document.getElementById("main"); 

    for (let i = 0; i < all.length; i++) {
    
        if (all.random() === 0) {
            allArray[all.random()][numbers.random()];
        } else {
            allArray[all.random()][letters.random()];
        }
    }

    el.innerHTML = `${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]} - ${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]} - ${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]} - ${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]} - ${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}${allArray[all.random()][numbers.random()]}`;
}