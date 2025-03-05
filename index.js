// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog");

function mondayWork (activity = "go to the office"){
return `This Monday, I will ${activity}.`;
}  
mondayWork("work from home"); 

function wrapAdjective(emp="special"){
    return `You are ${emp}`;
}

// function wrapAdjective(symbol="*"){
//     return `You are${symbol}a hard worker${symbol}.`
// }
// console.log(wrapAdjective("*"))

// function wrapAdjective(symbol="||"){
//     return `You are${symbol}a dedicated programmer${symbol}.`
// }
// console.log(wrapAdjective("||"))

function wrapAdjective(symbol = "*") {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}


const wrapWithStar = wrapAdjective("*");
console.log(wrapWithStar("a hard worker")); 
const wrapWithPipes = wrapAdjective("||");
console.log(wrapWithPipes("a dedicated programmer")); 
