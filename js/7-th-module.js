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


// 7 -- список улюблених книг

// Модифікуй код так, щоб у кожному li було не лише імя книги, а й автор

// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger" },
//     { title: "Brave New World", author: "Aldous Huxley" }
//   ];
  
//   const bookList = document.querySelector(".book-list");
  
//   // Створення HTML-рядків із масиву
//   const markup = books
//     .map(book => `<li>${book.title} by ${book.author}</li>`)
//     .join(""); // З'єднуємо масив у суцільний рядок
  
//   bookList.innerHTML = markup;



// 8 --- створи масив обєктів movies, 
// де кожен обєкт має title, director, year.
// потім за допомогою map згенеруй html-розмітку у вигляді li,
// де буде назва фільму, режисер і рік 


// const movies = [
//     { title: "Inception", director: "Christopher Nolan", year: 2010 },
//     { title: "Parasite", director: "Bong Joon-ho", year: 2019 },
//     { title: "The Matrix", director: "Lana & Lilly Wachowski", year: 1999 },
//     { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
//     { title: "Spirited Away", director: "Hayao Miyazaki", year: 2001 }
//   ];
  
//   const movieList = document.querySelector(".movie-list");
  
//   const markup = movies
//   .filter( movie => movie.year > 2000)
//     .map(movie => `<li>"${movie.title}" (${movie.year}), directed by ${movie.director}</li>`)
//     .join("");
  
//   movieList.innerHTML = markup;


// 9 --- вправа на addEventListener

// Зміна кольору при натисканні кнопки
// Напиши скрипт, який змінює колір тексту в заголовку h1
// при натисканні на кнопку. Колір має вибиратисч випадково з масиву

// const button = document.querySelector("#color-btn");

// const title = document.querySelector("#main-title");

// const colors = ['red', 'green', 'blue', 'orange', 'crimson'];

// button.addEventListener('click', () => {
//  const randomColor = colors[Math.floor(Math.random() * colors.length)]
//  title.style.color = randomColor;
// });

// 10 --- обєкт подіі і властивості обєкта події
 

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// 11 -- коли користувач вибирає мову зі списку -
//  текст під ним змінюється відповідно до вибору

//  const select = document.getElementById('language');
// const output = document.getElementById('output');

// select.addEventListener('change', () => {
//   const selectedValue = select.value;
//   output.textContent = `Ваша мова: ${selectedValue}`;
// });


// 12 --- input 


// const input = document.getElementById('nameInput');
// const preview = document.getElementById('preview');

// input.addEventListener('input', () => {
//   preview.textContent = `Попередній перегляд: ${input.value}`;
// });


// 13 --- 
// підрахунок кількості постів у підрозділах

// Завдання: у тебе є список блогів. напиши скрипт, який:
// 1) знайде всі розділи (section.post-category);
// 2)порахує, скільки таких розділв є;
// 3) для кожного розділу:
// - виведе назву категорії (текст з h3)
// - виведе кількість постів (кількість article у цьому розділі)

// const mainRozdil = document.querySelector("#blog");
// const findRozdil = mainRozdil.querySelectorAll(".post-category");

// console.log(`Number of rozdils: ${findRozdil.length}`);

// findRozdil.forEach(rozdil => {
//     const title = rozdil.querySelector("h3").textContent;
//     const numberOfArticles = rozdil.querySelectorAll("article").length;


// console.log(`Category: ${title}`);
// console.log(`Articles: ${numberOfArticles}`);
// });


// 14 ---
// Фільтрація постів за категорією

// 1)є список категорій
// 2) є список усіх постів ( усі в оному місці, з дата category)
// 3) при виборі категорії - на екрані показуються тільки пости цієї категорії

const categoryButtons = document.querySelectorAll('#filters button');
const posts = document.querySelectorAll('#posts article');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;

   posts.forEach(post => {
    const postCategory = post.dataset.category;

    if (selectedCategory === 'all' || postCategory === selectedCategory) {
        post.style.display = 'block';
    } else {
        post.style.display = 'none';
    }
   });
    });
});

 