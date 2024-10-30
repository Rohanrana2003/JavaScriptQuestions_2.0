let lower = document.getElementById('lower');
let upper = document.getElementById('upper');
let camel = document.getElementById('camel');
let pascal = document.getElementById('pascal');
let snake = document.getElementById('snake');
let kebab = document.getElementById('kebab');
let trim = document.getElementById('trim');

let input = document.getElementById('input');

function capitalizeFirstWord(word){
    if(!word) return word
    return word[0].toUpperCase() + word.slice(1)
}

function toCamelCase(string) {
    let lowerCaseString = string.toLowerCase();
    let wordArray = lowerCaseString.split(" ");

    let finalArray = wordArray.map((word, i) => {
        if (i === 0) {
            return word;
        }
        return capitalizeFirstWord(word);
    })
    return finalArray.join('');
}

function toPascalCase(string){
    let lowerCaseString = string.toLowerCase();
    let wordArray = lowerCaseString.split(' ');
    let finalArray = wordArray.map((word)=>{
        return capitalizeFirstWord(word);
    })
    return finalArray.join('')
}

function toSnakCase(string){
    let arr = string.split(' ');
    return arr.join('_');
}

function toKebabCase(string){
    let arr = string.split(' ');
    return arr.join('-');
}

function toTrim(string){
    let arr = string.split(' ');
    return arr.join("")
}

function execute(){
    lower.innerText = input.value.toLowerCase();
    upper.innerText = input.value.toUpperCase();
    camel.innerText = toCamelCase(input.value);
    pascal.innerText = toPascalCase(input.value);
    snake.innerText = toSnakCase(input.value);
    kebab.innerText = toKebabCase(input.value);
    trim.innerHTML = toTrim(input.value);
}

execute();

input.addEventListener("input", ()=>{
    if(input.value){
        execute();
    }
})








