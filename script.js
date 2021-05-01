


var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = (x+10) + "px";
  cursor.style.top = (y+10) + "px";
})
