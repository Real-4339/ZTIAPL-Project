$(function() {
  var music_menu;
  music_menu = new Sound("sounds/menus.mp3");
  music_menu.loop = true;
  var music_game;
  var mySound;
  mySound = new Sound("sounds/click.mp3");
  var snd_tmp = false;
  var mic_on = false;
  var sound_on = false;
  var move = 560;

//   // Handle keyboard events
// window.onkeydown = function(event) {
//   keys[event.keyCode] = true;
//   console.log(keys);
// };
// window.onkeyup = function(event) {
//   keys[event.keyCode] = false;
// };

  var canvas = document.getElementById("canvas");  
  var ctx = canvas.getContext("2d");

  canvas.width = 1250;
  canvas.height = 550;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight; 

//Creating buttons
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

// Creating background
Images.mainMenu.onload = function() {
  if($('.play').click(function () {
    if(snd_tmp)
    mySound.play();
  $(".play_again").hide();
  $('#main').hide();
  $('#play').show();
  document.addEventListener('keydown', function(e){
    if(e.keyCode == 39) {
      move+=50;
    console.log(move);
    ondrawCharRight(Images.charWalkRight, move);
    
  }
  if(e.keyCode == 37){
    move-=50;
    console.log(move);
    ondrawCharLeft(Images.charWalkLeft, move);
  }
  });
  document.addEventListener('keyup', function(e){
    if(e.keyCode == 39) {
      //stope();
    
  }
  if(e.keyCode == 37){
    //stope();
  }
  });
  
  }), false);
  // Image, x, y, width, height
  if($('.settings').click(function() { 
    if(snd_tmp)
      mySound.play();
    $('#main').hide();
    $('#settings').show();
      ctx.fillStyle = "grey"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath();
      var pattern = ctx.createPattern(Images.floor, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, 1250, 650);
      //add back
      var alertButton = new Button("Settings", 585, 68, 'white', 530, 40, 200, 40, '#5E2C04', 'miter');
      var alertButton = new Button('', 0, 0, '', 200, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 1050, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 187, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 1037, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 188, 260, 50, 1, '#999DA0', 'round');
      var alertButton = new Button('', 0, 0, '', 1038, 260, 50, 1, '#999DA0', 'round');
      if(mic_on)
      ctx.drawImage(Images.sound_down, 780, 280, 50, 40);
      else{
        ctx.drawImage(Images.sound_up, 780, 280, 50, 40);
        document.getElementById('m_on').style.textDecoration = 'none';
        document.getElementById('m_off').style.textDecoration = 'underline';
      }
      if(sound_on)
      ctx.drawImage(Images.sound_down, 780, 160, 50, 40);
      else{
        ctx.drawImage(Images.sound_up, 780, 160, 50, 40);
        document.getElementById('s_on').style.textDecoration = 'none';
        document.getElementById('s_off').style.textDecoration = 'underline';
      }
      if($('#s_on').click(function(){ // sounds - on
        ctx.fillStyle = "grey"
        ctx.fillRect(0, 0, 1250, 250)
        ctx.beginPath();
        var pattern = ctx.createPattern(Images.floor, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, 1250, 250);
        sound_on = true;
        mySound.play();
        snd_tmp = true;
      //add back
      var alertButton = new Button("Settings", 585, 68, 'white', 530, 40, 200, 40, '#5E2C04', 'miter');
      var alertButton = new Button('', 0, 0, '', 200, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 1050, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 187, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 1037, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 188, 260, 50, 1, '#999DA0', 'round');
      var alertButton = new Button('', 0, 0, '', 1038, 260, 50, 1, '#999DA0', 'round');
        document.getElementById('s_off').style.textDecoration = 'none';
        document.getElementById('s_on').style.textDecoration = 'underline';
        ctx.drawImage(Images.sound_down, 780, 160, 50, 40);
      }), false);
      if($('#s_off').click(function(){ // sounds - off
        if(snd_tmp)
      mySound.play();
        ctx.fillStyle = "grey"
      ctx.fillRect(0, 0, 1250, 250)
      ctx.beginPath();
      var pattern = ctx.createPattern(Images.floor, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, 1250, 250);
      sound_on = false;
      snd_tmp = false;
      //add back
      var alertButton = new Button("Settings", 585, 68, 'white', 530, 40, 200, 40, '#5E2C04', 'miter');
      var alertButton = new Button('', 0, 0, '', 200, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 1050, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 187, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 1037, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 188, 260, 50, 1, '#999DA0', 'round');
      var alertButton = new Button('', 0, 0, '', 1038, 260, 50, 1, '#999DA0', 'round');
        document.getElementById('s_on').style.textDecoration = 'none';
        document.getElementById('s_off').style.textDecoration = 'underline';
        ctx.drawImage(Images.sound_up, 780, 160, 50, 40);
      }), false);
      if($('#m_on').click(function(){ // music - on
        if(snd_tmp)
      mySound.play();
        ctx.fillStyle = "grey"
      ctx.fillRect(0, 250, 1250, 350)
      ctx.beginPath();
      var pattern = ctx.createPattern(Images.floor, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 250, 1250, 350);

      music_menu.currentTime = 0; 
      music_menu.play();
      mic_on = true;
      //add back
      var alertButton = new Button("Settings", 585, 68, 'white', 530, 40, 200, 40, '#5E2C04', 'miter');
      var alertButton = new Button('', 0, 0, '', 200, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 1050, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 187, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 1037, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 188, 260, 50, 1, '#999DA0', 'round');
      var alertButton = new Button('', 0, 0, '', 1038, 260, 50, 1, '#999DA0', 'round');
        document.getElementById('m_off').style.textDecoration = 'none';
        document.getElementById('m_on').style.textDecoration = 'underline';
        ctx.drawImage(Images.sound_down, 780, 280, 50, 40);
      }), false);
      if($('#m_off').click(function(){ // music - off
        if(snd_tmp)
      mySound.play();
      ctx.fillStyle = "grey"
      ctx.fillRect(0, 250, 1250, 350)
      ctx.beginPath();
      var pattern = ctx.createPattern(Images.floor, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 250, 1250, 350);
        music_menu.stop();
        mic_on = false; 
      //add back
      var alertButton = new Button("Settings", 585, 68, 'white', 530, 40, 200, 40, '#5E2C04', 'miter');
      var alertButton = new Button('', 0, 0, '', 200, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 1050, 238, 24, 55, '#5E2C04', 'round');
      var alertButton = new Button('', 0, 0, '', 187, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 1037, 220, 50, 10, '#481F01', 'round');
      var alertButton = new Button('', 0, 0, '', 188, 260, 50, 1, '#999DA0', 'round');
      var alertButton = new Button('', 0, 0, '', 1038, 260, 50, 1, '#999DA0', 'round');
        document.getElementById('m_on').style.textDecoration = 'none';
        document.getElementById('m_off').style.textDecoration = 'underline';
        ctx.drawImage(Images.sound_up, 780, 280, 50, 40);
      }), false);
  }), false);
  if($('.controls').click(function () {
    if(snd_tmp)
    mySound.play();
  $('#main').hide();
  $('#controls').show();
    ctx.fillStyle = "grey"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    var pattern = ctx.createPattern(Images.floor, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 1250, 650);
    //add back
    var alertButton = new Button("Controls", 580, 68, 'white',530, 40, 200, 40, '#5E2C04', 'miter');
    var alertButton = new Button('', 0, 0, '',200, 238, 24, 55, '#5E2C04', 'round');
    var alertButton = new Button('', 0, 0, '', 1050, 238, 24, 55, '#5E2C04', 'round');
    var alertButton = new Button('', 0, 0, '', 187, 220, 50, 10, '#481F01', 'round');
    var alertButton = new Button('', 0, 0, '', 1037, 220, 50, 10, '#481F01', 'round');
    var alertButton = new Button('', 0, 0, '', 188, 260, 50, 1, '#999DA0', 'round');
    var alertButton = new Button('', 0, 0, '', 1038, 260, 50, 1, '#999DA0', 'round');
    //table-list
    var alertButton = new Button('', 0, 0, '', 353, 140, 550, 270, '#5E2C04', 'round');
    var alertButton = new Button('', 0, 0, '', 360, 155, 536, 240, '#EABD9D', 'round');
    //text
    var alertButton = new Button('Menu - P', 580, 180, 'black', 0, 0, 0, 0, '', '');
    var alertButton = new Button('Reset level - R', 555, 225, 'black', 0, 0, 0, 0, '', '');
    var alertButton = new Button('To shoot - Spacebar', 520, 273, 'black', 0, 0, 0, 0, '', '');
    var alertButton = new Button('Moove left - A/Left Arrow', 489, 320, 'black', 0, 0, 0, 0, '', '');
    var alertButton = new Button('Moove right - D/Right Arrow', 471, 372, 'black', 0, 0, 0, 0, '', '');
  }), false);
  if($('.gameOver').click(function() {
    if(snd_tmp)
      mySound.play();
      var alertButton = new Button("You lost.", 580, 68, 'Yellow', 546, 40, 155, 40, 'brown', 'round');
      $(".play_again").fadeIn(800);
  }), false);
  if($('.play_again').click(function() {
    if(snd_tmp)
      mySound.play();
      $('#play').hide();
      $('#main').show();
      ctx.drawImage(Images.mainMenu, 0, 0, 1250, 550);
  }), false);
  if($('.back').click(function() {
    if(snd_tmp)
      mySound.play();
    $('#settings').hide();
    $('#controls').hide();
    $('#main').show();
    ctx.drawImage(Images.mainMenu, 0, 0, 1250, 550);
  }), false);
  else{
    ctx.drawImage(Images.mainMenu, 0, 0, 1250, 550);
    $('#main').show();
  }
};
});  

//Creating menus back.
// window.onload = function () { 
  // ctx.beginPath();
  // ctx.rect(990, 170, 200, 250);
  // ctx.fillStyle = '#fd5956';
  // ctx.fill();
  // ctx.strokeStyle = '#fd5956';
  // ctx.lineJoin = 'round';
  // ctx.lineWidth = 35;
  // ctx.stroke();
  // //and another one
  // ctx.beginPath();
  // ctx.rect(1000, 185, 180, 220);
  // ctx.fillStyle = 'white';
  // ctx.fill();
  // ctx.strokeStyle = 'white';
  // ctx.lineJoin = 'round';
  // ctx.lineWidth = 35;
  // ctx.stroke();
// }

