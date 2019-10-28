
var values = ["ace", "2","3","4","5","6","7","8","9","10", "jack", "queen", "king" ];
var suites = ["spades", "diamonds", "clubs", "hearts"];
var string = " of ";


$(document).ready(function(){

  suites.forEach(function(suite) {
    values.forEach(function(value) {
      console.log(value, " of ", suite);
      $("#listDump").prepend("<li>" + value + " of " + suite + "</li>");
    });
  });
});
