// function greet() {  
//     console.log("hello,bj")
// }
// greet();




// function greet() {  
//     const username = "jkbjkbjbjbkbkbb";
//     console.log(`hello, ${username}`);
// }
// greet("ajay");
// greet("vijay");
// greet();


// function printPrice(itemname,itempricedollar){
//     const itempriceinr = Math.round(itempricedollar*100);
//     console.log(itemname,":",itempriceinr);
// }
// printPrice("iphone", 999.99);
// printPrice("samsung", 899.99);


// function add(a, b) {
//     console.log(a + b);
// }
// let result = add(2, 3);
// console.log(result);
// console.log(add(10, 20) * 2);




// function sum(a, b) {
// return a + b;
// }
// let answer = sum(2, 3);
// console.log(answer);
// console.log(sum(10, 20) * 2);



// function check() {
//     return "done";
//     console.log("Will this print?");
// }
// console.log(check());



// function welcome(name = "Guest",city = "Delhi") {
//     console.log(`Welcome, ${name}! You are from ${city}.`);
// }
// welcome();
// welcome("Ravi", "Mumbai");
// welcome("Anita");
// welcome(undefined, "Kolkata");





//----------------------------------------------> LAB <---------------------------------------------
// let n = prompt("Enter a number");
// function cubenumber(n){
//     return n*n*n;
// }
// console.log(cubenumber(n));
// alert(`The cube of ${n} is ${cubenumber(n)}`);


    // let age = prompt("Enter your age");
    // function isAdult(age) {
    //     if (age >= 18) {
    //         return true;
    //     } else {
    //         return false;
    //     }   
    // }
    // console.log(isAdult(age));
    // alert(`you are ${age} years old`)




// let weight = prompt("Enter your weight ");
// let height = prompt("Enter your height ");
// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);
//     return (bmi);
// }
// console.log(calculateBMI(weight, height));


// let marks = prompt("Enter your marks");
// function gradeformarks(marks) {
//     if (marks >= 90){
//         return "A";
//     } else if ( marks >= 75){
//         return "B";
//     } else if (marks >= 50 ){
//         return "C";
//     } else {
//         return "F";
//     }
// }
// console.log(gradeformarks(marks));



// price = prompt("enter the price")
// function applyDiscount(price, isMember = false) {
//     if (isMember === true){
//         return price*0.9;
//     } else{
//         return price;
//     }
// }
// console.log(applyDiscount(price, isMember = true));


// n = prompt()
// square = n*n
// cube = n*n*n
// function calculateSquareAndCube(n) {
//     return [square, cube];
// }
// console.log(square+cube);



// let n = Number(prompt("Enter a number"));
// function isPositive(n) {
//     if (n >= 0) {
//         console.log(Math.sqrt(n));
//         return true;
//     }
//     else {
//         let num = Math.abs(n);
//         console.log(Math.sqrt(num));
//         return false;
//     }
// }


// ---------------------> METHOD 1 <---------------------------
// console.log(isPositive(n));


// let numbers = prompt()
//     .split(" ")
//     .map(Number);
// function arrayMax(numbers) {
//     let largest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
//     return largest;
// }
// console.log(arrayMax(numbers));


// ------------------> METHOD 2 (Trying)<-------------------------
// let numbers = prompt()
//     .split(" ")
//     .map(Number)
// function arraymax(numbers){
//     return Math.max(numbers)
// }
// console.log(arraymax)



// hoisting 
// TDZ = temporal dead zone 
// execution context


// console.log(mult(2,5))
// function mult(a,b){
//     return a*b
// }


// if(true){
//     let x = 10
//     console.log(x)
// }
// console.log(x)  //this is the error line


// joh last mai update karenge woh hi aayega conosle.log mai 
// if(true){
//     let x = 10
//     if(true){
//         x = 20
//         if(true){
//             x = 30
//             console.log(x)
//         }
//     }
// }


// if(10>5){
//     let x = 10
//     if(true){
//         x = 20
//         if(true){
//             x = 30
//             console.log(x)
//         }
//         console.log(x)
//     }
//     console.log("this is the new ",x)
// }
// else{
//     console.log(x)
// }



// let a = prompt("enter the number")
// if(a%2 === 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }


// let marks = Number(prompt("enter the marks"))
// if(marks >= 40){
//     console.log("PASS")
// }
// else{
//     console.log("FAIL")
// }




