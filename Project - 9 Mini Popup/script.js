let btn = document.getElementById('btn');
let popup = document.querySelector('.popup');
let cross = document.getElementById('cross');






btn.addEventListener('click', ()=>{
    popup.style.display = 'block';
})

cross.addEventListener('click', ()=>{
    popup.style.display = 'none';
})
