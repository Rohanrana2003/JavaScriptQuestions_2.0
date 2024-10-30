

let count = document.getElementById('count');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let reset = document.getElementById('reset');
let input = document.getElementById('input');


plus.addEventListener('click', ()=>{
    let value = parseInt(input.value);
    let countValue = parseInt(count.innerText)
    count.innerText = countValue  + value;
})

minus.addEventListener('click', ()=>{
    let value = parseInt(input.value);
    let countValue = parseInt(count.innerText)
    count.innerText = countValue  - value;
})

reset.addEventListener('click', ()=>{
    count.innerText = 0;
})



