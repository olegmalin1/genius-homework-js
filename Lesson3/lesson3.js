// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
const fruits = [
  { id: 0, name: 'Apple' },
  { id: 1, name: 'Tomat' },
  { id: 2, name: 'Cherry' },
  { id: 3, name: 'Orange' },
];
console.log('---task 1---');
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
console.log('---task 2---');
for (let i = 2; i < 11; i += 2) {
  console.log(i);
}
// -- 3 --
// Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
console.log('---task 3---');
let i = 0;
while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
}
// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
console.log('---task 4---');
let numberCheck;
// do {
//   numberCheck = prompt('Enter a number greater than 100');
// } while (
//   numberCheck !== null &&
//   numberCheck !== '' &&
//   Number(numberCheck) <= 100
// );
// if (numberCheck !== null && numberCheck !== '') {
//   console.log(`You entered: ${numberCheck}`);
// } else {
//   console.log('Input was cancelled or empty');
// }
// -- 5 --
// Вирахуйте середній вік
const girls = [
  { age: 23, name: 'Оля' },
  { age: 29, name: 'Аня' },
  { age: 10, name: 'Юля' },
  { age: 20, name: 'Катя' },
];
console.log('---task 5---');
const avgAge = girls.reduce((sum, girl) => sum + girl.age, 0) / girls.length;
console.log(`Average age: ${avgAge}`);
