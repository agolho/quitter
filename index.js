var shitincoming = "",quitDate="";
var Data = localStorage.getItem("quitter-data");

$( "#picker" ).submit(function( event ) {
  event.preventDefault();
  var quitDate = $( "input:first" ).val();
    alert(quitDate);
    localStorage.setItem("quitter-data",quitDate);
});

if (Data != null) {
  var then = new Date(Data).getTime();
  var now =  new Date().getTime();
  var distance = then - now;
  distance = -distance;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#counter").html( days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ");
} else{
 //  $("#picker-container").html("<form id='picker' class='form-control' action='index.html' method='post'><div class=''><input type='datetime-local' class='form-control'></div><button type='submit' class='btn btn-large btn-primary' name='button'>Done</button></form>");
}

if (hours > 0 || minutes > 20) {
  $("#facts").html("<p><b>20m: </b>Your heart rate have returned to normal.</p>");
  if (hours > 2 || days > 1) {
    $("#facts").append("<p><b>2h: </b>Your heart rate and blood pressure have returned to almost completely normal levels, and you can feel the warmth in your fingertips!</p>");
  }
}
