const POLICAD_QUESTION_DATA = {
  "products": [
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "price": 0.99
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "price": 6.99
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "price": 5.49
    },
    {
      "id": 29,
      "title": "Juice",
      "price": 3.99
    },
    {
      "id": 30,
      "title": "Kiwi",
      "price": 2.49
    },
    {
      "id": 31,
      "title": "Lemon",
      "price": 0.79
    },
    {
      "id": 32,
      "title": "Milk",
      "price": 3.49
    },
    {
      "id": 33,
      "title": "Mulberry",
      "price": 4.99
    },
    {
      "id": 34,
      "title": "Nescafe Coffee",
      "price": 7.99
    },
    {
      "id": 35,
      "title": "Potatoes",
      "price": 2.29
    }
  ],
  "total": 194,
  "skip": 25,
  "limit": 10
};

const data = POLICAD_QUESTION_DATA;


// Write your code below
// let items = data.products;
// let i = 0;
// let sum = 0;
// while(true){
    // console.log(items[i].title,":",Math.round(items[i].price*100));
    // SUM PRINT KARNA HAI PRICES KAA AUR JISKA SABSE JYADA PRICE HAI USKA TITLE  PRINT KARNA HAI(HW)
    // i += 1;
// }

// const items = data.products;
// let max = 0
// let i =  0
// const  n = items.length;
// while(i < n){
//     if(max < items[i].price) {
//         max = items[i].price
//     }
//     i += 1
// }
// console.log(max)

// i = 0;
// while(i<n) {
//     if (max == items[i].price) {
//         console.log(items[i].title)
//     } 
//     i += 1;
// }


// const student = { name: "Ajay", age: 20, rollNumber: "2616400901" };
// const { name, age } = student;
// console.log(name, age);


// let i = 0;
// while (i < 10) {
//   console.log("hello")
//   i++;
// }



// do-while loop
// let j = 0;
// do {
//   console.log(2*i);
//   j++
// } while(j <= 10)



// let username = prompt("input your name");
let age = prompt("enter your age")
// alert(username)
// console.log(username)
// alert(`my name is ${username}`)
// console.log("my username is", username)        //-------------- space aayegi iss mai username se pehle 
// console.log("my username is" + username)       //-------------isme space nahi aayegi usename kai pehle

// age = parseInt(age)     // parse use for changing the type of the input/prompt // agar isme kuck bhi extra de diya means age = 66 years yhen they give the answer is 66 
// console.log(typeof age)

// let age_num = Number(age)  // agar int nahi aya toh wohh nan de dega 
// console.log(age_num)
// console.log(typeof age_num) // nan

// age = parseFloat(age)
// console.log(age)
// console.log(typeof age)


// Math functions
// console.lpg(Math.round())
// console.log(Math.ceil())
// console.log(Math.floor())
// console.log(Math.min(1,20,0))
// console.log(Math.max(10,2,5,44))



// let total = 0
// let answer
// do {
  //METHOD 1
  // answer = prompt("enter the expense")
  // if ( answer === "done") {
  //   break
  // } else {
  //   total += parseFloat(answer)
  // }

  // METHOD 2
  // if ( answer !== "done") {
  //   total += parseFloat(answer)
  // }
// } while (answer !== "done")
// console.log(total)
