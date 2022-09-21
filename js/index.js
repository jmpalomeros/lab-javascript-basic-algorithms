console.log("I'm ready!");

// Iteration 1: Names and Input

let hackers1 = "Peter"
console.log ("The driver's name is" + " " + hackers1)

let hackers2 = "Gabriel"
console.log(`The navigator's name is ${hackers2}`)

// Iteration 2: Conditionals

let long1= hackers1.length
let long2= hackers2.length

if (long1>long2){
    console.log(`The driver has the longest name, it has ${long1} characters`)
    }
if(long2>long1){
        console.log(`It seems that the navigator has the longest name, it has ${long2} characters`)
    }
if (long1===long2){
    console.log(`Wow, you both have equally long names, ${long1} characters!`)
} 
    
// Iteration 3: Loops



let newHackers1 = ""

for(let i=0;i<hackers1.length; i = i+1){

   newHackers1 += (hackers1[i] + " ")     
}
console.log(newHackers1.toUpperCase().substring(0,newHackers1.length -1))


let newHackers2 = ""

for(let i=hackers2.length -1 ; i>=0; i--){
     
    newHackers2 += (hackers2[i])
    
}
console.log(newHackers2)







