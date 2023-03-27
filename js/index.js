let min = 10;
// let max = 100;

// let num = Math.round(Math.random() * (max - min) + min);

// console.log(num);

// // ========================================
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.error("Not enough money");
//       return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     let arrayTransactions = this.transactions;
//     for (let i = 0; i < arrayTransactions.length; i += 1) {
//       if (arrayTransactions[i].id === id) {
//         return arrayTransactions[i];
//       }
//     }
//     return `There is not such transaction`;
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let arrayTransactions = this.transactions;
//     let sum = 0;
//     for (let i = 0; i < arrayTransactions.length; i += 1) {
//       if (arrayTransactions[i].type === type) {
//         sum += arrayTransactions[i].amount;
//       }
//     }
//     return sum;
//   },
// };

// console.log(account.getBalance());
// account.createTransaction();
// account.deposit(10000);
// account.withdraw(100);
// account.deposit(120);
// account.withdraw(55);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal("withdraw"));
// console.log(account.getTransactionTotal("deposit"));

// ===================================

// function checkObj(obj, checkProp) {
//   // Змініть код лише під цим рядком
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
//   // Змініть код лише над цим рядком
// }

// console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

// ====================================
// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// ==========================

// let min = 25;
// let max = 40;

// let randomNum = Math.floor(Math.random() * (max - min) + min);
// console.log(randomNum);

// ===================== METHOD forEach() ===============

// let numbers = [2, 4, 5, 6, 10];
// let newArray = [];

// numbers.forEach((value) => {
//   value = value * 2;
//   newArray.push(value);
// });

// console.log(numbers);
// console.log(newArray);

// ===================== METHOD map() ===============

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// let lettersInUpperCase = planets.map((word) => word.toUpperCase());

// console.log(lettersInUpperCase);

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase);

// ================================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map((obj) => obj.name);
// console.log(names);

//  ============ METHOD flatMap() =============
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);

//  ============ METHOD filter() =============

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

// =====================================

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// let betterStudents = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(betterStudents);

// let worstStudents = students.filter((student) => student.score < LOW_SCORE);
// console.log(worstStudents);

// let normalStudents = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(normalStudents);

// =========================== METHOD reduce() =======================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// let totalScore = students.reduce((preveousTotalScore, student) => {
//   return preveousTotalScore + student.score;
// }, 0);
// console.log(totalScore);

// const averageScore = totalScore / students.length;

// ==================================================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// let countLikes = (tweets) => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets));

// =======================================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// let getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// let tags = getTags(tweets);
// console.log(tags);

// ================

// let getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// let countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// ============

// let filteredArray = tags.filter(
//   (element, index, array) => array.indexOf(element) === index
// );

// console.log(filteredArray.length);

// =====================METHOD sort() ==================

// const scores = [61, 19, 74, 7, 35, 92, 56];

// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores);

// ===========================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// let bestScore = [...students].sort((a, b) => a.name.localeCompare(b.name));

// console.log(bestScore);

// =================================

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// // let sortedArr = [...students]
// //   .sort((a, b) => a.score - b.score)
// //   .map((student) => student.name);
// // console.log(sortedArr);

// [
//   "математика",
//   "фізика",
//   "інформатика",
//   "математика",
//   "фізика",
//   "біологія",
//   "література",
//   "інформатика",
// ];

// let arrayOfUniqueSubjects = students
//   .flatMap((student) => student.courses)
//   .filter((subject, index, array) => array.indexOf(subject) === index)
//   .sort((firstSubject, secondSubject) =>
//     firstSubject.localeCompare(secondSubject)
//   );

// console.log(arrayOfUniqueSubjects);

// =========================================

// /*
//  * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
//  */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(array, stoneName) {
//   for (let stone of array) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Not found";
// }

// console.log(calcTotalPrice(stones, "Щебень"));

