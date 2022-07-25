let valid_input = false;
let numberCap, input;

while(!valid_input) {
    input = window.prompt("What should the highest number be?");
    numberCap = Math.round(Number(input));
    if (numberCap != NaN && numberCap > 0) {
        valid_input = true;
    }
}
let randomNumber = Math.floor(Math.random() * numberCap) +1;                           //declaration of random number within the bounds set by numberCap

let guessTracker = [] 

function userGuess() {
    let userInput = Number(document.getElementById("userInput").value);
    
    if (isNaN(document.getElementById("userInput").value)) {                           //checks for non number responses
        response.innerHTML = "Error. Please enter a number";
    }  else if ((document.getElementById("userInput").value) % 1 !== 0) {              //checks for non integer responses
        response.innerHTML = "Error. Please enter an integer value.";
    }  else if ((userInput < 1) || (userInput > numberCap)) {                          //checks for responses outside of the range 
        response.innerHTML = "Error. Please enter a positive integer in between 1 and " + numberCap;
    }  else if (guessTracker.includes(userInput)) {                                    // checks for previous guesses already in the array
        response.innerHTML = "Error. You have already guessed this number.<br> Please try again."    
    }  else if (userInput == randomNumber) {                                           //correct guess 
         if (guessTracker.length > 1) {                                               //if user didn't guess correctly on the first try
            guessTracker.push(Number(userInput))
            response.innerHTML = "Congratulations! You guessed correctly!<br>It took you " + guessTracker.length + " Guesses.<br> Your guesses were: " + guessTracker;
         } else if (guessTracker.length = 1){                                          //if user guessed correctly on the first try
            response.innerHTML = "Congratulations! You guessed correctly on your first try!<br> Your only guess was: " + userInput
         }
    }  else if (Math.round(userInput) < randomNumber) {                                //guess is smaller
        guessTracker.push(Number(userInput))
        response.innerHTML = "Sorry, you are incorrect. Try a higher number.";
    }  else if (userInput > randomNumber) {                                            //guess is larger
        guessTracker.push(Number(userInput))
        response.innerHTML = "Sorry, you are incorrect. Try a lower number.";
    }
}