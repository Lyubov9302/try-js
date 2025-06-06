// Написвти функцію, яка приймає масив слів з максдовжиною  та повертає новий масив, де лише ті слова, довж яких менша або рівня максдовжині.
// Вокористовуй матод forEach 


// function getShortWords(words, maxLength) {
//     newArray = [];

//     words.forEach(function (word) {
//         if (word.length <= maxLength) {
//             newArray.push(word);
//         }
//     });
//     return newArray;
// }

// console.log(getShortWords(["apple", "pear", "banana", "sun"], 3));



// 2 - напиши функцію, 
// calculateTotalWithDiscount, яка приймає: prices - масив цін та discount - знижку у
//  відсотках наприклад, 10 означає 10%
// Ф
// Функція має повертати загальну суму після застосування знижки до кожного товару

// Використай стрілочну функціюВсередині неї форІч з стрілочною функцією як колбек та застосуй знижку до кожного елементу

// const calculateTotalWithDiscount = (prices, discount) => {
//     let totalPrice = 0;

// prices.forEach((price) => {
//     const discounted = price - (price * discount / 100);
//     totalPrice += discounted;
// });
// return totalPrice;
// };


// console.log(calculateTotalWithDiscount([100, 200, 50], 10));



// 3 - напиши функцію changeOdd(numbers, value), яка  
// 1)приймає масив чисел намберс і число валью
// 2) повертає новий масив, у якому - непарні числа збільшуються на ваьюж
//  - парні залишаються без змін


//   function changeOdd(numbers, value) {
//     const newArray = [];
//   numbers.forEach(num => {
//     if (num % 2 === 0) {
//         newArray.push(num);
//     } else {
//         newArray.push(num + value); 
//     }
//   });
//     return newArray;
//   }


//   console.log(changeOdd([10, 15, 20, 25], 5));

// 4 - напиши стрілочну функцію getUserNames, яка 
// - приймає масив обєктів users 
// - повертає масив імен користувачів (тобто значень властивості name)

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 28}
// ];
 
// const getUserNames = (users) => {
//     return users.map(user => user.name)};


// console.log(getUserNames(users));


// 5  - Напиши стрілочну функцію getUsersByGender(users, gender), яка:
// - приймає масив обєктів users;
// - повертає масив імен користувачів, у яких gender збігається з переданим параметром


// const users = [
//     { name: "Alice", gender: "female" },
//     { name: "Bob", gender: "male" },
//     { name: "Eve", gender: "female" }
// ];

// const getUsersByGender = (users, gender) => {
//     return users.filter(user => user.gender === gender).map(user => user.name);
// };

// console.log(getUsersByGender(users, "female"));
// console.log(getUsersByGender(users, "male"));

// 6 - напиши стрілочну функцію getInactiveUserEmails(users), яка:
// - приймає масив обєктів users;
// - повертає масив імейл-адрес користувачів, у яких isActive - false;

// const users = [
//         { name: "Alice", email: "alice@mail.com", isActive: true },
//         { name: "Bob",  email: "bob@mail.com", isActive: false },
//         { name: "Eve",  email: "eve@mail.com", isActive: false }

// ];

// const getInactiveUserEmails = (users) => {
//     return users.filter( user => user.isActive === false).map(user => user.email);
// };

// console.log(getInactiveUserEmails(users));



// 7 - напиши стрілочну функцію getUsersByName(users, name), яка:
// - приймає масив обєктів users;
// - повертає обєкт користувача, у якого значення name збігається з другим аргументом 


// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30},
//     { name: "Charlie", age: 28}
// ];

// const getUsersByName = (users, name) => {
//     return users.find((user) => user.name === name);
// };

// console.log(getUsersByName(users, "Alice"));