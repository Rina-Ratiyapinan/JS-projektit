// Initial game setup
let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let attempts = 3; // Number of guesses allowed
let wins = 0; // Wins counter
let losses = 0; // Losses counter

// This function handles the player's guess when a button is clicked
function makeGuess(guess, button) {
    let messageElement = document.getElementById("message"); // The message area in the HTML
    
    // Disable the button that was clicked so it can't be clicked again
    button.disabled = true;

    if (guess === randomNumber) {
        messageElement.innerText = "Oikein! Voitit pelin!"; // Display win message
        wins++; // Increase win count by 1
        document.getElementById("wins").innerText = wins; // Update win display
        disableAllButtons(); // Disable all buttons since game is over
    } else {
        attempts--; // Reduce attempts by 1
        if (attempts > 0) {
            // Provide a hint to help the player
            if (guess < randomNumber) {
                messageElement.innerText = "Yritä isompaa lukua!"; // Hint to try a higher number
            } else {
                messageElement.innerText = "Yritä pienempää lukua!"; // Hint to try a lower number
            }
        } else {
            // No attempts left; player loses
            messageElement.innerText = `Peli ohi! Oikea luku oli ${randomNumber}.`; // Game over message
            losses++; // Increase loss count by 1
            document.getElementById("losses").innerText = losses; // Update loss display
            disableAllButtons(); // Disable all buttons since game is over
        }
    }
}

// This function disables all number buttons once the game is over
function disableAllButtons() {
    let buttons = document.getElementsByClassName("number-btn"); // Get all number buttons by class name
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; // Disable each button in the list
    }
}

// This function resets the game for a new round
function restartGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a new random number
    attempts = 3; // Reset attempts
    document.getElementById("message").innerText = "Peli alkaa! sinulla on 3 yritystä"; // Reset message
    
    // Re-enable all buttons for a new game
    let buttons = document.getElementsByClassName("number-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false; // Re-enable each button
    }
}
