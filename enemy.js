var enemy = {
  x : 1200,
  y : 780,
  velX: 0,
  velY: 0,
  sprites : [document.getElementById("enemyf1"),
            document.getElementById("enemyf2"),
            document.getElementById("enemyf3"),
            document.getElementById("enemyf4"),
            document.getElementById("enemyf5"),
            document.getElementById("enemyf6")
          ],
  spriteNum : 0,
  ticks: 0,
  dir : "right",
  update : function() {
    this.ticks++;
    if (this.ticks % 10 == 0) {
      this.spriteNum++;
      if (this.spriteNum > 5){
        this.spriteNum = 0;
      }
    }
    var a = (this.x-player.x)*(this.x-player.x);
    var b = (this.y-player.y)*(this.y-player.y);
    var dist = Math.sqrt(a+b);
    if (dist < 10) {
      player.dead = true;
    }
    if (this.x < player.x) {
      this.x = this.x + 3;
    }
    if (this.x > player.x) {
      this.x = this.x - 3;
    }
    if (this.y < player.y) {
      this.y = this.y + 3;
    }
    if (this.y > player.y) {
      this.y = this.y - 3;
    }
   },
  render : function() {
    if (this.dir == "left"){
      flipCtx(ctx, this);
    }
    ctx.drawImage(this.sprites[this.spriteNum], this.x, this.y, 100, 100);
    if (this.dir == "left") {
      restoreCtx(ctx);
      }
    }
};

function flipCtx(ctx) {
  ctx.save();
  ctx.translate(player.x + 50, 0);
  ctx.scale(-1,1);
  ctx.translate(-player.x-50,0);
}
function restoreCtx() {
  ctx.restore();
}
