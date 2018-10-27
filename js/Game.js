const hearts = document.getElementsByClassName('tries');
let newPhrase = {};

class Game {
    constructor() {
        this.hits = 0;
        this.misses = 0;
        this.phrases = ['ball is in your court',
                        'let sleeping dogs lie',
                        'elvis has left the building',
                        'it takes two to tango',
                        'once in a blue moon',
                        'piece of cake',
                        'speak of the devil',
                        'whole nine yards',
                        'burn the midnight oil'
                        ];

    }

    //Gets a random phrase from the array of phrases
    getRandomPhrase() {
        const random = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[random];  
    }

    //check is the selected letter is in the phrase or not and calls appropriate functions
    handleInteraction(button) {
        const lis = document.getElementsByClassName(button.textContent);

        if(newPhrase.checkLetter(button.textContent)) {
            for(let i = 0; i < lis.length; i++){
            newPhrase.showMatchedLetter(lis[i]);
            this.hits += 1;
            this.checkForWin(this.hits);
            }
        }
        else {
            this.removeLife();
        }
    }

    //if selected letter is not in the phrase, will remove a heart. If out of hearts, calls gameOver()
    removeLife() {
        hearts[this.misses].style.display = 'none';
        this.misses += 1;
        if(this.misses === 5) {
            this.gameOver('lose');
        }            
    }

    //checks if the player has guessed all the letters in the phrase and if so calls gameOver()
    checkForWin(hits) {
        const phraseLetters = newPhrase.phrase.split('');
        const lettercount = phraseLetters.filter(letter => letter !== ' ').length;
        
        if(hits === lettercount) {
            this.gameOver('win');
        }
    }

    styleOverlay(winOrLose, message, btnClass, btnMessage){
        const startScreen = document.getElementById('overlay');
        startScreen.className = winOrLose;
        startScreen.style.display = '';

        const gameOverMessage = document.getElementById('game-over-message');
        gameOverMessage.className = winOrLose;
        gameOverMessage.textContent = message;

        const resetButton = document.getElementById('btn__reset');
        resetButton.className = btnClass;
        resetButton.textContent = btnMessage;

    }

    //Ends the game and displays win or lose overlay
    gameOver(winOrLose) {
        if(winOrLose === 'lose'){
            this.styleOverlay(winOrLose, 'YOU LOSE!', 'lose-button', 'Try Again');
            }
        else if (winOrLose === 'win'){
            this.styleOverlay(winOrLose, 'YOU WIN!', 'win-button', 'Play Again');
        }
    }

    //Function to set up/reset the game
    startGame() {
        this.misses = 0;
        this.hits = 0;

        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;
        phraseUl.innerHTML = '';

        const letterKeys = document.getElementsByClassName('key');
        for(let i = 0; i < letterKeys.length; i ++) {
            letterKeys[i].disabled = '';
            letterKeys[i].className = 'key';
        }

        for(let j = 0; j < hearts.length; j ++) {
            hearts[j].style.display = '';
        }


        newPhrase = new Phrase(this.getRandomPhrase());
        newPhrase.addPhraseToDisplay();
        return newPhrase;
    }
}