// =================================
// Опис завдання: Напишіть функцію, яка повертає вкладений масив виду `[[key, value], [key, value]]`.
// Очікуваний результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

// const data = { a: 1, b: 2 };

// // function makePairs(obj) {
// //   return Object.entries(obj);
// // }

// function makePairs(obj) {
//   const newArr = [];

//   const keys = Object.keys(obj);

//   for (let key of keys) {
//     // const childArr = [];
//     // childArr.push(key, obj[key]);

//     newArr.push([key, obj[key]]);
//   }
//   return newArr;
// }

// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// ================================================

// const filter = function (array, test) {
//   let newArray = [];

//   for (let arg of array) {
//     console.log(arg);
//     if (test(arg)) {
//       newArray.push(arg);
//     }
//   }

//   return newArray;
// };

// const array1 = [2, 3, 4, 2, 5, 6, 7];

// const callback = function (value) {
//   return value > 3;
// };
// const callback2 = function (value) {
//   return value < 3;
// };

// console.log(filter(array1, callback));
// console.log(filter(array1, callback2));

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const callback3 = function (fruit) {
//   return fruit.quantity >= 150;
// };

// console.log(filter(fruits, callback3));

// ==================================================

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     return `${name} make ${dish}`;
//   };

//   return makeDish;
// };

// const mango = makeSheff("Mango");
// const kiwi = makeSheff("Kiwi");
// console.log(mango("potato"));
// console.log(kiwi("salad"));

// ==============================================

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };s

// const rounder1 = rounder(2);

// console.log(rounder1(3.5674));

// =======================================

// const myLibFactory = function () {
//   let value = 10;

//   return {
//     add(num) {
//       return (value += num);
//     },
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();
// console.log(myLib.add(5));

// ======================================

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       return (salary += amount);
//     },
//     lower(amount) {
//       return (salary += amount);
//     },
//     current() {
//       return `Current salary ${employeeName} is ${salary}`;
//     },
//   };
// };

// const salary = salaryManagerFactory("Mango", 5000);
// console.log(salary.raise(3000));

// ==================================

// const arr = [4, 6, 7, 7, 8, 9, 8, 1, 2];

// let newArr = arr.sort((a, b) => a - b);

// console.log(newArr);

// const doMath = function (a, b, test) {
//   let result = test(a, b);
//   return result;
// };

// const add = function (x, y) {
//   return x + y;
// };

// const mult = function (x, y) {
//   return x * y;
// };

// console.log(doMath(5, 10, mult));

// =================================
// function centuryFromYear(year) {
//   let centuryCount = 0;
//   while (year > 0) {
//     year = year - 100;

//     centuryCount = centuryCount + 1;
//   }
//   return centuryCount;
// }

// centuryFromYear(1835);
// ==================================

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(evenOrOdd(7));

// ===================================

// function getCount(str) {
//   let newStr = "";

//   for (let i = 0; i < str.length; i += 1) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       newStr += str[i];
//     }
//   }

//   return newStr.length;
// }

// console.log(getCount("abracadabra"));

// ==============================================

