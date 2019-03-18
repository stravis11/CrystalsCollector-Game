$(document).ready(function () {

    //Gloabl variable

    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;


    //Generate random number between 19 - 120 for number to guess
    var randomNum = Math.floor(Math.random() * 120) + 19;
    console.log(randomNum);


    //Display random number in Number to guess field
    $("#num-to-guess").html(randomNum);

    //Generate random numbers betwee 1 - 12 for crystals
    var crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log(crystalOne);
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log(crystalTwo);
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log(crystalThree);
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log(crystalFour);

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

    //Updating crystal values and total score function
    function update(crystal) {

        //Add totalScore and crystal parameters together
        totalScore += crystal;
        //Remove previous entries
        $("#totalScore").empty();
        //Add player's totalScore value
        $("#totalScore").append(totalScore);

        console.log(totalScore);



        //Loss condition
        if (totalScore > randomNum) {
            //Increment losses by 1
            losses++;
            //Display losses on page
            $("#losses").html(losses);
        }

    };

        //Rest game function
        function resetGame() {

            //Generate a new total score number
            randomNum = Math.floor(Math.random() * 120) + 19;

            //Genreate new random numbers for crystals
            crys1Num = Math.floor(Math.random() * 12) + 1;
            crys2Num = Math.floor(Math.random() * 12) + 1;
            crys3Num = Math.floor(Math.random() * 12) + 1;
            crys4Num = Math.floor(Math.random() * 12) + 1;

            //Reset total score back to zero
            totalScore = 0;
            $("#totalScore").html(totalScore);
        };


    });
