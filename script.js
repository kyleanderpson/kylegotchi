


var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = (x+10) + "px";
  cursor.style.top = (y+10) + "px";
})


document.getElementById("eat").addEventListener("click", function(){
  document.getElementById("eatVideo").style.display = "flex";
  document.getElementById("drinkVideo").style.display = "none";
  document.getElementById("sleepVideo").style.display = "none";
  document.getElementById("poopVideo").style.display = "none";
  document.getElementById("peeVideo").style.display = "none";
  document.getElementById("playVideo").style.display = "none";
 });

 document.getElementById("drink").addEventListener("click", function(){
   document.getElementById("eatVideo").style.display = "none";
   document.getElementById("drinkVideo").style.display = "flex";
   document.getElementById("sleepVideo").style.display = "none";
   document.getElementById("poopVideo").style.display = "none";
   document.getElementById("peeVideo").style.display = "none";
   document.getElementById("playVideo").style.display = "none";
  });

  document.getElementById("sleep").addEventListener("click", function(){
    document.getElementById("eatVideo").style.display = "none";
    document.getElementById("drinkVideo").style.display = "none";
    document.getElementById("sleepVideo").style.display = "flex";
    document.getElementById("poopVideo").style.display = "none";
    document.getElementById("peeVideo").style.display = "none";
    document.getElementById("playVideo").style.display = "none";
   });

   document.getElementById("poop").addEventListener("click", function(){
     document.getElementById("eatVideo").style.display = "none";
     document.getElementById("drinkVideo").style.display = "none";
     document.getElementById("sleepVideo").style.display = "none";
     document.getElementById("poopVideo").style.display = "flex";
     document.getElementById("peeVideo").style.display = "none";
     document.getElementById("playVideo").style.display = "none";
    });

    document.getElementById("pee").addEventListener("click", function(){
      document.getElementById("eatVideo").style.display = "none";
      document.getElementById("drinkVideo").style.display = "none";
      document.getElementById("sleepVideo").style.display = "none";
      document.getElementById("poopVideo").style.display = "none";
      document.getElementById("peeVideo").style.display = "flex";
      document.getElementById("playVideo").style.display = "none";
     });

     document.getElementById("play").addEventListener("click", function(){
       document.getElementById("eatVideo").style.display = "none";
       document.getElementById("drinkVideo").style.display = "none";
       document.getElementById("sleepVideo").style.display = "none";
       document.getElementById("poopVideo").style.display = "none";
       document.getElementById("peeVideo").style.display = "none";
       document.getElementById("playVideo").style.display = "flex";
      });