// const objA = {
//   x: 6,
//   showX() {
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showY() {
//         console.log(this.y, this);
//       },
//     };

//     objB.showY();
//   },
// };

// objA.showX();

// =============================================

// const array1 = [1, 2, 3, 4, 5];

// const newArray = array1.map((el, index, array) => el * 2);
// console.log(newArray);

// =========================================

// const players = [
//   { id: "player-1", name: "Mango", points: 54 },
//   { id: "player-2", name: "Poly", points: 28 },
//   { id: "player-3", name: "Kiwi", points: 98 },
//   { id: "player-4", name: "Ajax", points: 37 },
// ];

// const newPlayesrArr = players.map((player) =>
//   player.id === "player-3" ? { ...player, points: player.points + 20 } : player
// );

// console.log(newPlayesrArr);
// console.log(players);

// ===================================
// const array = [1, 2, 3, 4, 5];

// const filteredArr = array.filter((el) => el > 2);
// console.log(filteredArr);

// ===================================

// const players = [
//   { id: "player-1", name: "Mango", points: 54, online: true },
//   { id: "player-2", name: "Poly", points: 28, online: true },
//   { id: "player-3", name: "Kiwi", points: 98, online: false },
//   { id: "player-4", name: "Ajax", points: 37, online: false },
// ];

// const filteredPlayers = players.filter((player) => (player.name = "Kaka"));

// console.log(players);

// =================================

// const array = [1, 2, 3, 3, 4, 5, 1];

// const filteredArr = array.filter(
//   (el, index, array) => array.indexOf(el) === index
// );
// console.log(filteredArr);

// =====================================

// const players = [
//   { id: "player-1", name: "Mango", points: 54, online: true },
//   { id: "player-2", name: "Poly", points: 28, online: true },
//   { id: "player-3", name: "Kiwi", points: 98, online: false },
//   { id: "player-4", name: "Ajax", points: 37, online: false },
// ];

// const find = (players, playerId) => players.find(({ id }) => id === playerId);

// console.log(find(players, "player-4"));

// =====================================

// const numbers = [5, 10, 15, 20, 13];

// const totalSum = numbers.reduce((total, num) => {
//   return total + num;
// }, 0);

// console.log(totalSum);

// ======================================

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, salary) => total + salary,
//   0
// );
// console.log(totalSalary);

// =========================================

// const players = [
//   { id: "player-1", name: "Mango", timeOlayed: 310, points: 54, online: true },
//   { id: "player-2", name: "Poly", timeOlayed: 470, points: 28, online: true },
//   { id: "player-3", name: "Kiwi", timeOlayed: 150, points: 98, online: false },
//   { id: "player-4", name: "Ajax", timeOlayed: 220, points: 37, online: false },
// ];

// const totalTime = players.reduce(
//   (total, { timeOlayed }) => total + timeOlayed,
//   0
// );

// console.log(totalTime);

