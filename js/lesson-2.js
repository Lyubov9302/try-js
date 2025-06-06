// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const bluesIndex = styles.indexOf("blues");
// if (bluesIndex !== -1) {
//     // styles[bluesIndex] = "classic";
//     styles.splice(bluesIndex, 1, "classic");
// }
//  console.log(styles);

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);


// const movies = ["Titanic", "Avatar", "Inception"];
// movies.push("Interstellar");
// const avatarIndex = movies.indexOf("Avatar");
// if (avatarIndex !== -1) {
//     movies[avatarIndex] = "The Matrix";
//     const titanicIndex = movies.indexOf("Titanic");
//     if (titanicIndex !== -1) {
//     movies.splice(titanicIndex, 1);
//     }
//     console.log(movies);
//     function logItems(array) {
//             for (let i = 0; i < array.length; i++) {
//                 console.log(`${i + 1} - ${array[i]}`);
//             }
// }
// }
// logItems(movies);






// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє - виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];


// const login = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
// const userName = prompt('Введіть Ваше ім`я'); 
// if (!userName) {
//     return `Invalid`
// }
// if (array.includes(userName)) {
//     alert(`Welcome ${userName}!`);
// } else {
//     alert(`user not found`);
// }
// }

// console.log(login);

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const userLogin = prompt ("Введіть Ваше ім`я");
//     array.includes(userLogin) ? alert(`Welcome ${userLogin}!`) : alert("user not found");
// }

// checkLogin(logins);

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(arr) {
//     const name = prompt('What is your name?');
//     if (name ===  'null') {
//         alert ('Login canceled, try again');
//     } else if (name === ' ') {
//         alert('Username is empty, please input the login');
//     } else {
//         for (const item of arr) {
//             if (name === item) {
//                 alert(`Welcome ${name}`);
//                 break;
//             } else {
//                 alert('User not found');
//                 break;
//             }
//         }
//     }
// }
// console.log(checkLogin(logins));


//task3 - Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...arg) {
// let total = 0;
// let count = 0;
// for (const item of arg) {
//     if (typeof item === "number") {
//         count += 1;
//        total += item;
//     }
// }
// return total / count;
// };

// console.log(caclculateAverage(5, 6, 8, "hello"));

//task-4
// 
//  Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function getNeighborSum(inputArr) {
//     let newArr = [];
// for (let i = 0; i < inputArr.length - 1; i++) {
//    newArr.push(inputArr[i] + inputArr[i + 1]);
//     }
//     return newArr;
// }


// console.log(getNeighborSum(someArr));


//Task - 5
//  Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];




// function findSmallestNumber(numbers) {

//     if (!Array.isArray(numbers)) {
//         return 'Sory, it is not an array!';
//     }
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//      if (smallestNumber > number) {
//         smallestNumber = number;
//      }

//     }
//     return smallestNumber;
//     }
    
//     const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//     findSmallestNumber();
//     console.log(findSmallestNumber(numbers));


//Task-6
// 
//  Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//    const arr = string.split(' ');
//    let longestWord = arr[0];
//     for (const word of arr) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//   return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


//Task-9
// 
// 
//  Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//    read(a, b) {
//     this.a = a;
//     this.b = b;
//    },

//    exist() {
//     return this.a !== undefined && this.b !== undefined;
//    },

//     sum() {
//         if (!this.exist()) {
//             return "No such properties";
//         }
//         return this.a + this.b;
//     },

//     mult() {
//         if (!this.exist()) {
//             return "No such properties";
//         }
//         return this.a + this.b;
//     },
// };




// console.dir(calculator);
// calculator.read(5, 10);
// console.log(calculator.exist());
// console.log(calculator.sum());



