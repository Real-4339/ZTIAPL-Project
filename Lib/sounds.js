function Sound(file) {
    this.sound = document.createElement("audio");
    this.sound.src = file;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    
    document.body.appendChild(this.sound);
    
    this.play = function(){
       this.sound.play();
    }
    this.stop = function(){
       this.sound.pause();
    }
}