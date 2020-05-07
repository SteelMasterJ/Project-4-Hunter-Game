/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

const game = new Game();
const button = document.getElementById('btn__reset');
const keyDiv = document.getElementById('qwerty');
let buttonElement;

button.addEventListener('click', (e) => {
    game.startGame();
});

keyDiv.addEventListener('click', (e) => {
    if (e.target.className === "key") {
        game.handleInteraction(e.target);
    }
});



document.addEventListener('keydown', (e) => {
    if (/\w/ig.test(e.key)) {
        const keyButtons = document.querySelectorAll('.keyrow .key');
        for (let i = 0; i < keyButtons.length; i++) {
            if (e.key.toLowerCase() === keyButtons[i].textContent) {
                buttonElement = keyButtons[i];
            }
        }
        if (buttonElement.className === 'key') {
            game.handleInteraction(buttonElement);
        }
    }
    console.log(e.key);
});

// $(".title").hide();
// $("#subtitle").hide();
// $(".title").fadeIn(2000);
// $("#subtitle").delay(1500).fadeIn(2000);

// $("#subtitle").css("visibility", "hidden");
$("#subtitle").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 4000);
