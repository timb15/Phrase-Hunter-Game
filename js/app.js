//variables
const game = new Game();
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const keyButtons = document.getElementsByClassName('key');

//function to remove start screen overlay
function resetDisplay() {
    const startScreen = document.getElementById('overlay');
    startScreen.style.display = 'none';
}

//funtion to add keyboard functionality to the game
document.addEventListener('keypress', (e) => {
    const keyName = e.key;
    for (let i = 0; i < keyButtons.length; i ++)  {
        if (keyName === keyButtons[i].textContent && keyButtons[i].disabled !== true){
            markButton(keyButtons[i]);
        }
    }
});

//adds click event listener to all the on screen keyboard buttons
for (let i = 0; i < keyButtons.length; i ++) {
        keyButtons[i].addEventListener('click', () => {
            markButton(keyButtons[i]);
        });
    }


//disables key selected and changes the color of the on screen key.
function markButton(button) {
    game.handleInteraction(button);
    button.className += ' chosen';
    button.disabled = true;
}

//Adds event listener to start game button to remove the overlay and set the game up.
startButton.addEventListener('click', event => {
    resetDisplay();
    game.startGame();
});

