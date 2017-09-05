$( document ).ready(function(){
  
  var targetNumber=Math.floor(Math.random() * ((120-19)+1) + 19);

    $("#number-to-guess").text(targetNumber);
    console.log("Your target number is..." + targetNumber);
  

  var numberOptionsRed= Math.floor(Math.random() * ((12-1)+1) + 1);
  var numberOptionsBlue= Math.floor(Math.random() * ((12-1)+1) + 1);
  var numberOptionsPurple= Math.floor(Math.random() * ((12-1)+1) + 1);
  var numberOptionsGreen= Math.floor(Math.random() * ((12-1)+1) + 1);
 

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

  $("#winScore").text(wins);
  $("#lossScore").text(losses);


  function newGame(){
        targetNumber=Math.floor(Math.random() * 101+19);
        console.log("Your target number is..." + targetNumber);
        
        $("#number-to-guess").text(targetNumber);
        
        numberOptionsRed = Math.floor(Math.random() * ((12-1)+1) + 1);
        numberOptionsBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
        numberOptionsPurple = Math.floor(Math.random() * ((12-1)+1) + 1);
        numberOptionsGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
        
        userTotal= 0;
        $("#yourScore").text(userTotal);
  } 

  function win(){
    console.log("You won!");
    wins++; 
    $("#winScore").text(wins);
    newGame();
    alert("You win!");
  }

  function lose(){
    console.log ("You lose!");
    losses++;
    $("#lossScore").text(losses);
    newGame();
    alert("Sorry you lose...");
  }

  // RED CRYSTAL
  $(".crystal-image-red").on ("click", function(){
    userTotal = userTotal + numberOptionsRed;
    console.log("Red crystal value: " + numberOptionsRed)
    console.log("Your Current Score: " + userTotal);
    $("#yourScore").text(userTotal); 
        if (userTotal == targetNumber){
          win();
        }
        else if ( userTotal > targetNumber){
          lose();
        }   
  })  

  // BLUE CRYSTAL
  $(".crystal-image-blue").on ("click", function(){
    userTotal = userTotal + numberOptionsBlue;
    console.log("Blue crystal value: " + numberOptionsBlue)
    console.log("Your Current Score: " + userTotal);
    $("#yourScore").text(userTotal); 
        if (userTotal == targetNumber){
          win();
        }
        else if ( userTotal > targetNumber){
          lose();
        } 
  })  

  //PURPLE CRYSTAL
  $(".crystal-image-purple").on ("click", function(){
    userTotal = userTotal + numberOptionsPurple;
    console.log("Purple crystal value: " + numberOptionsPurple)
    console.log("Your Current Score: " + userTotal);
    $("#yourScore").text(userTotal);
          if (userTotal == targetNumber){
          win();
        }
        else if ( userTotal > targetNumber){
          lose();
        } 
  })  

  // GREEN CRYSTAL
  $(".crystal-image-green").on ("click", function(){
    userTotal = userTotal + numberOptionsGreen;
    console.log("Green crystal value: " + numberOptionsGreen)
    console.log("Your Current Score: " + userTotal);
    $("#yourScore").text(userTotal); 
      
          if (userTotal == targetNumber){
          win();
        }
        else if ( userTotal > targetNumber){
          lose();
        }
  });   
}); 