var dial_str = "";

function dialbutton(char_id) {
  dial_str += char_id;
  document.getElementById("dial_id").innerHTML = dial_str;
}
function clear(){
  var dial_str = "";
  document.getElementById("dial_id").innerHTML = dial_str;
}
function hide_yo_tabs(id) {
  if(id == 'Dialer'){
      var x = document.getElementById("Dialer");
      var y = document.getElementById("CL");
      var z = document.getElementById("AC");
      var gp = document.getElementById("GP");
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      gp.style.display = "none"
  }
  if(id == 'CL'){
      var x = document.getElementById("Dialer");
      var y = document.getElementById("CL");
      var z = document.getElementById("AC");
      var gp = document.getElementById("GP");
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      gp.style.display = "none"
  }
  if(id == 'AC'){
      var x = document.getElementById("Dialer");
      var y = document.getElementById("CL");
      var z = document.getElementById("AC");
      var gp = document.getElementById("GP");
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      gp.style.display = "none"
  }
  if(id == 'GP'){
      var x = document.getElementById("Dialer");
      var y = document.getElementById("CL");
      var z = document.getElementById("AC");
      var gp = document.getElementById("GP");
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      gp.style.display = "block"
  }
}
