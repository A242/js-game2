$(document).keydown(function(e){
  if (e.keyCode == 37) {
    player.dir = "right";
    player.velX = -5;
  }
  if (e.keyCode == 38) player.velY = -5;
  if (e.keyCode == 39) {
    player.dir = "left";
    player.velX = 5;
  }
  if (e.keyCode == 40) player.velY = 5;
});

$(document).keyup(function(e){
  if (e.keyCode == 37) player.velX = 0;
  if (e.keyCode == 38) player.velY = 0;
  if (e.keyCode == 39) player.velX = 0;
  if (e.keyCode == 40) player.velY = 0;
});
$(document).on("touchmove", function(e){
  //where the touch happens
  // e.touches[0].clientX, e.touches[0].clientY
  //comment
  e.preventDefault();
  var touchX = e.touches[0].clientX;
  var touchY = e.touches[0].clientY;
  if (touchX < player.x) {
    player.velX = -5;
    player.dir = "left";
  }
  if (touchX > player.x) {
    player.velX = 5;
    player.dir = "right";
  if (touchY < player.y) player.velY = -5;
  if (touchY > player.y) player.velY = 5;
});
$(document).on("touchend", function (e){
player.velX = 0;
player.velY = 0;
});
