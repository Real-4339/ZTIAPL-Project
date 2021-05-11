
function Arrow(x, y) {
  this.x = x;
  this.y = y;
  this.dy = 1
  this.top = 0
}

Arrow.prototype = {
    move: function(dt){
    //Movement
    if(this.y < 60) {
    this.top = 1  
    }
    
    this.y -= 10
    },
    draw: function(){
        ctx.drawImage(Images.arrow, 0, 0, 4, 368, this.x, this.y, 4, 168);
    }
    //4 368
}

