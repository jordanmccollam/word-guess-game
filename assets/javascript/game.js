$(document).ready(function() {

    // Create Array of possible words
    var words = ["lamp", "mermaid", "walt", "beast", "cinderella", "pixar"];

    // (for testing)
    // var words = ["lamp"];
     
    // choose one word randomly
    var chosenWord = "";
    function generateWord() {
        chosenWord = words[Math.floor(Math.random()*words.length)];
        // console.log("The word is: " + chosenWord);
    };
    generateWord();
    // var randNum = Math.floor(Math.random()*words.length);
    // var chosenWord = words[randNum];
    console.log("The word is: " + chosenWord);

    // Display wins
    var wins = 0;
    $("#winCount").html(wins);

    // Display guess #
    var guessNumber = 13;
    $("#guessNumber").html(guessNumber);

    // create underscores based on word chosen
    var underscores = [];
    generateUnderscores();
    // $("#currentWord").html(underscores); 

    // Generate hint
    hint();
    
    // get users guess
    $(document).keydown(function(event) {
        // Make sure user can only type letters
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            // Take the key pressed and assign it to a var
            var guess = event.key.toLowerCase();
            pressedKey(guess);
        };
    });



    // ***************
    // FUNCTIONS
    function generateUnderscores() {
        for (var i=0; i < chosenWord.length; i++) {
            underscores.push("__ ");
            $("#currentWord").html(underscores); 
        }
    };

    // Hint Picture
    function hint() {
        if (chosenWord == "lamp") {
            $(".hint").html('<img class="hint-image ml-5 mt-4" src="assets/images/genie.png" alt="hint"></img>');
        }
        else if (chosenWord == "mermaid") {
            $(".hint").html('<img class="hint-image ml-5 mt-4" src="assets/images/mermaid.png" alt="hint"></img>');
        }
        else if (chosenWord == "walt") {
            $(".hint").html('<img class="hint-image ml-5 mt-4" src="assets/images/walt.png" alt="hint"></img>');
        }
        else if (chosenWord == "beast") {
            $(".hint").html('<img class="hint-image ml-5 mt-4" src="assets/images/beast.png" alt="hint"></img>');
        }
        else if (chosenWord == "cinderella") {
            $(".hint").html('<img class="hint-image ml-5 mt-4" src="assets/images/cinderella.png" alt="hint"></img>');
        }
        else if (chosenWord == "pixar") {
            $(".hint").html('<img class="hint-image ml-5 mt-4" src="assets/images/pixar.png" alt="hint"></img>');
        }
    };

    function pressedKey(guess) {
        // If guess is right (-1 is any letter that isn't in word)
        if (chosenWord.indexOf(guess) > -1) {
            rightGuess(guess);
        }
        // If guess is wrong
        else {
            $("#wrongGuesses").append(guess + " ");
        };
        // Bring guess number down
        if (guessNumber !== -1) {
            $("#guessNumber").html(guessNumber -= 1);
        } 
        else {
            lose();
        };
    };

    function rightGuess(guess) {
        // (if there ARE undercores left)
        if (underscores.indexOf("__ ") !== -1) {
            // replace underscores with correctly guessed letter
            underscores.splice(chosenWord.indexOf(guess), 1, guess + "  ");
            underscores.splice(chosenWord.lastIndexOf(guess), 1, guess + "  ");
            $("#currentWord").html(underscores); 
        }
        if (underscores.indexOf("__ ") === -1) {
            win();
        }
    };

    function lose(newRandNum) {
        // alert user
        alert("Ran out of guesses! Try again!");
        // Reset Guess number
        $("#guessNumber").html(guessNumber = 13);
        // Reset guesses
        $("#wrongGuesses").html("");
        // Reset the random word
        generateWord();
        console.log("new word: " + chosenWord);
        // Reset undersores
        underscores = [];
        generateUnderscores();
        console.log(underscores);
        // New hint!
        hint();
    };

    function win() {
        // add 1 to win count
        $("#winCount").html(++ wins);
        // alert user
        alert("You Won! The word was: " + '"' + chosenWord + '"');
        // Reset Guess number
        $("#guessNumber").html(guessNumber = 14);
        // Reset guesses
        $("#wrongGuesses").html("");
        // Reset the random word
        generateWord();
        console.log("new word: " + chosenWord);
        // Reset undersores
        underscores = [];
        generateUnderscores();
        console.log(underscores);
        // New hint!
        hint();
    };


});



