// Initialize game variables
let randomNumber = Math.floor(Math.random() * 10) + 1;  // Generate random number between 1 and 10
let attempts = 3;  // Player has 3 attempts per game
let wins = 0;      // Track total wins
let losses = 0;    // Track total losses

// Function called when a number button is clicked, passing in the guessed number
function makeGuess(guess) {
    // Check if guess is correct
    if (guess === randomNumber) {
        document.getElementById("message").innerText = "Correct! You win!";
        wins++;   // Increase win count
        updateStats();  // Update the stats display
        disableButtons(); // Disable buttons since game is over
    } else {
        attempts--;  // Reduce attempts by 1 if incorrect guess
        if (attempts > 0) {
            // Give hint to player if they have attempts left
            if (guess < randomNumber) {
                document.getElementById("message").innerText = "Try a higher number.";
            } else {
                document.getElementById("message").innerText = "Try a lower number.";
            }
            disableHigherLower(guess); // Disable buttons that can't be the answer
        } else {
            // If no attempts are left, player loses the game
            document.getElementById("message").innerText = `Game Over! The number was ${randomNumber}.`;
            losses++; // Increase loss count
            updateStats(); // Update the stats display
            disableButtons(); // Disable buttons since game is over
        }
    }
}

// Function to disable number buttons based on guess (hides impossible guesses)
function disableHigherLower(guess) {
    document.querySelectorAll(".number-btn").forEach(button => {
        let number = parseInt(button.innerText); // Get number on button
        // Disable buttons that are too high or too low based on the guess
        if ((guess < randomNumber && number <= guess) || (guess > randomNumber && number >= guess)) {
            button.disabled = true;
        }
    });
}

// Function to disable all number buttons at end of game
function disableButtons() {
    document.querySelectorAll(".number-btn").forEach(button => {
        button.disabled = true;
    });
}

// Function to update the displayed wins and losses stats
function updateStats() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
}

// Function to reset game variables and UI for a new game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1; // New random number
    attempts = 3;  // Reset attempts
    document.getElementById("message").innerText = "Guess a number between 1 and 10"; // Reset message
    document.querySelectorAll(".number-btn").forEach(button => {
        button.disabled = false; // Re-enable all buttons
    });
}
