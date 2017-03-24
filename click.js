//declare samecolor() here
function samecolor(){
  let newcolor = "#FFA500";
  let div = document.querySelectorAll("#samecolor div");
  for(let c = 0;c<div.length;c++){
  div[c].style.backgroundColor = newcolor;
  div[c].style.opacity = 0.25*c;
  }
}
//declare diffcolor() here
function diffcolor(){
  let colors = "#FFA500";
  let complement = "‎#007FFF";
  let div = document.querySelectorAll("#diffcolor div");
  for(let c = 0;c<div.length;c++){
    if(c%2 == 0){
      div[c].style.backgroundColor = "#FFA500";
    }
    else{
      div[c].style.backgroundColor = "#007FFF";
    }
  }
}
