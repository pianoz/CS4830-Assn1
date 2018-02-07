var dial_str = "";
var x0=0;
var x1=0;
var y0=0;
var y1=0;

function dialbutton(char_id) {
  dial_str += char_id;
  document.getElementById("dial_id").innerHTML = dial_str;
}

function clear(){
  var dial_str = "";
  document.getElementById("dial_id").innerHTML = dial_str;
}

function gestureWin(gesture_id) {
  if(gesture_id == 1){
      document.getElementById("gtext").innerHTML = "Mouse Down";
  }
  if(gesture_id == 2){
      document.getElementById("gtext").innerHTML = "Mouse Up";
  }
  if(gesture_id == 3){
      document.getElementById("gtext").innerHTML = "Swipe Left";
  }
  if(gesture_id == 4){
      document.getElementById("gtext").innerHTML = "Swipe Right";
  }
  if(gesture_id == 5){
      document.getElementById("gtext").innerHTML = "Swipe Up";
  }
  if(gesture_id == 6){
      document.getElementById("gtext").innerHTML = "Swipe Down";
  }
  else{
      document.getElementById("gtext").innerHTML = "Unidentified";
  }
}

function eventCalculator(){
  if (euclidianDist() < 3){
    gestureWin(2);
  }
  else{
    var direc = direction();
    if(direc == 10){
      gestureWin(4);
    }
    if(direc == 11){
      gestureWin(3);
    }
    if(direc == 01){
      gestureWin(6);
    }
    if(direc == 00){
      gestureWin(5);
    }
    else{
      gestureWin(9);
    }
  }
}

function euclidianDist(){
  return(Math.sqrt((Math.pow((x0-x1),2))+(Math.pow((y0-y1),2))));
}

function direction(){
  //vert vs horiz is first bit, 0=vert 1=horiz.
  //second bit is up/down (0/1) or right/left (0/1)
  var cardinal = Math.max((Math.abs(x0-x1),(Math.abs(y0-y1))))
  if (cardinal == Math.abs(x0-x1)){
    //displacement is largely horizontal
    if((x0-x1) > 0){
      //direction is left
      return 11;
    }
    else{
      return 10;
    }
  }
  if (cardinal == Math.abs(y0-y1)){
    //displacement is largely vertical
    if((y0-y1)>0){
      //direction is down
      return 01;
    }
    else{
      return 00;
    }
  }
}

function mouseDown(){
  gestureWin(1);
  y1=0;
  x1=0;
  x0=event.clientX;
  y0=event.clientY;
}
function mouseUp(){
  x1=event.clientX;
  y1=event.clientY;
  eventCalculator(x0,y0,x1,y1);
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
