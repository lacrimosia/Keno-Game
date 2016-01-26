/*Modern Keno Game 2.0
Developed By Shatilla Prayer
Copyright 2014-2015
*/

// This is the main file that handles all the functionality of the game
// This is where game features will appear

var keno = keno || {};

// game constructor
keno.game = function(up) {
  this.up = up; //$1 bet
  this.numMax = 80;     // maximum numbers
  this.maxBet = 30;     //max bet of $30
  this.total = 1000;    //total amount of casino cash
  this.kenoNum = [];    //array of all keno numbers
  this.ranNum = [];     //random generated array
  this.newNum = [];     //chosen numbers that user picks
  this.randomPicks = [];   //random picks will be stored here
  this.win = [];         //winning keno numbers
  this.count = 0;        //counts the number of times user picks a number
  this.chosenBet = false; // chosen bet
  this.number = 0;
  this.jackpot = 12000;
  this.sevenMatch = this.jackpot; // jackpot amount
}

//controls the up buttons
keno.game.prototype.goUp = function() {
  if (this.up >= 0 && this.up < 30) {
    return this.up += 1;
  }
};

// controls the down button
keno.game.prototype.goDown = function() {
  if (this.up > 0) {
    return this.up -= 1;
  }
};

// default values users will choose
keno.game.prototype.Values = function() {
  //keno numbers pushed dynamically into array
  for (var m = 0; m < 81; m++) {
    this.kenoNum.push(m); //this loop pushes the 80 numbers inside the array
    for (j = m; j < this.kenoNum.length; j++) {
      //this loop takes those numbers and inserts them into html divs for display
      // console.log("j", j);
      $('#numbers').append('<div class="nums ' + this.kenoNum[j] + '" id="' + this.kenoNum[j] + '" name="box">' + this.kenoNum[j] + '</div>');
      var value = $('#' + this.kenoNum[j]).html();
    }
  }
};

// Max Bet
keno.game.prototype.maxed = function() {
  var newTotal = this.total - this.maxBet;
  return newTotal;
};

// Increasing the Bet
keno.game.prototype.upBet = function() {
  return this.total -= 1;
};

// Decreasing the Bet
keno.game.prototype.downBet = function() {
  return this.total += 1;
};

// Reset the Bet
keno.game.prototype.reset = function() {
  return this.up = 0;
};

// Add chosen numbers to array
keno.game.prototype.addChosenNum = function(chosenNums, count) {
  if (count <= 7) {
    this.newNum.push(chosenNums);
    //	console.log("counting value", count);
    //	console.log("value of a array", this.newNum.length);
    return this.newNum;
  }
};


// Output the pay amounts
keno.game.prototype.pays = function(numAmount) {
  var gameNum = this.up;
  var pays = 1.00;
  var payAmounts = [];
  for(var x=0; x<8; x++){
  //  $("#p"+x).html("$" + matches);

   if(numAmount == x){
     var nums = numAmount *= 5;
     var matches = gameNum * (pays * nums);
     payAmounts.push(matches*x);
   }
  }
  console.log('pay Amounts', payAmounts);
  return payAmounts;
};

// Remove Chosen numbers from array
keno.game.prototype.removeChosenNum = function(chosenNums) {
  for (var x = 0; x < this.newNum.length; x++) {
    var getNums = this.newNum.indexOf(x);
    if (this.newNum[x] === chosenNums) {
      getNums.splice(x, 1);
      console.log("getNUms", getNums);
    }
    return getNums;
  }
};

// get the winning numbers to compare to user numbers
keno.game.prototype.winningNumbers = function() {
  for (var i = 0; i < 8; i++) {
       this.win.push(Math.floor((Math.random() * this.numMax) + i));
  }
  // return entire array with random values for winning numbers
  console.log(this.win);
  return this.win.join(", ");
};
