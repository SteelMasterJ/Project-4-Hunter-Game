/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

const game = new Game();
const button = document.getElementById('btn__reset');
const keyDiv = document.getElementById('qwerty');

button.addEventListener('click', (e) => {
    game.startGame();
});

keyDiv.addEventListener('click', (e) => {
    if (e.target.className === "key") {
        game.handleInteraction(e.target);
    }
});