//

const cvs = document.getElementById('snake')
const ctx = cvs.getContext('2d')

//unidade

const box = 32;

//importar as imagens

const fundo = new Image ();
fundo.scr = "img/fundo.png";

const lampadaImg = new Image ();
lampadaImg.scr = "img/lampada.png";

//cobra

let snake = [];
snake[0] =  {x: 9 * box, y: 10 * box};

//lampadas
let lampada = {
    x : Math.floor (Math.random()* 17 + 1) * box,
    y : Math.floor(Math.random() * 15 + 3) * box
}

//score
let = score = 0;

//controlar a cobra

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    } else if (key == 38 && d != "DOWN"){
        d= "UP";
        up.play();
    } else if (key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    } else if (key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}

// draw  
function draw(){
    ctx.drawImage(fundo,0,0);
    for( let i = 0; i < snake.length; i++){
        ctx.fillStyle = (i == 0) ? "blue" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle= "purple";
        ctx.stokeRect(snake[i].x, snaike[i].y, box, box);
    }
    ctx.fillStyle="white";
    ctx.font="45px Changa One"
    ctx.fillText( score,2*box,1.6*box);
}

ctx.drawImage(lampadaImg, lampada.x, lampada.y);





let game = setInterval (draw,100);