// ==========================================

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalSum = cart.reduce(
//   (totalSum, { price, quantity }) => totalSum + price * quantity,
//   0
// );

// console.log(totalSum);

// =========================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["css", "react"] },
//   { id: "003", likes: 5, tags: ["js", "nodejs", "java"] },
// ];

// const newArr = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// // console.log(newArr);

// const newObj = newArr.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? (acc[tag] += 1) : 1 }),
//   {}
// );
// console.log(newObj);

// ===========================================

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (let pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return makePizza(pizzaName);
//       }
//     }

//     return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("kaka", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ===========================

// const array = [2, 5, 7, 2, 33, 1, 13];

// array.sort();

// const sortedArray = array.sort((a, b) => a - b);
// console.log(sortedArray);

// ===================================

// const players = [
//   { id: "player-1", name: "Mango", timeOlayed: 310, points: 54, online: true },
//   { id: "player-2", name: "Poly", timeOlayed: 470, points: 28, online: true },
//   { id: "player-3", name: "Kiwi", timeOlayed: 150, points: 98, online: false },
//   { id: "player-4", name: "Ajax", timeOlayed: 220, points: 37, online: false },
// ];

// // const sortedByTime = [...players].sort(
// //   ({ timeOlayed: currentTime }, { timeOlayed: nextTime }) =>
// //     currentTime - nextTime
// // );

// // console.log(sortedByTime);

// const sortedByName = [...players].sort((currentPlayer, nextPlayer) =>
//   currentPlayer.name[0].localeCompare(nextPlayer.name[0])
// );

// console.log(sortedByName);

// ==================================

// const arr = [34, [3, [24]], 12, 14];

// const newArr = arr.flat(2);
// console.log(arr);
// console.log(newArr);

// =================================

// const numbers = [1, 5, 2, 4, 3, 15, 13, 22, 45];

// const newArr = numbers
//   .map((num) => num * 2)
//   .filter((num) => num > 10)
//   .sort((a, b) => a - b);

// console.log(newArr);

// ================================

// const players = [
//   { id: "id-1", tag: "Mango", isOline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOline: true, rank: 400 },
// ];

// const sortedPlayers = players
//   .filter(({ isOline }) => isOline)
//   .sort(
//     ({ rank: rankOfCurrentPlayer }, { rank: rankOfNextPlayer }) =>
//       rankOfCurrentPlayer - rankOfNextPlayer
//   );

// console.log(sortedPlayers);

// =====================================

// function changeEven(numbers, value) {
//   const newArr = [];

//   numbers.forEach((el) => {
//     if (el % 2 === 0) {
//       newArr.push(el + value);
//     } else {
//       newArr.push(el);
//     }

//     return newArr;
//   });

//   return newArr;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// =================================

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const totalTimeOnegame = player.playtime / player.gamesPlayed;
//   console.log(totalTimeOnegame);

//   return acc + totalTimeOnegame;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// ==================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);

// ======================================

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getSortedFriends = (users) => {
//   const arr = users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

//   return arr;
// };

// console.log(getSortedFriends(users));

// ========================================

// function betterThanAverage(classPoints, yourPoints) {
//   return (
//     yourPoints >
//     classPoints.reduce((acc, num) => acc + num, 0) / classPoints.length
//   );
// }

// console.log(betterThanAverage([2, 3], 5));

// ===========================================

// const user = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };

// const users = [{ age: 17 }, { age: 20 }, { age: 23 }, { age: 30 }];

// console.log(user.canJoin);

// const soldiers = users.filter((el) => user.canJoin(el));

// console.log(soldiers);

// ==============================================

// const camelize = (str) => {
//   let array = str
//     .split("-")
//     .map((word, index) =>
//       index === 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`
//     )
//     .join("");

//   return array;
// };

// console.log(camelize("background-color"));
// camelize("list-style-image");
// camelize("-webkit-transition");

// ========================
// let arr = [5, 3, 8, 2, 99, 4, 15];

// function filterRange(arr, a, b) {
//   arr.forEach((element, index) => {
//     if (element < a || element > b) {
//       arr.splice(index, 1);
//     }
//   });
// }

// filterRange(arr, 1, 4);
// console.log(arr);

// ============================

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// =================================

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = (arr) => {
//   const array = [...arr].sort((currentWord, nextWord) =>
//     currentWord.localeCompare(nextWord)
//   );
//   return array;
// };

// console.log(sorted(arr)); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без змін)

// ==================================

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ivan, petro, mariya];

// const arrOfNames = users.map((user) => user.name);

// console.log(arrOfNames);

// =======================================

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ivan, petro, mariya];

// let usersMapped = users.map((user) => ({
//   fullName: user.name + " " + user.surname,
//   id: user.id,
// }));

// console.log(usersMapped);

// =========================================

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [petro, ivan, mariya];

// const sortByAge = (arr) => {
//   arr.sort((a, b) => a.age - b.age);
// };

// sortByAge(arr);

// console.log(arr);

// ====================================

// let min = 10;
// let max = 100;

// let num = Math.round(Math.random() * (max - min) + min);

// console.log(num);

// ====================================

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// const getAverageAge = (array) => {
//   const averageAge = array.reduce((acc, user) => acc + user.age, 0);

//   return averageAge / array.length;
// };

// console.log(getAverageAge(arr));

// ====================================

// function unique(arr) {
//   const uniqueArr = arr.filter(
//     (el, index, array) => array.indexOf(el) === index
//   );

//   return uniqueArr;
// }

// let strings = [
//   "Привіт",
//   "Світ",
//   "Привіт",
//   "Світ",
//   "Привіт",
//   "Привіт",
//   "Світ",
//   "Світ",
//   ":-O",
// ];

// console.log(unique(strings));

// =============================================

// let users = [
//   { id: "іван", name: "Іван Іванко", age: 20 },
//   { id: "ганна", name: "Ганна Іванко", age: 24 },
//   { id: "петро", name: "Петро Петренко", age: 31 },
// ];

// const groupById = (users) => {
//   const newObj = users.reduce((acc, user) => {
//     return {
//       ...acc,
//       [user.id]: user,
//     };
//   }, {});

//   return newObj;
// };

// let usersById = groupById(users);
// console.log(usersById);

// ===========================================

// const camelize = (str) => {
//   const newStr = str
//     .split("-")
//     .map((word, index) =>
//       index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");

//   return newStr;
// };

// console.log(camelize("background-color"));

// ===========================================

// let arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//   const newArr = arr.filter((num) => num >= a && num <= b);

//   return newArr;
// };

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

// ============================================

// const arr = [1, 2, 3, 4, 5];

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply(arr, 5));

// ==================================

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     console.log(n);
//     return x * pow(x, n - 1);
//   }
// }

// pow(2, 3);
// console.log(pow(2, 3)); // 8

// ====================================

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// // function makeMessage(callback) {
// //   console.log(callback);
// //   // callback() - це виклик методу getFullName без об'єкта
// //   console.log(`Обробляємо заявку від ${callback()}.`);
// // }

// customer.getFullName();

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// =======================================

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

// console.log(multiply([1, 2, 3, 4, 5, 6], 3));

// =========================================

// Налаштування
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let contact of contacts) {
//     if (name === contact.firstName) {
//       if (contact.hasOwnProperty(prop)) {
//         return contact[prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// console.log(lookUpProfile("Harry", "likes"));

// ===========================РЕКУРСІЯ=================

// function countdown(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const countArray = countdown(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }
// }

// console.log(countdown(5, 10));

// ================================================

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Mango",
// };

// greetGuest.apply(mango, ["Hello"]);

// ==========================================

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };

