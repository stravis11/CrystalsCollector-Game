$(document).ready(function() {

//Gloabl variable

var wins = 0;
var losses = 0;
var totalScore = 0;
var crys1Num = 0;
var crys2Num = 0;
var crys3Num = 0;
var crys4Num = 0;


//Generate random number between 19 - 120
var random = Math.floor(Math.random() * 120) + 19;
console.log(random);
var targetNumb = random;

//Display random number in Number to guess field
$("#num-to-guess").append(targetNumb);

//Generate random numbers betwee 1 - 12 for crystals
var crys1Num = Math.floor(Math.random() * 12) + 1;
console.log(crys1Num);
var crys2Num = Math.floor(Math.random() * 12) + 1;
console.log(crys2Num);
var crys3Num = Math.floor(Math.random() * 12) + 1;
console.log(crys3Num);
var crys4Num = Math.floor(Math.random() * 12) + 1;
console.log(crys4Num);

//On click functions for when crystals are selected
$(".crystal1").on("click", function() {
totalScore = crys1Num;
$("#tscore").append(totalScore);
});

$(".crystal2").on("click", function() {
    totalScore = crys2Num;
    $("#tscore").append(totalScore);
    });

    $(".crystal3").on("click", function() {
        totalScore = crys3Num;
        $("#tscore").append(totalScore);
        });

        $(".crystal4").on("click", function() {
            totalScore = crys4Num;
            $("#tscore").append(totalScore);
            });

});
