// 1 --- у тебе є обєкт videoPlayer, який зберігає список фільмів і дозволяє запускати обраний фільм.
// але в методах поки не викор this, хоча це необхідно

// Рефвктори методи так, щоб усі звернення до властивостей і методів обєкта викор this


// const videoPlayer = {
//     movies: ["Inception", "Interstellar", "The Matrix"],

//     hasMovie(movieName) {
//         return this.movies.includes(movieName);
//     },

//     play(movieName) {
//         const available = this.hasMovie(movieName);
    

//     if (!available) {
//         return `Movie "${movieName}" is not available.`;
//     }

//     return `Now playing: "${movieName}"`;
// }
// };




// 2 ---- method call ()
// є функція introduce, яка виводить імя і професію людини. 
// Але вона не належить жодному обєкту

// 1) Створи 2 обєкти з полями name і job
// 2) використай метод call, щоб викликати функцію introduce від імені кожного обєкта


// function introduce() {
//     console.log(`Привіт! Я ${this.name}, я працюю як ${this.job}.`);
// }

// const person1 = {
//     name: "Олена",
//     job: "дизайнер"
// };


// const person2 = {
//     name: "Ігор",
//     job: "Програміст"
// };

// introduce.call(person1);
// introduce.call(person2);


// 3 ---- method apply ()
// є функція greet яка приймає два аргументи: greeting i punctuation

// завдання:
// 1) створи обєкт user з полем name
// 2) використай apply, щоб виклик  ф від імені user і передати аргументи


// function greet(greeting, punctuation) {
//     console.log(`${greeting}, я ${this.name}${punctuation}`);

// }

// const user = {
//     name: "Софія"
// };

// greet.apply(user, ["Привіт", "!"]);



// 4 --- method bind
//  у тебе є обєкт translator, який має метод translate. 
//  Цей метод повертає привітання з іменем. 

//  завдання:
//  1) передай метод translate у функцію showGreeting
//  2) виправ помилку втрати контексту за допомогою .bind 


// const translator = {
//     name: "Марія",
//     translate() {
//         return `Привіт, я - ${this.name}, ваш перелкладач.`;
//     }
// };

// function showGreeting(callback) {
//     const message = callback();
//     console.log(message);
// }

// showGreeting(translator.translate.bind(translator));

// 5 --- прототипне наслідування

// Створи обєкт animal з властивістю canBreathe, і на його основі 
// створи обєкт dog, 
// який успадковує цю властивість та має свою власну - breed

// const animal = {
//     canBreathe: "true"
// };

// const dog = Object.create(animal);

// dog.breed = "Labrador";

// console.log(dog.canBreathe);
// console.log(dog.hasOwnProperty("caBreathe"));
// console.log(animal.hasOwnProperty("canBreathe"));
// console.log(dog.breed);


// 6 ---- ланцюжок прототипів


// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }


// 7 --- побудуй правильний прототипний ланцюг

// Створи обєкт grandparent, parent, child, 
// щоб вони були повязані в ланцюг прототипів в такому порядку:
// grandparent -> parent -> child


// const grandparent = {
//     origin: "Ukraine"
// };

// const parent = Object.create(grandparent);
// parent.lastName = "Kovalenko";

// const child = Object.create(parent);
// child.nickname = "Kolia";


// console.log(grandparent.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));
// console.log(grandparent.isPrototypeOf(child));
// console.log(child.hasOwnProperty('nickname'));
// console.log(parent.hasOwnProperty('lastName'));
// console.log(grandparent.hasOwnProperty('origin'));


// 8 --- створення класу і його екземпляра

// class User {
//     // Тіло класу
//   }
  
//   const mango = new User();
//   console.log(mango); // {}
  
//   const poly = new User();
//   console.log(poly); // {}


// 9 --- створи клас book, який має метод constructor, що приймає
// три параметри: 
//  - title 
//  - author 
//  - year 

//  клас повинен створювати обєкт з однойменними властивостями:
//  title, author, year


//  class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//  }
  

// 10 --- обєкт параметрів
// рефакторинг

// Створи клас Product, який має метод constructor, 
// що приймає один обєкт параметрів з такими властивостями:

// - name - назва товару
// - price - ціна товару
// - inStock - чи є товар в наявності (логічне true або false)


