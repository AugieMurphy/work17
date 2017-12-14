var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
  };

var furthestPoint = distance(targetX, targetY, 0, 0);

var findIt = function(e) {
  var dist = distance(targetX, targetY, e.clientX, e.clientY);
    var val = Math.floor((dist/furthestPoint)*255);
    document.body.style.backgroundColor = "rgb(" + val + "," + val + "," + val + ")";
    found(dist)
};

var found = function(distance) {
    if (distance < 25){
	document.body.style.backgroundColor = "purple";
    }
}


box.addEventListener("mousemove", findIt);
