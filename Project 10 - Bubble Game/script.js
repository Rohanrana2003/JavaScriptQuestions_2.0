let hit = document.querySelector('#hitval');
let score = document.querySelector('#scoreval');
let time = 6;

function scoreChange(x){
    score.innerText = Number(score.innerText) + x;
}

function hitVal(){
    let rn = Math.floor(Math.random()*10);
    hit.innerText = rn;
}

function makeBubble() {
    var clutter = ''

    for (let i = 1; i <= 72; i++) {

        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    let timer = setInterval(() => {

        if(time > 0) document.querySelector('#timerVal').innerHTML = --time;

        else{
            clearInterval(timer);
            document.querySelector('#pbtm').innerHTML = '<h1>Game Over!</h1>'
        };
         
    }, 1000);
}

makeBubble();
runTimer();
hitVal();

document.querySelector('#pbtm').addEventListener('click', (e)=>{

    if(e.target.className === 'bubble'){

        if(e.target.innerText === hit.innerText) scoreChange(10);
        
        else scoreChange(-5);
        
        hitVal();
    }

})