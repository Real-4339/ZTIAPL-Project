var keys = {};
var num = 0;
var premena = 0;
scene = []
var arrow = []

function Char() {
  this.x = 550;
  this.y = 470;
  this.lifes = 3
}

Char.prototype = {
    move: function(dt){
      if (keys[37]){
          premena = 1;
        this.x -= 5;
        num++;
        if(num >= 4)
        num = 1;
      } 
      
      if (keys[39]){
          premena = 2;
        this.x += 5;
        num++;
        if(num >= 4)
        num = 1;
      }

      if (keys[32]){
        if(arrow.length == 0){
          let a = new Arrow(this.x, this.y)
          scene.push(a)
          arrow.push(a)
        }
      }
      
      if (this.x < 40) {
        this.x = 40
      }
      if (this.x > 1180) {
        this.x = 1180
      }
    }
    ,
  draw: function() {
      if(premena == 1){
        ctx.drawImage(Images.charWalkLeft, 16.5*num, 0, 16, 27, this.x, this.y, 30, 41);
      }
      if(premena == 2){
        ctx.drawImage(Images.charWalkRight, 16.5*num, 0, 16, 27, this.x, this.y, 30, 41);
      }
       
      else if (premena == 0) {
        ctx.drawImage(Images.charStand, 0, 0, 16, 27, this.x, this.y, 30, 41);
      }
    
    premena = 0;
  }
}
// Handle keyboard events
window.onkeydown = function(event) {
    keys[event.keyCode] = true;
    //console.log(keys);
  };
  window.onkeyup = function(event) {
    keys[event.keyCode] = false;
  };