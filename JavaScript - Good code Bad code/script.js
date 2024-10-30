
// Good Code Bad Code


/*------------[Example 1]----------------------*/
// const foo =  {name:"Google", category:"Product Based", start:"1981", end:"2004"};
// const bar =  {name:"Amazon", category:"Product Based", start:"1991", end:"2007"};
// const baz =  {name:"Paytm", category:"Product Based", start:"1999", end:"2008"};

// [Bad code]

// console.log(foo);
// console.log(bar);
// console.log(baz);


// [Good Code]

// console.log("%c My Companies", 'color:orange;, font-weight:bold')
// console.log({foo, bar, baz})

// console.table([foo, bar, baz])
/*----------------[END]------------------------*/



/*------------[Example 2]----------------------*/

// const turtule = {
//   name: 'turtule',
//   legs: 4,
//   shell: true,
//   type: 'amphibious',
//   meal: 10,
//   diet: 'berries'
// }
// [Bad code]

// function feed(animal){
//   return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}.`
// }

// [Good code]

// function feed(animal) {
//   const {name, meal, diet} = animal;
//   return `Feed ${name} ${meal} kilos of ${diet}.`
// }

// console.log(feed(turtule));
/*----------------[END]------------------------*/



/*------------[Example 3]----------------------*/

// const horse = {
//   age:9,
//   name:'horse',
//   skills:['racing','jumping']
// }

// function horseAge(str, age){
//    const ageStr = age > 7? "old":'young'
//    return `${str[0]} ${ageStr} at ${age} years`
// }

// const bio = horseAge`This Horse is${horse.age}`
// console.log(bio)
/*----------------[END]------------------------*/



/*------------[Example 4]----------------------*/

// const pikachu = {name:"Pikachu"};
// const stats = {hp:40, attack: 60, defense:45};

// [Bad object code]
// pikachu['hp'] = stats.hp;
// pikachu['attack'] = stats.attack;
// pikachu['defense'] = stats.defense;

//OR
// const lvl0 = Object.assign(pikachu, stats);
// const lvl1 = Object.assign(pikachu, {hp:44});

// [Good Code]
// const lvl2 = {...pikachu, ...stats}; // Here we are using spread operator
// const lvl3 = {...pikachu, hp:44}; // Here we are using spread operator

// console.log( lvl3);

//Using Arrays
// let names = ['rohan', 'sohan', 'tohan'];

//[Bad code]
// name.push('mohan');
// name.push('rahul');

// [Good Code]
// name = [...name, 'abhi', 'harsh'];           //push
// names = ['abhi', ...names, 'harsh'];         //push, shift
// console.log(names);
/*----------------[END]------------------------*/



/*------------[Example 5]----------------------*/

    // let orders = [12, 35, 55, 76, 99, 150];

// [Bad Code]
    // let total = 0;
    // let withTax = [];
    // let highValues = [];

    // for(let i=0; i<orders.length; i++){

    //     // Reduce
    //     total += orders[i];

    //     //map
    //     withTax.push(orders[i]*1.1);

    //     //filter
    //     if(orders[i]>50){
    //       highValues.push(orders[i]);
    //     }
    // } 

// [Good Code]
    // let total = orders.reduce((acc, curr)=> acc + curr);

    // let withTax = orders.map(order => (order*1.1));

    // let highValues = orders.filter(order => order>50);

    // console.log(total, withTax, highValues);
/*----------------[END]------------------------*/



/*------------[Example 6]----------------------*/

    const random = () =>{
      return Promise.resolve(Math.random()); 
    }

    // [Bad Code]
    // const sumRandom = () =>{
    //   let first;
    //   let second;
    //   let third;

    //   return random()
    //           .then(v => {
    //             first = v;
    //             return random();
    //           })
    //           .then(v => {
    //             second = v;
    //             return random();
    //           })
    //           .then(v => {
    //             third = v;
    //             return first + second + third;
    //           })
    //           .then(v =>{
    //             console.log(`Result: ${v}`)
    //           })
    // }
    //    sumRandom();


    // [Good Code]
    const sumRandomAsync = async() =>{

      let first = await random();
      let second = await random();
      let third = await random();

      console.log(`Result ${first + second + third}`)
    }

  sumRandomAsync();