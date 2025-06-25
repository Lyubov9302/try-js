//1 --- // Знаходимо список за класом
// const list = document.querySelector('.todo-list');

// // Знаходимо кнопку
// const highlightBtn = document.querySelector('#highlight');
// const markAllBtn = document.querySelector('#markAll');

// // Підсвітити тільки виконані завдання
// highlightBtn.addEventListener('click', () => {
//   const doneTask = list.querySelector('.done'); // тільки перший .done
//   if (doneTask) {
//     doneTask.style.backgroundColor = 'lightgreen';
//   }
// });

// // Позначити всі як завершені
// markAllBtn.addEventListener('click', () => {
//   const allTasks = list.querySelectorAll('.task'); // всі .task
//   allTasks.forEach(task => {
//     task.classList.add('done');
//     task.style.textDecoration = 'line-through';
//   });
// });


// 2 --- Змінити колір елемента (заголовка) при кліку на кнопку


// const title = document.querySelector('#title');
// const btn = document.querySelector('#changeColor');

// btn.addEventListener('click', () => {
//     title.style.color = 'tomato';
//     });


// 3 --- виділи всі завдання одним кліком


// const btn = document.querySelector('.highlight-btn');

// btn.addEventListener('click', () => {
//     const tasks = document.querySelectorAll('.task');

//     tasks.forEach(task => {
//         task.style.backgroundColor = 'lightyellow';
//         task.style.fontWeight = 'bold';
//     })
// })


// 4 --- зміна картинки і посилання при кліку


// const link = document.querySelector(".link");
// const image = document.querySelector(".image");
// const button = document.querySelector(".change"); 

// button.addEventListener('click', () => {
//     link.href = 'https://meo.goit.global';
//     link.textContent = 'Новий сайт';

//     image.src = 'https://picsum.photos/id/1011/320/240';
//     image.alt = 'Нова картинка';
// });


// 5 ---- на зміну innerHTML

// Зміна текстк кнопкою
// 1.на сторінці є заголовок і кнопка
// 2.коли ти натискаєш на кнопку -
// заголовок змінюється на інший текст з форматуванням
//  (напр, жирним або курсивом)

// const button = document.getElementById('changeBtn');
// const heading = document.getElementById('greeting');

// button.addEventListener('click', () => {
//     heading.innerHTML = "Ласкаво просимо, <strong>друже!</strong>";
// });



// 6 --- перемикач привітання

// 1)є заголовок і кнопка
// 2)при першому кліку - текст змінюється з "Привіт, гість!" 
// на "Ласкаво просимо, друже!"
// 3)при повторному кліку - повертається назад
// 4) використовуємо innerHTML і змінну для контролю стану

// const button = document.getElementById('toggleBtn');
// const heading = document.getElementById('greeting');

// let isGuest = true;

// button.addEventListener('click', () => {
//     if (isGuest) {
//     heading.innerHTML = "Ласкаво просимо, друже!";
//     } else { 
//         heading.innerHTML = "Привіт, гість!";
//     }

//     isGuest = !isGuest;
// })