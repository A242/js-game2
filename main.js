var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var player = {
  x : 0,
  y : 100,
  velX : 0,
  velY : 0,
  sprite : document.getElementById("player"),
  update: function(){
    this.x += this.velX;
    this.y += this.velY;
  },
  render: function(){
    ctx.drawImage(this.sprite, this.x, this.y);
  }
};

var background = document.getElementById("background");
c.width = window.innerWidth;
c.height = window.innerHeight;
function animate(){
  ctx.drawImage(background, 0, 0, c.width, c.height);
  player.update();
  player.render();
  window.requestAnimationFrame(animate);
}

animate();

$(document).keydown(function(e){
  if (e.keyCode == 37) player.velX = -5;
  if (e.keyCode == 38) player.velY = -5;
  if (e.keyCode == 39) player.velX = 5;
  if (e.keyCode == 40) player.velY = 5;
  if (e.keyCode == 32) document.getElementById("audio").play();
});

$(document).keyup(function(e){
  if (e.keyCode == 37) player.velX = 0;
  if (e.keyCode == 38) player.velY = 0;
  if (e.keyCode == 39) player.velX = 0;
  if (e.keyCode == 40) player.velY = 0;
});
