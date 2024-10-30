let input = document.getElementById("inputField");

let prevValue = ""

input.addEventListener('input', (e)=>{
    let arr = e.target.value;

    console.log(prevValue, arr)

    if(/\d+$/g.test(arr)){
        input.value = arr;
    }
    else{
        input.value = arr.substring(0, arr.length-1)
    }

    if(arr.length===4 && prevValue.length < arr.length){
        input.value = "+(" + arr.substring(0,3) + ") - " + arr[arr.length-1] ;
    }else if(arr.length===9 && prevValue.length > arr.length){
        input.value = arr.substring(2,5);
    }

    prevValue = input.value;

    
})
