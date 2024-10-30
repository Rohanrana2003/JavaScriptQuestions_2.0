let submit = document.getElementById('submit');
let start = document.getElementById('start');
let input = document.getElementById('input');
let result = document.getElementById('result');
let guess = document.getElementById('guess');

let allGuesses = [];


let x = (Math.floor(Math.random()*100));

function game(){


    submit.addEventListener('click', ()=>{
        let value = input.value;

        if(x>value){
            result.innerHTML = "Too Low!"
        }
        else if(x < value){
            result.innerHTML = "Too High!"
        }
        else{
            result.innerHTML = "You got it! Congrats"
            submit.setAttribute('disabled','disabled');
            start.removeAttribute('disabled')
            input.value = '';
        }
        allGuesses.push(value)
        guess.innerText = " Your Guesses: " + allGuesses.join(', ');
    })    
}

start.addEventListener('click', ()=>{
    start.setAttribute('disabled','disabled');
    submit.removeAttribute('disabled')
    game();
})

