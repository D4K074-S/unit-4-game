$(document).ready(function(){
    //    **   The Number   **
    //Generate random number between 19 - 120
    $(function startGame (){
        var numberToGuess = Math.round(Math.random());
        $("#randomNum").text(numberToGuess);
    

        //    **   The Crystals   **
        //Create a variable for each Crystal
        //Give crystal new value everytime new number is generated
        var firstCrystal = Math.floor((Math.random() * 10) + 3 );
        var secondCrystal = Math.floor((Math.random() * 10) + 3);
        var thirdCrystal = Math.floor((Math.random() * 10) + 3);
        var fourthCrystal = Math.floor((Math.random() * 10) + 3);

        var currentNum = 0;

        //    **   The Methods   **
        //When a crystal is clicked display value
        $("#crystal1").on("click", function (currentNum){
            $(".currentNum").replace(firstCrystal + currentNum);

        });
        $("#crystal2").on("click", function(currentNum){
            $(".currentNum").html(secondCrystal + currentNum);
        });
        $("#crystal3").on("click", function(currentNum){
            $(".currentNum").html(thirdCrystal + currentNum);
        });
        $("#crystal4").on("click", function(currentNum){
            $(".currentNum").html(fourthCrystal + currentNum);
        });
        //When other crystals clicked, add value to displayed value
        //Add until ===
        //If displayed value === generated number you win!
        //Win counter ++
        //If displayed value > generated number you lose
        //Lose counter ++
        //New number generated after each win/lose
        /* Generate random crystal number between 1-12 for each crystal
        every time a new number is generated. */
    });  
});

