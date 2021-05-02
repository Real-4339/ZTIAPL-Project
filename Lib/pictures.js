var Images = {};

Images.makeImage = function(source){
  var img = new Image();
  img.src = source;
  return img;
}

Images.floor = Images.makeImage("Images/floor_1.png");
Images.wall = Images.makeImage("Images/wall_1.jpg");
Images.level1BG = Images.makeImage("Images/fon_3.png");
Images.level2BG = Images.makeImage("Images/fon_2.jpg");
Images.level3BG = Images.makeImage("Images/fon_1_2.jpg");

Images.charWalkLeft = Images.makeImage("Images/left_1.png");
Images.charWalkRight = Images.makeImage("Images/right_1.png");
Images.charWalkUpright = Images.makeImage("Images/back.png");
Images.life = Images.makeImage("Images/heart_1.png");
Images.mainMenu = Images.makeImage("Images/Menu_1.png");
Images.sound_up = Images.makeImage("Images/up.png");
Images.sound_down = Images.makeImage("Images/down.png");