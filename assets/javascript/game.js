

  var targetNumber;
  
  var counter = 0;

  var wins = 0;

  var losses = 0;

var numberOptionsRed = Math.floor(Math.random() * ((12-1)+1) + 1);
var numberOptionsBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
var numberOptionsPurple = Math.floor(Math.random() * ((12-1)+1) + 1);
var numberOptionsGreen = Math.floor(Math.random() * ((12-1)+1) + 1);

    //RED CRYSTAL
    var imageCrystalRed = $("<img>");

      imageCrystalRed.addClass("crystal-image-red");

      imageCrystalRed.attr("src", "assets/images/red-crystal.png");

      imageCrystalRed.attr("data-crystalvalue", numberOptionsRed);

      $("#crystals").append(imageCrystalRed);

    //BLUE CRYSTAL
    var imageCrystalBlue = $("<img>");

      imageCrystalBlue.addClass("crystal-image-blue");

      imageCrystalBlue.attr("src", "assets/images/blue-crystal.png");

      imageCrystalBlue.attr("data-crystalvalue", numberOptionsBlue);

      $("#crystals").append(imageCrystalBlue);

    //PURPLE CRYSTAL
    var imageCrystalPurple = $("<img>");

      imageCrystalPurple.addClass("crystal-image-purple");

      imageCrystalPurple.attr("src", "assets/images/purple-crystal.png");

      imageCrystalPurple.attr("data-crystalvalue", numberOptionsPurple);

      $("#crystals").append(imageCrystalPurple);

    //GREEN CRYSTAL
    var imageCrystalGreen = $("<img>");

      imageCrystalGreen.addClass("crystal-image-green");

      imageCrystalGreen.attr("src", "assets/images/green-crystal.png");

      imageCrystalGreen.attr("data-crystalvalue", numberOptionsGreen);

      $("#crystals").append(imageCrystalGreen);


$(document).ready(function() {

    $("#start").on("click", function() {

      var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);

        $("#number-to-guess").text(targetNumber);
        console.log("Your target number is..." + targetNumber);
      
      $("#yourScore").empty(counter = 0);

    });

    //$("#reset").on("click", function() {

        //$("#number-to-guess").empty();

        //$("#yourScore").empty(counter = 0);
    //});

    $(".crystal-image-red").on("click", function(red) {
      
      var crystalValueRed = ($(this).attr("data-crystalvalue"));
      crystalValueRed = parseInt(crystalValueRed);
      
      counter += crystalValueRed;
      console.log("Add red: " + crystalValueRed);

       $("#yourScore").text(counter);
        console.log("New score: " + counter);

      if (counter === targetNumber) {
        wins++;
        $("#winScore").text(wins);
        console.log("You win");
      }

      else if (counter >= targetNumber) {
        losses++;
        $("#lossScore").text(losses);
        console.log("You lose");
      }

    }); 

    $(".crystal-image-blue").on("click", function(blue) {
      
      var crystalValueBlue = ($(this).attr("data-crystalvalue"));
      crystalValueBlue = parseInt(crystalValueBlue);
      
      counter += crystalValueBlue;
      console.log("Add blue: " + crystalValueBlue);

       $("#yourScore").text(counter);
        console.log("New score: " + counter);

      if (counter === targetNumber) {
        wins++;
        $("#winScore").text(wins);
        console.log("You win");
      }

      else if (counter >= targetNumber) {
        losses++;
        $("#lossScore").text(losses);
        console.log("You lose");
      }

    });

    $(".crystal-image-purple").on("click", function(purple) {
      
      var crystalValuePurple = ($(this).attr("data-crystalvalue"));
      crystalValuePurple = parseInt(crystalValuePurple);
      
      counter += crystalValuePurple;
      console.log("Add purple: " + crystalValuePurple);

       $("#yourScore").text(counter);
        console.log("New score: " + counter);

      if (counter === targetNumber) {
        wins++;
        $("#winScore").text(wins);
        console.log("You win");
      }

      else if (counter >= targetNumber) {
        losses++;
        $("#lossScore").text(losses);
        console.log("You lose");
      }

    });

    $(".crystal-image-green").on("click", function(green) {
      
      var crystalValueGreen = ($(this).attr("data-crystalvalue"));
      crystalValueGreen = parseInt(crystalValueGreen);
      
      counter += crystalValueGreen;
      console.log("Add green: " + crystalValueGreen);

       $("#yourScore").text(counter);
        console.log("New score: " + counter);

      if (counter === targetNumber) {
        wins++;
        $("#winScore").text(wins);
        console.log("You win");
      }

      else if (counter >= targetNumber) {
        losses++;
        $("#lossScore").text(losses);
        console.log("You lose");
      }

    });

 });

