//Footer
var d = new Date();
document.getElementById("datum").innerHTML = "" + d.toLocaleDateString();

//Omiljeni film
function myFunction() {
    document.getElementById("panel").style.display = "block";
  }

  

  // Rođendanski poklon
var countDownDate = new Date("Jan 7, 2021 08:00:15").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("odbrojavanje").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("odbrojavanje").innerHTML = "SRETAN ROĐENDAN";
  }
}, 1000);


