let lr = document.getElementById('leftright')
let tb = document.getElementById('topbottom')
let info = document.getElementById('info')
let range = document.getElementById('range')
let toastMsg = document.getElementById('toastMsg')
let button = document.getElementById('btn')
let msg = document.getElementById('msg');
let toast = document.querySelector('.toastContainer');




function showToast(){
    msg.style.display = 'block';
    msg.innerHTML = toastMsg.value;

    if(lr.value === 'left'){
        toast.classList.remove('right')
        toast.classList.add('left');
    }
    else{
        toast.classList.remove('left')
        toast.classList.add('right');
    }

    if(tb.value === 'top'){
        toast.classList.remove('bottom')
        toast.classList.add('top');
    }
    else{
        toast.classList.remove('top')
        toast.classList.add('bottom');
    }

    if(info.value === 'warning'){
        toast.classList.remove('information')
        toast.classList.remove('success')
        toast.classList.add('warning');
    }
    else if(info.value === 'success'){
        toast.classList.remove('information')
        toast.classList.remove('warning')
        toast.classList.add('success');
    }
    else{
        toast.classList.remove('warning')
        toast.classList.remove('success')
        toast.classList.add('information');
    }



}

button.addEventListener('click', ()=>{

    showToast();
    let time = range.value * 100;

    setTimeout(() => {
        msg.style.display = 'none';
    }, time);
})
