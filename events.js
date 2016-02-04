// all events and calls are in this file
$(function() {
  // our game instance
  var game = new keno.game(1);
  // init Values
  $("#denom").text(game.up);
  $("#max").text(game.maxBet);
  $("#total").text(game.total);
  // load all the keno numbers init
   game.Values(0,81,'#numbers');
  $('.nums').click(function() {
    var that = this;
    game.number++;
    if (game.number <= 7) {
      // dynamic pay changes
      game.pays(game.number);
      game.addChosenNum(this.id, game.number);
      $(that).toggleClass("chosenText");
      $("#chosen").html(game.newNum.join(", "));
      // console.log("number", game.number);
    }
    if (!$(that).hasClass("chosenText")) {
      game.removeChosenNum(this.id);
    }
  });
  $('#up').click(function() {
    $("#denom").text(game.goUp());
    $("#total").text(game.upBet());
  });
  $('#down').click(function() {
    $("#denom").text(game.goDown());
    $("#total").text(game.downBet());
  });
  $('#max').click(function() {
    $("#denom").text(game.maxBet);
    $("#total").text(game.maxed());
  });
  $("#clear").click(function() {
  });
	// play button
  $("#spin").click(function() {
    // winning numbers
    $("#winner").append(game.winningNumbers());
  });
  // show our jackpot
  var theJackpot = setInterval(function() {
    times()
  }, 500);
  var times = function() {
    $('.jacks').text("$" + game.jackpot++);
  }
});
