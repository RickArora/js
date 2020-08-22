"use script";

function soundMaker(sound, times) {
    function makeSound() {
        console.log(`${sound}`);
    }

    for (let i = 0; i < times; i++) {
        makeSound();
    }
}

soundMaker("woof", 5);

// script.js
for (let i = 0; i < 10; i++) {
    console.log("The greatest of ease");
}