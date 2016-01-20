// all events for the game are in this file

$(function(){

// our game instance
var game = new keno.game(1);

// init
$("#denom").text(game.up);
$("#max").text(game.maxBet);
$("#total").text(game.total);


// testing our game values
game.Values();

$('.nums').click(function(){
	var that = this;
	game.number++;

	if(game.number <=7){
		// dynamic pay changes
		game.pays(game.number);
		game.addChosenNum(this.id, game.number);
		$(that).toggleClass("chosenText");
		$("#chosen").html(game.newNum.join(", "));
		console.log("number", game.number);
	}

	if(!$(that).hasClass("chosenText")){
		game.removeChosenNum(this.id);
	}
});

// winning numbers
$("#winner").html(game.winningNumbers());

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
	game.testing();
//	$("#denom").text(game.reset());
});

});
