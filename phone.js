function myFunction(char_id) {
    document.getElementById("dial_id").innerHTML = "tying to implement keydown in js";
}
function hide_yo_tabs(id) {
  if(id == 'Dialer'){
      var x = document.getElementById("Dialer");
      var y = document.getElementById("CL");
      var z = document.getElementById("AC");
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
  }
  if(id == 'CL'){
      var x = document.getElementById("Dialer");
      var y = document.getElementById("CL");
      var z = document.getElementById("AC");
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
  }
  if(id == 'AC'){
      var x = document.getElementById("Dialer");
      var y = document.getElementById("CL");
      var z = document.getElementById("AC");
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
  }
}
