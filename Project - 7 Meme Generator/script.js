let heading = document.getElementById('heading');
let image = document.getElementById('image');
let auth = document.getElementById('name');
let btn = document.getElementById('btn');

function getMeme() {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=>res.json())
    .then(data=>{

        const {title, url, author} = data;
        heading.innerText = title;
        image.src = url;
        auth.innerText = "Mene by:" +  author;
        
    })
}

btn.onclick = getMeme;
getMeme();