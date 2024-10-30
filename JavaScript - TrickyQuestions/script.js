
/*------------------------Tricky Questions-----------------------------*/

//Ques 1
// console.log(typeof abcd);


//Ques 2
// console.log(typeof abcd);
// let abcd;


//Ques 3
// const[a, ,b] = [1,2,3,4,5];
// console.log(a,b); 


//Ques 4
// const{4:b} = [1,2,3,4,5,6];
// console.log(b); 


//Ques5 [BLOCK SCOPE]

// {
//     let a = 1;
//     let b = 2;
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(b)

//Ques6 [HOISTING]

// console.log(a)
// var a = 5;
//OR
// console.log(name)
// var name = 5;

//Ques7 [SHADOWING]

// var x = 20;
// function foo(){
//     console.log(x)
//     var x = 10;
// }
// foo();
//OR
// foo()
// var foo = 28;
// function foo(){
//     console.log('calling foo')
// }
// foo();

//Ques8 [CLOSURE]

// function outer(){
//     function inner(){
//         console.log(x)
//     }
//     const x = 5;
//     return inner
// }
// const inner = outer()
// inner()





