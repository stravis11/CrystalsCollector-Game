$(document).ready(function () {

    //Gloabl variables

    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    
    // Gets Link for music
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/audio/music.mp3");

    // Play/Pause button for music
    $(".music-button").on("click", function() {
        audioElement.play();
      });
      $(".pause-button").on("click", function() {
        audioElement.pause();
      });

    //Generate random number between 19 - 120
    var randomNum = Math.floor((Math.random() * (120 - 19)) + 19);

    //Display random number and user score on page
    $("#num-to-guess").html(randomNum);
    $("#userScore").html(totalScore);

    //Generate random numbers betwee 1 - 12 for crystals
    var crystalOne = Math.floor(Math.random() * 12) + 1;
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour = Math.floor(Math.random() * 12) + 1;

    //On click functions for when crystals are selected
    $(".crystal1").on("click", function () {
        update(crystalOne);
    });

    $(".crystal2").on("click", function () {
        update(crystalTwo);
    });

    $(".crystal3").on("click", function () {
        update(crystalThree)
    });

    $(".crystal4").on("click", function () {
        update(crystalFour);
    });

    //Updating crystal values and win/loss conditions
    function update(crystal) {

        //Add totalScore and crystal parameters together
        totalScore += crystal;
        //Remove previous entries
        $("#userScore").empty();
        //Add player's totalScore value
        $("#userScore").html(totalScore);

        //Loss condition
        if (totalScore > randomNum) {
            //Increment losses by 1
            losses++;
            //Update losses on page
            $("#losses").html(losses);
            //Reset game
            resetGame();
        }

        //Win condition
        else if (totalScore === randomNum) {
            //Increment wins by 1
            wins++;
            //Update wins on page
            $("#wins").html(wins);
            //Reset game
            resetGame();
        }

    };

    //Reset game function

    function resetGame() {
        //Generate a new total score number
        randomNum = Math.floor((Math.random() * (120 - 19)) + 19);
        $("#num-to-guess").html(randomNum);
        
        //Genreate new random numbers for crystals
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
       
        //Reset total score back to zero
        totalScore = 0;
        $("#userScore").html(totalScore);
    };

});
