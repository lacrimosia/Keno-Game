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

	this.maxBet = function(maxBet){
		this.maxBet = maxBet;
	};

	this.upBet = function(){
		return this.total-=1;
	};

	this.downBet = function(){
		return this.total+=1;
	};

}

var game = new keno.game(0);

// init
$("#denom").text(game.up);
$("#max").text(game.maxBet);
$("#total").text(game.total);
game.Values(game.kenoNum);
game.maxBet();


$('#up').click(function(){
	game.goUp();
	$("#denom").text(game.up);
	$("#bet_text").text(game.up);
	$("#total").text(game.upBet());
});

$('#down').click(function(){
	game.goDown();
	$("#denom").text(game.up);
	$("#bet_text").text(game.up);
	$("#total").text(game.downBet());
});

$('#max').click(function(){
	game.maxBet();
	$("#bet_text").text(game.maxBet);
});



});
