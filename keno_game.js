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
	this.number = 0;
	this.oneMatch = 3;        // these are the values that determine the pays.
	this.twoMatch = 5;
	this.threeMatch = 10;
	this.fourMatch = 25;
	this.fiveMatch = 250;
	this.sixMatch = 2500;
	this.jackpot = 75000;
	this.sevenMatch = this.jackpot;

	this.goUp = function(){
	  	return this.up += 1;
	};

	this.goDown = function(){
			return this.up -= 1;
	};

	this.Values = function(){
		//keno numbers pushed dynamically into array
	for (var m=0; m<81; m++){
		this.kenoNum.push(m);     //this loop pushes the 80 numbers inside the array
	for(j=m; j<this.kenoNum.length; j++){
	     //this loop takes those numbers and inserts them into html divs for display
	    // console.log("j", j);
		$('#numbers').append('<div class="nums ' + this.kenoNum[j] + '" id="' + this.kenoNum[j] + '" name="box">' + this.kenoNum[j] +'</div>');
		var value = $('#'+this.kenoNum[j]).html();
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

	this.reset = function(){
		return this.up = 0;
	};

	this.addChosenNum = function(chosenNums, count){
		if(count <= 7){
			this.newNum.push(chosenNums);
  	//	console.log("counting value", count);
		//	console.log("value of a array", this.newNum.length);
 		return this.newNum;
		}
	};

	this.pays = function(numAmount){
	  var gameNum = this.up;
		var one_match = gameNum*(this.oneMatch*numAmount);
		var two_match = gameNum*(this.twoMatch*numAmount);
		var three_match = gameNum*(this.threeMatch*numAmount);
		var four_match = gameNum*(this.fourMatch*numAmount);
		var five_match = gameNum*(this.fiveMatch*numAmount);
		var six_match = gameNum*(this.sixMatch*numAmount);
		var seven_match = gameNum*(this.sevenMatch*numAmount);
     console.log("this.up", gameNum);
    var payAmount = [one_match, two_match, three_match, four_match, five_match, six_match, seven_match];

		$("#one").html("$"+payAmount[0]);
		$("#two").html("$"+payAmount[1]);
		$("#three").html("$"+payAmount[2]);
		$("#four").html("$"+payAmount[3]);
		$("#five").html("$"+payAmount[4]);
		$("#six").html("$"+payAmount[5]);
		$("#seven").html("$"+payAmount[6]);

		console.log("pay Amount", payAmount[0]);
	};

	this.removeChosenNum = function(chosenNums){
	for(var x=0; x<this.newNum.length; x++){
		var getNums = this.newNum.indexOf(x);
		if(this.newNum[x] === chosenNums) {
						getNums.splice(x, 1);
						console.log("getNUms", getNums);
				}
			return getNums;
	 }
	};

}

var game = new keno.game(1);

// init
$("#denom").text(game.up);
$("#max").text(game.maxBet);
$("#total").text(game.total);

game.Values();

$('.nums').click(function(){
	var that = this;
	game.number++;

	if(game.number <=7){
		// dynamic pay changes
		game.pays(game.number);

		game.addChosenNum(this.id, game.number);
		$(that).toggleClass("chosenText");
		$("#chosen").html(game.newNum+",  ");
		console.log("number", game.number);
	}

	if(!$(that).hasClass("chosenText")){
		game.removeChosenNum(this.id);
	}
});


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

$("#spin").click(function(){
	// run chosen numbers
	// subtract from total
	$("#denom").text(game.reset());
});

});