// class Product {
//     constructor(params) {
//         this.name = params.name;
//         this.price = params.price;
//         this.inStock = params.inStock;
//     }
// }


// 11 --- методи класу

// Гра створи своїх героїв 
// Уявімо, що ти створюєш героїв для компюьерної гри.
// Кожен герой має імя, рівень та здоровя.
// Твоє завдання - дописати код

// class Hero {
//     constructor(params) {
//         this.name = params.name;
//         this.level = 1;
//         this.health = 100;
//     }

//     getInfo() {
//     console.log(`Імя: ${this.name}, Рівень: ${this.level}, Здоровя ${this.health}`);

//     }

//     levelUp() {
//     this.level += 1;
//     }

//     takeDamage(amount) {
//     this.health -= amount;
//     }
// }

// let hero = new Hero({ name: "Leo"});

// hero.getInfo();
// hero.levelUp();
// hero.takeDamage(30);
// hero.getInfo();


// 12 --- приватна властивість

// зроби email приватним у класі user 
// і створи методи для читання та зміни його значення

// class User {
//     #email;

//     constructor(params) {
//         this.#email = params.email;
//         this.name = params.name;
//     }

// getEmail() {
//     return this.#email;
// }


// changeEmail(newEmail) {
//     this.#email = newEmail;
// }
// }


// 13 --- рефакторинг 
// Виконай рефакторинг класу user. 
// додай до нього приватні властивості name , email, age 
// Стандартизуй публічний інтерфес класу,
// замінивши всі прямі доступи на геттери і сеттери

// class User {
//     #name;
//     #email;
//     #age;

//     constructor(params) {
//         this.#name = params.name;
//         this.#email = params.email;
//         this.#age = params.age;
//     }

//     get name() {
//         return this.#name;
//     }

//     set name(newName) {
//         this.#name = newName;
//     }


//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }

//     get age() {
//     return this.#age;
//     }

//     set age(newAge) {
//         this.#age = newAge;
//     }
// }


// 14 --- статичний метод і властивість
// Клас user та перевірка мінімального віку:
// 1) створи клас User;
// 2) додай статичну властивість, яка дорівнює 18
// 3) додай статичний метод checkAge(age), який:
// - якщо вік менше minAge повертає
//  "Access denied: Age is below minimum"
// - Інакше - повертає "Access granted"

// class User {
//     static minAge = 18;
//     age;

//     static checkAge(age) {
//         if (age < User.minAge) {
//             return "Access denied: Age is below minimum";
//         }
//     return "Access granted";
//     }
// }

// console.log(User.checkAge(17));
// console.log(User.checkAge(26));





// 15 --- наслідування класів

// Створи клас Employee, який приймає name та email 
// створи клас manager, який наслідується від Employee
// додай до класу manager статичну властивість levels, 
// яка зберігає обєкт

// class Employee {
//     name;
//     email;

// constructo(name, email) {
//     this.name = name;
//     this.email = email;
// }

// get name() {
//     return this.name;
// }

// set name(newName) {
//     this.name = newName;
// }

// get email() {
//     return this.email;
// }

// set email(newEmail) {
//     this.email = newEmail;
// }
// }

// class Manager extends Employee {
//     static levels = {
//         JUNIOR: "junior",
//         MIDDLE: "middle",
//         SENIOR: "senior"
//     }
// }


// 16 --- дочірні класи / списки дозволених дій

// 1) створи клас Moderator,  який приймає обєкт params у конструкторі
// з полями email і allowedActions
// 2)  додай публічну властивість allowedActions - масив з діями
// наприклад ["delete", "edit"];
// 3) додай публічний метод allow(action) - 
// додає дію до списку allowedActions,
// якщо її немає
// 4) додай метод canPerform(action) - поевртає true, якщо дія є 
// в масиві, якщо нема -false.


// class Moderator {
//     constructor(params) {
//         this.email = params.email;
//         this.allowedActions = [];
//     }

//     allow(action) {
//        if  (!this.allowedActions.includes(action)) {
//         this.allowedActions.push(action);
//        }
//     }
     
//     canPerform(action) {
//         return this.allowedActions.includes(action) 
    
//         }
//     }















