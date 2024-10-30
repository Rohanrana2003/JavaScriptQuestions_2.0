let hero = document.getElementById('center');

const throttleFunction = (func, delay) => {

  let prev = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};



hero.addEventListener('mousemove', throttleFunction((e) => {

    let div = document.createElement('div');
    document.body.appendChild(div);  
    div.style.top = e.clientY-200 +'px';
    div.style.left = e.clientX +'px';
    div.classList.add('imageDiv');

    let img = document.createElement('img');
    img.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1716968594480-d3ba77a2f776?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    img.classList.add('img');
    div.appendChild(img);

    setTimeout(function(){
      div.remove();
    }, 2000);


    console.log('object')

  },400))