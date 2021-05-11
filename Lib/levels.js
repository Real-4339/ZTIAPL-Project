    var count = 55;
    var lips = 1250 - (3*70);
    pole = []
    
    
    var Levels = function(){
        // this.level = level;
    };
  
    Levels.LAST_LEVEL = 3;
  
    Levels.load = function(level){
  
      switch(level){
        case 1:
          this.levelOne();
          break;
        case 2:
          this.levelTwo();
          break;
        case 3:
          this.levelThree();
          break;
        default:
          return 10;
          break;
      }
    };
  
    Levels.levelOne = function(){
     ctx.drawImage(Images.level1BG, 0, 0, 1250, 550);
     ctx.drawImage(Images.wall, 0, 0, 40, 1250);
     ctx.drawImage(Images.wall, 1210, 0, 40, 1250);
     for(var i = 0; i < 19; i++){
      ctx.drawImage(Images.spikes, count, 0, 60, 60); 
      count = count + 60;
     };
     count = 55;
    //  var pattern = ctx.createPattern(Images.wall, "repeat");
    //  ctx.fillStyle = pattern;
    //  ctx.fillRect(0, 0, 40, 1250);
     var pattern = ctx.createPattern(Images.floor, "repeat");
     ctx.fillStyle = pattern;
     ctx.fillRect(0, 510, 1250, 50);
     for(var t = 0; t < pole[0].lifes; t++){
      ctx.drawImage(Images.life, lips, 50, 60, 60); 
      lips += 55;
     }
     lips = 1250 - (3*70);
    };
  
    Levels.levelTwo = function(){
      ctx.drawImage(Images.level2BG, 0, 0, 1250, 550);
      ctx.drawImage(Images.wall, 0, 0, 40, 1250);
     ctx.drawImage(Images.wall, 1210, 0, 40, 1250);
     for(var i = 0; i < 19; i++){
      ctx.drawImage(Images.spikes, count, 0, 60, 60); 
      count = count + 60;
     };
     count = 55;
     pattern = ctx.createPattern(Images.floor, "repeat");
     ctx.fillStyle = pattern;
     ctx.fillRect(0, 500, 1250, 50);
     for(var t = 0; t < pole[0].lifes; t++){
      ctx.drawImage(Images.life, lips, 50, 60, 60); 
      lips += 55;
     }
     lips = 1250 - (3*70);
    };
  
    Levels.levelThree = function(){
      ctx.drawImage(Images.level3BG, 0, 0, 1250, 550);
      ctx.drawImage(Images.wall, 0, 0, 40, 1250);
     ctx.drawImage(Images.wall, 1210, 0, 40, 1250);
     for(var i = 0; i < 19; i++){
      ctx.drawImage(Images.spikes, count, 0, 60, 60); 
      count = count + 60;
     };
     count = 55;
     pattern = ctx.createPattern(Images.floor, "repeat");
     ctx.fillStyle = pattern;
     ctx.fillRect(0, 500, 1250, 50);
     for(var t = 0; t < pole[0].lifes; t++){
      ctx.drawImage(Images.life, lips, 50, 60, 60); 
      lips += 55;
     }
     lips = 1250 - (3*70);
    };
    window.onload = function() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        
    };
//};
  