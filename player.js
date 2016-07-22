var player = {
  x : 700,
  y : 780,
  velX : 0,
  velY : 0,
  sprites : [document.getElementById("playerf1"),
            document.getElementById("playerf2"),
            document.getElementById("playerf3"),
            document.getElementById("playerf4"),
            document.getElementById("playerf5"),
            document.getElementById("playerf6")
],
ticks : 0,
spriteNum : 0,
dir : "right",
update: function(){
  this.ticks++;
  this.x += this.velX;
  this.y += this.velY;
  if (this.velX != 0 || this.velY != 0)
    if (this.ticks % 10 === 0)
      this.spriteNum = this.spriteNum +1;
  if (this.spriteNum > 4) this.spriteNum = 0;
},
render: function(){
  if (this.dir == "left"){
    flipCtx(ctx, this);
  }
  ctx.drawImage(this.sprites[this.spriteNum], this.x, this.y);
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
