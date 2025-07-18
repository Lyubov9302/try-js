

// 1 - отримай body елемент і виведи його в консоль;
const body = document.body;
console.log(`1:`, body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const  heading = document.querySelector('h1');
console.log(`2:`, heading);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(`3:`, list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll('[data-topic]');
console.log(`4:`, dataTopic);


// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(`5:`, dataTopic[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(`6:`, dataTopic[dataTopic.length - 1]);


// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log(`7:`, heading.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titlesAll = document.querySelectorAll('h3');
titlesAll.forEach(item => console.log(`8:`, item));


// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
titlesAll.forEach(item => item.classList.add('.active'));

console.log(`9:`, titlesAll);


// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navLiEl = document.querySelector('[data-topic="navigation"]');
console.log(`10:`, navLiEl);


// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navLiEl.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".


navLiEl.lastElementChild.textContent = "Я змінив тут текст!";



// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент 
// у якого атрибут data-topic має значення,
//  яке зберігається у змінній currentTopic і виведи його в консоль;


const currentTopic = "manipulation";
const topicLiEL = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(`13:`, topicLiEL);


// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

topicLiEL.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedHeading = document.querySelector('.completed');
console.log(`15:`, completedHeading);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

completedHeading.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const newP = document.createElement('p');
newP.textContent = "Об'єктна модель документа (Document Object Model)";

heading.after(newP);


// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" 
// а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево -
//  це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, 
// потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку



const newLi = document.createElement('li');
newLi.innerHTML = '<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>'
list.append(newLi);



// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

newLi.insertAdjacentHTML('beforeend', '<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>');

// 20 - очисти список

// list.remove();

list.innerHTML= ' ';


// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const numberContainerEl = document.querySelector('.number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const elements = [];
for (let i = 0; i < 100; i++) {
const div = document.createElement('div')
div.classList.add('number')

const randomNum = randomNumber();
div.textContent = randomNum;
if (randomNum % 2 === 0) {
    div.classList.add('even')
} else {
    div.classList.add('odd')
}
elements.push(div);
}

numberContainerEl.append(...elements);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.


const form = document.querySelector('.js-contact-form');
const input = document.querySelector('.js-username-input')
const checkbox = document.querySelector('.js-policy-checkbox');
const span = document.querySelector('.js-username-output');

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

input.addEventListener('input', () => {
    const value = input.value.trim();


    if (value.length > 6) {
      input.classList.add('success');
      input.classList.remove('error'); 
    } else {
        input.classList.add('error');
        input.classList.remove('success')
    }

    // span.textContent = value ? value : "Anonymous";
});



// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`


input.addEventListener('focus', () => {
    if (input.value.trim().length <= 6) {
        input.style.outline = "3px solid red";
    } else {
        input.style.outline = "3px solid green";
    }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener('blur', () => {
    if (input.value.trim() === "") {
        input.style.outline = "3px solid red";
    } else {
        input.style.outline = "3px solid green";
    }
});


// 4 - При події `submit`. Відміни поведінку браузера по замовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
e.preventDefault();




}







// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
