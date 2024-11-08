var dest = new Date("Feb 28, 2025,").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var diff = dest - now;

   
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   

    document.getElementById("demo").innerHTML = days + "d, " + hours + "hrs: " + minutes + "m: ";
}, 1000);



