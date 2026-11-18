// // STEP 1 create a new element
// const newcard = document.createElement(("div"))
// // console.log(newcard)
// // STEP 2 set the required content
// newcard.innerText = "hello!!"
// newcard.innerHTML = "<i>hello!!<i>"
// // console.log(newcard)
// // STEP 3 attach it to dom tree
// const parent = document.getElementById("root")
// // ---PART1-->find the parent element
// // ---PART2--->push the newly create element inside the parent
// parent.appendChild(newcard);


// Step 1: Create a new element
const newCard = document.createElement("div");

// Step 2: Set the required content
newCard.className = "card";
newCard.innerHTML = "<h1>Hi</h1><p>Hello !</p>";

// Step 3: Attach it to DOM tree

// Part 1: find the parent element
const parent = document.getElementById("root");

// Part 2: push the newly create element inside the parent
// append(X), ** appendChild, prepend (X), insertBefore(X), ...
parent.appendChild(newCard);