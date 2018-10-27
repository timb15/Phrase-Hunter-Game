class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }
    
    //creates divs on the page containing letters of the phrase
    addPhraseToDisplay() {
        const phraseLetters = this.phrase.split('');
        phraseLetters.map(letter => {
                const div = document.getElementById('phrase');
                const ul = div.firstElementChild;
                const li = document.createElement('li');
                
                if (letter !== ' '){
                    li.className = `hide letter ${letter}`;
                }
                else {
                    li.className = "hide space";
                }
                li.textContent = letter.toUpperCase();
                ul.appendChild(li);
        });    
    }

    //checks if the selected letter is in the phrase
    checkLetter(selectedLetter) {
        if(this.phrase.includes(selectedLetter)) {
            return true;
        }
        else {
            return false;
        }
    }

    //shows the selected letter in the phrase.
    showMatchedLetter(li) {
        li.className += ' show';
    }

};
