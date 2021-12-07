// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//   }





// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);




// const names = ['Guadalupe', 'Ollie', 'Aki']
// const e = 'surprise'

function writeCards(names, event){
    let greeting = []
    for(let index = 0; index < names.length; index++){
        greeting.push(`Thank you, ${names[index]}, for the wonderful ${event} gift!`)
    }
    return greeting
};




function countDown(){
    let integer = 10;
    while(integer >= 0){
        console.log(integer--);
    };

};


