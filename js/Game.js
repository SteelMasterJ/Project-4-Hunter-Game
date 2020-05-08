/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('wilson king of prussia'),
            new Phrase('colonel forbin'),
            new Phrase('helping friendly book'),
            new Phrase('rutherford the brave'),
            new Phrase('fly famous mockingbird'),
            new Phrase('the wind blows high'),
            new Phrase('lets get this show on the road'),  
            new Phrase('surrender to the flow'),
            new Phrase('i come from top the mountain'),
            new Phrase('the land of gamehendge'),
            new Phrase('the land of the big baboon'),
            new Phrase('the man who stepped into yesterday'),
            new Phrase('read the book')
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const random = Math.floor(Math.random() * 13);
        return this.phrases[random];
    }

    // /**
    // * Begins game by selecting a random phrase and displaying it to user
    // */
    startGame() {
        this.missed = 0;
        this.activePhrase = null;
        const li = document.querySelectorAll('ul li');
        const ul = document.querySelector('.section ul');
        //removes any old active phrases upon start
        for (let i = 0; i< li.length; i++) {
            ul.removeChild(li[i]);
        }
        //removes any old class changes to the key buttons upon start
        const buttons = document.querySelectorAll('.keyrow button');
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className === 'wrong') {
                buttons[i].classList.remove('wrong');
                buttons[i].className = 'key';
            } else if (buttons[i].className === 'chosen') {
                buttons[i].classList.remove('chosen');
                buttons[i].className = 'key';
            }
        }
        //resets hearts
        const heartLi = document.querySelectorAll('[src="images/lostHeart.png"]');
        for (let i = 0; i < heartLi.length; i++) {
            heartLi[i].src = "images/liveHeart.png";
        }
        //fades in the heart icons with jquery
        $('[src="images/liveHeart.png"]').fadeIn(3000);
        //removes start screen
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        //gets new random phrase and adds it to the DOM
        const randomPhrase = game.getRandomPhrase();
        randomPhrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const li = document.querySelectorAll('ul li');
        let noMatchCount = 0;
        for (let i = 0; i < li.length; i++) {
            if (li[i].className !== 'space' && li[i].className !== 'show') {
                noMatchCount += 1;
            }
        }
        if (noMatchCount === 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        const li = document.querySelector('[src="images/liveHeart.png"]');
        //jquery to fade out a heart upon losing one
        $('[src="images/liveHeart.png"]').first().fadeOut(1000);
        li.src = "images/lostHeart.png";
        if (this.missed >= 5) {
            game.gameOver(false);
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        overlay.style.display = 'block';
        if (gameWon === true) {
            document.getElementById('game-over-message').textContent = "Congrats! You won and saved Gamehendge!";
            document.getElementById('overlay').className = 'win';
        } else {
            document.getElementById('game-over-message').textContent = "Sorry. You ran out of guesses, and the lizards... they have died.";
            document.getElementById('overlay').className = 'lose';
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.classList.remove('key');
        let noLetterMatchCount = 0;
        for (let i = 0; i < this.activePhrase.phrase.length; i++) {
            if (button.textContent === this.activePhrase.phrase[i]) {
                this.activePhrase.showMatchedLetter(button.textContent);
                this.checkForWin();
                button.className = 'chosen';
                if (this.checkForWin() === true) {
                    this.gameOver(true);
                }
            } else if (button.textContent !== this.activePhrase.phrase[i]) {
                noLetterMatchCount += 1;
            }
            if (noLetterMatchCount === this.activePhrase.phrase.length) {
                button.className = 'wrong';
                game.removeLife();
            }
        }
    };


}