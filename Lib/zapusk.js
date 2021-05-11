function Animation(){
// Set up canvas for 2D rendering
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
console.log("onload")
scene = []
arr = [] 
pole = []
var oop

// Create 5 dots
for (i = 0; i < 5; i++) {
  let a = new Dot()
  scene.push(a)
  arr.push(a)
}
  let a = new Char()
  scene.push(a)
  pole.push(a)
  
 //scene.push(new Char())

 time = Date.now()


 var req = requestAnimationFrame(step)
  return req;
}