/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let letterArray = [];
        const chosenPhrase = this.phrase;
        const phraseArray = chosenPhrase.split('');
        let ul = document.querySelector('.section ul');
        //forEach to add each letter to an empty letterArray
        phraseArray.forEach(letter=> {
            letterArray.push(letter);
        });
        //for loop to push each letter into the phrase ul as and li, either with a space class or as a hidden letter
        for (let i = 0; i < letterArray.length; i++) {
            if(letterArray[i] === ' ') {
                const space = document.createElement('li');
                space.textContent = letterArray[i];
                space.className = 'space';
                ul.appendChild(space);
            } else {
                const letterLi = document.createElement('li');
                letterLi.textContent = letterArray[i];
                letterLi.className = `hide letter ${letterArray[i]}`;
                ul.appendChild(letterLi);
            }
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const activePhrase = game.activePhrase.phrase;
        const activePhraseArray = activePhrase.split('');
        for (let i = 0; i < activePhraseArray.length; i++) {
            if (letter === activePhraseArray[i]) {
                return true;
            }
        }
        return false;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const activePhrasesHTML = document.querySelectorAll('ul li');
        for (let i = 0; i < activePhrasesHTML.length; i++) {
            let classList = [];
            let phraseClassList = activePhrasesHTML[i].classList;
            for (let j = 0; j < phraseClassList.length; j++) {
                classList.push(phraseClassList[j]);
            }
            for (let x = 0; x < classList.length; x++) {
                if (classList[x] === letter) {
                    activePhrasesHTML[i].classList.remove('hide');
                    activePhrasesHTML[i].className = 'show';
                }
            }
        }
    }
 }