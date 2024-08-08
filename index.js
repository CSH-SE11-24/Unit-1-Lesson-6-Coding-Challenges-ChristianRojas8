// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["Im tall", "Im Smart", "I love traveling"]

// console log the 1st element (element is not same as index!)
console.log(truths[0])
// change the value of the last element
truths.splice(3, 0, "Im energetic");

// console log the last element to check that it's changed
console.log(truths[truths.length-1])
// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["I play Basketball", "Im Short", "Im Rich"]

// delete a value from the lies array
lies.pop()

// console log the second list to confirm the value is gone
console.log(lies)

// add a new lie to the lies array
lies.push("I am the oldest sibling ")
console.log(lies)

// SPICY
// pick the truths or lies array and console log the 1st element
console.log(lies[0])

// prompt the user to guess if it was true or false
let question = prompt("Whats a lie")

// stretch: how could you check they are right or wrong?
if()

