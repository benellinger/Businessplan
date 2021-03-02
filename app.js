var SubTitle = [
    "Wer oder was ist das Team Service",
    "2018 - Ein Wüstenjahr in Zahlen (bitte auf die Linien klicen)",
    "Umsätze des Team Service in 2018",
    "Aufwände des Team Service in 2018",
    "Projekte 2018 und 2019"];

var test = function(index) {
    console.log("button pressed");
    let titelFolie = document.getElementById('folie');
    folie.innerHTML = SubTitle[index];
}

var changePage = function(index) {
  window.location = locations[index];
}

var insertImage = function() {
  var elem = document.getElementById('chart');
  var newElem = document.createElement('img');
  newElem.src = "rvg.png";
  newElem.id = "myAnimation";
  elem.appendChild(newElem);
  console.log(elem);
  //<div id ="myAnimation"><img src="rvg.png"></div>
};

var myMove = function() {
  //insert image on page
  var elem = document.getElementById("chart");
  var pic = document.createElement('img');
  pic.src = "rvg.png";
  pic.id = "avicii";
  elem.appendChild(pic);

  // get animation to pic
  animate = document.getElementById('avicii');
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 3.15) {
      clearInterval(id);
    } else {
      pos+=.05;
      animate.style.top = Math.cos(pos) *100+ 760 + "px";
      animate.style.left = Math.sin(pos) *100+ 360 + "px";
    }
  }
}
// Vertriebsprojekte,Vertrieb,16.9
// Kunden ohne Vertriebsprojekte,Vertrieb,8.6
// Pre-Sales/Verkaufsfoerderung,Vertrieb,5.6
// Vertrieb,Team S&S,31.3
