let timeValue = null;
function ondrawCharRight(image, X){ 
       
    var canvas = document.getElementById("canvas");  
    var ctx = canvas.getContext("2d");
        canvas.width = 1250;
        canvas.height = 550;
       
       var i = 1;
          timeValue = setInterval(function () {
               drawImage(image, i, X+=X );
               if (i >= 4)
               i = 1;
               else
                i++;
           }, 200);
      
           function drawImage(img, num, x) {
           
               num = num ? num -1 : 0;
           
               image.onload = function () {
                   width = image.width;
                   height = image.height;   
                   ctx.fillStyle = "white"
                   ctx.fillRect(0, 0, canvas.width, canvas.height)
                   ctx.drawImage(image, 16.5*num, 0, 16, 27, 0, 400, 30, 41);
                   
               }; 
             image.src = "Images/right_1.png";
        
           }
           
}

function ondrawCharLeft(image, X){ 
       
    var canvas = document.getElementById("canvas");  
    var ctx = canvas.getContext("2d");
        canvas.width = 1250;
        canvas.height = 550;
       
       var i = 1;
          timeValue = setInterval(function () {
               drawImage(image, i, X-=X);
               if (i >= 4)
               i = 1;
               else
                i++;
           }, 200);
      
           function drawImage(img, num, x) {
           
               num = num ? num -1 : 0;
           
               image.onload = function () {
                   
                   width = image.width;
                   height = image.height;   
                   ctx.fillStyle = "white"
                   ctx.fillRect(0, 0, canvas.width, canvas.height)
                   ctx.drawImage(image, 16.5*num, 0, 16, 27, 0, 400, 30, 41);
                   
               }; 
             image.src = "Images/left_1.png";
         
           }
}

function stope (){
    clearInterval(timeValue);
}
