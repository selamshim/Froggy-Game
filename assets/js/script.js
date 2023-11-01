let toady = document.getElementById('toady');
let theme = new Audio();
theme.src = "assets/audio/LilyIslands.mp3";

let position= {
    x:0,
    y:0,
};

//key down keep moving while in key up it must be touched everry time

document.addEventListener("keydown", (event) =>{
    //audio will play when key is pressed
    theme.play();
    switch(event.key){
        //ArrowUp listen upward arrow
        case "ArrowUp":
            //change the position by 10 to make faster
            position.y -= 10;
            break;
        //ArrowDown listen the downward arrow    
        case "ArrowDown":
            position.y += 10;
            break;
        //ArrowLeft listen the left arrow    
        case "ArrowLeft":
            position.x -= 10;
            break;
        //ArrowRight listen the right arrow    
        case "ArrowRight":
            position.x += 10;
            break;
    }

    toady.style.transform= `translate(
        ${position.x}px,
        ${position.y}px
    )`


});