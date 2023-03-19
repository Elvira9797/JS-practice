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

const students = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

// let sortedArr = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);
// console.log(sortedArr);

[
  "математика",
  "фізика",
  "інформатика",
  "математика",
  "фізика",
  "біологія",
  "література",
  "інформатика",
];

let arrayOfUniqueSubjects = students
  .flatMap((student) => student.courses)
  .filter((subject, index, array) => array.indexOf(subject) === index)
  .sort((firstSubject, secondSubject) =>
    firstSubject.localeCompare(secondSubject)
  );

console.log(arrayOfUniqueSubjects);
