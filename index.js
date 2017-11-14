var shitincoming = "",quitDate="";
var Data = localStorage.getItem("quitter-data");

startCount();

$( "#picker-container" ).submit(function( event ) {
  event.preventDefault();
  var quitDate = $( "input:first" ).val();
  //  alert(quitDate);
    localStorage.setItem("quitter-data",quitDate);
    location.reload();
  startCount();
});

$( "#relapsebtn" ).click(function() {
  localStorage.removeItem("quitter-data");
  location.reload();
});
function startCount(){
  if (Data != null) {
    var then = new Date(Data).getTime();
    var now =  new Date().getTime();
    var distance = then - now;
    distance = -distance;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var notsmoked = Math.floor((days * 20) + (hours * 0.8333333) + (minutes * 0.0138888888888889));
    console.log(notsmoked);
    $("#counter").html( days + "d " + hours + "h "
    + minutes + "m " + seconds + "s <br> You have not smoked: " + notsmoked + " Cigarettes <br> Saved: "+ notsmoked * 0.5 + "TL in the process.");
    whoFacts(days,hours,minutes,seconds);
  } else{
     $("#picker-container").html("<form class='form-control' ><div class=''><input type='datetime-local' class='form-control'></div><button type='submit' class='btn btn-large btn-primary form-control' name='button'>Done</button></form>");
  }
}

// PROMTS * WHO FACTS
function whoFacts(Days,Hours,Minutes,Seconds){
  if (Hours > 0 || Minutes > 20) {
    $("#facts").html("<p><b>20m: </b>Your heart rate have returned to normal.</p>");
    }
  if (Hours > 2 || Days > 1) {
      $("#facts").append("<p><b>2h: </b>Your heart rate and blood pressure have returned to almost completely normal levels, and you can feel the warmth in your fingertips!</p>");
    }
  if (Hours > 12 || Days > 1) {
    $("#facts").append("<p><b>12h: </b>Your blood oxygen levels raised to near normal levels.</p>");
  }
  if (Days > 1) {
    $("#facts").append("<p><b>24h: </b>You're 70% less likely to get an heart attack, phew.</p>");
  }
  if (Days > 3) {
    $("#facts").append("<p><b>3d: </b>Congratulations, you have depleted all the nicotine in your body.</p>");
  }
  if (Days > 14) {
    $("#facts").append("<p><b>2w: </b>Your lung capacity and circulation have regenerated and improved. This allows you to perform intense activities such as exercising, running, and various other physical activities that rely on endurance and stamina.</p>");
  }
  if (Days > 30) {
    $("#facts").append("<p><b>30d: </b>The regenerative process your lungs undergo include the repair of the cilia. This increases the lung function and performance, as well as reducing the risk of infection.</p>");
  }

}
