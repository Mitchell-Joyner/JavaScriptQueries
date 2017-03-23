//declare samecolor() here
function samecolor(){
  let newcolor = "#FFA500";
  let div = querySelectorAll("#samecolor div");
  for(let c = 0;c<div.length;c++){
  div[c]style.backgroundColor = "#FFA500";
  div[c]style.opacity += .25*[c];
  }
}
//declare diffcolor() here
function diffcolor(){
  let color = "#FFA500";
  let complement = "#007FFF";
  let div = querySelectorAll("#diffcolor div");
  for(let c = 0;c<div.length;c++){

  }
}
