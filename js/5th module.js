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
