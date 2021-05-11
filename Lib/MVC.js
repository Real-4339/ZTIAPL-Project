var req
var canvas
var ctx
var time


// Model
var scene = []
var level = 1;
arrow = []
var arr = []
var pole = []
var Button = function(text, text_x, text_y, color_2, x, y, width, height, color, shape) {
    this.x = x;
    this.y = y;
    this.shape = shape;
    this.color = color;
    this.color_2 = color_2;
    this.text_x = text_x;
    this.text_y = text_y;
    this.width = width;
    this.height = height;
    this.clicked = false;
    this.hovered = false;
    this.text = text;
  
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.lineJoin = this.shape;
    ctx.lineWidth = 12;
    ctx.stroke();
  
    ctx.fillStyle = this.color_2;
    ctx.font = '25px Georgia';
    ctx.fillText(this.text, this.text_x, this.text_y);
  }

// View
function draw() {
    // Update canvas
    if(Levels.load(level) == 10)
    {
        cancelAnimationFrame(req);
        cancelAnimationFrame(req);
        ctx.drawImage(Images.win, 0, 0, 1250, 550);
        $(".play_again").fadeIn(800);
        return req
    }
    

    // Render all objects in scene
    for (i in scene) {
      scene[i].draw()
      
    }
}

// Controller
function move(dt) {
    for (var i in scene) {
      scene[i].move(dt)
    }
}

// Main loop
function step() {
    // Get time delta
    var now = Date.now()
    var dt = (now - time) / 100
    time = now
  
    move(dt)
    
    //Check if balls are touching main character
    for(var op of arr){
        //console.log(pole[0].x, pole[0].y)
        //console.log(Math.round(op.x), Math.round(op.x) + 16, Math.round(op.x) - 16)
        if((Math.round(op.x) == pole[0].x || (Math.round(op.x) + 10 >= pole[0].x &&
         Math.round(op.x) - 10 <= pole[0].x)) && Math.round(op.y)+10 >= pole[0].y){
         pole[0].lifes--;
         for(var z = 0; z < 10; z++){
            move(dt)
         }
         if(pole[0].lifes == 0){
            cancelAnimationFrame(req);

            ctx.drawImage(Images.gameOver, 0, 0, 1250, 550);
            var alertButton = new Button("You lost.", 580, 68, 'Yellow', 546, 40, 155, 40, 'brown', 'round');
            $(".play_again").fadeIn(800);
            return req
         }
        }
    }
    // Check if arrow is in the spikes
    for(var l of arrow){
        
        if(l.top === 1){
        i = scene.indexOf (l)
        scene.splice(i, 1)
        i = arrow.indexOf (l)
        arrow.splice(i, 1)
        }
    }

    for(var min of arrow){
        for(var top of arr){

            if((Math.round(top.x) == min.x || (Math.round(top.x) + 10 >= min.x && Math.round(top.x) - 10 <= min.x)) && (Math.round(top.y) == min.y || (Math.round(top.y) + 50 >= min.y && Math.round(top.y) - 50 <= min.y ))){
                i = scene.indexOf (top)
                scene.splice(i, 1)
                i = arr.indexOf (top)
                arr.splice(i, 1)
            }
        }
    }
   
    console.log(arr.length)
    if(arr.length == 0){
        level++;
        cancelAnimationFrame(req);
        cancelAnimationFrame(req);
        req = new Animation();
    }

    draw()
  
    req = requestAnimationFrame(step)
}
