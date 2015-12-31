/*Modern Keno Game 2.0
Developed By Shatilla Prayer
Copyright 2014-2015
*/

$(function(){

var keno = keno || {};

keno.game = function(up){
	this.up = up;                //$1 bet
	this.maxBet = 30;           //max bet of $30
	this.total = 1000;          //total amount of casino cash
	this.kenoNum = [];          //array of all keno numbers
	this.ranNum = [];           //random generated array
	this.newNum = [];           //chosen numbers that user picks
	this.randomPicks = [];      //random picks will be stored here
	this.win = [];              //winning keno numbers
	this.count = 0;             //counts the number of times user picks a number
	this.chosenBet = false;        // chosen bet

	this.goUp = function(){
	  	return this.up += 1;
	};

	this.goDown = function(){
			return this.up -= 1;
	};

	this.Values = function(num1){
		//keno numbers pushed dynamically into array
	for (var m=0; m<81; m++){
		num1.push(m);     //this loop pushes the 80 numbers inside the array
	for(j=m; this.j<num1.length; j++){
	     //this loop takes those numbers and inserts them into html divs for display
	     console.log("j", j);
		$('#numbers').append('<div class="' + num1[j] + '" id="' + num1[j] + '" name="box">' + num1[j] +'</div>');			
		var value = $('#'+num1[j]).html();
		}
  	  }
	};

	this.maxed = function(){
		var newTotal = this.total - this.maxBet;
		return newTotal;
	};

	this.upBet = function(){
		return this.total-=1;
	};

	this.downBet = function(){
		return this.total+=1;
	};

	this.erase = function(){
		
	};

}

var game = new keno.game(0);

// init
$("#denom").text(game.up);
$("#max").text(game.maxBet);
$("#total").text(game.total);
game.Values(game.kenoNum);
// game.maxBet();


$('#up').click(function(){
	$("#denom").text(game.goUp());
	$("#total").text(game.upBet());
});

$('#down').click(function(){
	$("#denom").text(game.goDown());
	$("#total").text(game.downBet());
});

$('#max').click(function(){
	$("#denom").text(game.maxBet);
	$("#total").text(game.maxed());
});

$("#clear").click(function(){
	
});


});
