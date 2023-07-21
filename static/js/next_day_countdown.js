var countDownDate1 = new Date("July 22, 2023 22:00:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now;
    
  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown_for_next_day").innerHTML = hours1 + " Hours " + minutes1 + " Minutes " + 
  seconds1 + " Seconds"; 
    
  // If the count down is over, write some text 
  if (minutes1 < 0) {
    clearInterval(x);
    document.getElementById("countdown_for_next_day").innerHTML = "Will be out shortly";
  }
}, 1000);
