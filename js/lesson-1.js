
// 1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt('Введіть число'));
// number === 10 ? alert('Вірно') : alert('Невірно');
// console.log(number);


// 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"


// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min<15) {
//     alert(`${min} in first quarter`);
// } else if(min>=15 && min<30) {
//     alert(`${min} in second quarter`);
// } else if(min>=30 && min<45) {
//     alert(`${min} in third quarter`);
// } else {
//     alert(`${min} in fourth quarter`);
// }


// 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// let number = prompt("Введіть, будь ласка, число від 1 до включно");
// number = Number(number);

// switch (number) {
//     case 1:
//         alert(`Число ${number} це зима`);
//         break;
//     case 2:
//         alert(`Число ${number} це весна`);
//         break;
//     case 3:
//         alert(`Число ${number} це літо`);
//         break;
//     case 4:
//         alert(`Число ${number} це осінь`);
//         break;
//     default:
//         alert("Вибачте, але ви маєте ввести значення від 1 до 4 включно");   
// }



// 4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples



// const totalMinutes = Number(prompt('Введіть кількість хвилин'));
// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const modifiedHours = String(hours).padStart(2, 0);
//     const minutes = totalMinutes % 60;
//     const modifiedMinutes = String(minutes).padStart(2, 0);
//     return `${modifiedHours}:${modifiedMinutes}`;
// }

// console.log(formatTime(totalMinutes));



// 5
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"


// const login = prompt('Введіть логін');
// const password = "Я головний";

// if (login === "Адмін") {
//   password = prompt('Введіть пароль');  
// } else {

// }

// 6
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let count = 0; 
// while (count <= 20) {
//     console.log(`${count}`);
//     count += 1;
// }


// 7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//         sum += i; 
//     }
//     }
//     return sum;
// }

// console.log(getNumbers(2, 20));
// console.log(getNumbers(1, 4));


// 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function findMin(a,b) {
// if ( typeof a !== 'Number' || b !== 'Number') {
//     return 'Not a number!';
// }
    
//    return Math.min(a, b);
// }


// console.log(Math.min(i, 1));



// 9
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).



// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//        return confirm('Please confirm');
//     }
// }


// console.log(isAdult(17));



// 10
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else 
//         console.log(i);
//     }
// }

// console.log(fizzBuzz(9));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(15));