// const steamGreater = greet.bind(steam);

// console.log(steamGreater("Poli"));

// ==========================================

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   showThis() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const makeMessage = (callback) => {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// };

// const newMeth = customer.showThis.bind(customer);

// makeMessage(newMeth);

// ====================================

// function sayHi(greeting) {
//   console.log(`${this.name}, ${greeting}`);
// }

// const poli = {
//   name: "Poli",
// };

// sayHi.apply(poli, ["hello", "my World"]);

// ========================================

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// const callback1 = customer.getFullName.bind(customer);
// makeMessage(customer.getFullName.bind(customer));

// ============================================

// const korol = {
//   live: 67,
// };

// const animal = Object.create(korol);

// animal.legs = 4;
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// ===============================

// class User {
//   #email;

//   constructor(name, email) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User("Mango", "mango97@gmail.com");

// console.log(mango.email);

// =====================================

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(User.Roles);

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor

// ======================================

// class User {
//   #email;

//   constructor(email) {
//     this.email = email;
//   }

//   // get email() {
//   //   return this.#email;
//   // }

//   // set email(newEmail) {
//   //   this.#email = newEmail;
//   // }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email);

// ====================================

// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     return this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "editor@gmail.com", posts: [] });

// console.log(editor.posts);

// editor.addPost("hello everyone");
// console.log(editor.posts);

// ==============================================

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     return this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     return this.items.forE((item, index) => {
//       if (item === itemToRemove) {
//         return this.items.splice(index, 1);
//       }
//     });
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ====================================

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     return (this.value += str);
//   }

//   padStart(str) {
//     return (this.value = str + this.value);
//   }

//   padBoth(str) {
//     return (this.value = str + this.value + str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// =============================================

// class User {
//   // Оголошення та ініціалізація статичної властивості

//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// ========================================
class Car {
  // Change code below this line
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.Price.MAX_PRICE) {
      return (this.#price = newPrice);
    }
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
