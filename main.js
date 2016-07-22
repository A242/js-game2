var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var background = document.getElementById("background");
c.width = window.innerWidth;
c.height = window.innerHeight;
function animate(){
  // if (player.dead = true) {
  //   alert("You suck!");
  //   window.location.href="index.html";
  // }
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, 500, 500);
  ctx.drawImage(background, 0, 0, c.width, c.height);
  player.update();
  player.render();
  enemy.update();
  enemy.render();
  window.requestAnimationFrame(animate);
}

animate();
