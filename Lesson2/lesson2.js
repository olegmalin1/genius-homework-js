// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
console.log('---task 1---');
let numberVar = -3;
if (numberVar > 0) {
  console.log(true);
} else if (numberVar < 0) {
  console.log(false);
} else {
  console.log('Please enter a number greater than 0 or less than 0');
}
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true
console.log('---task 2---');
let stringVar = 'test';
stringVar === 'test' ? console.log(true) : console.log(false);
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
console.log('---task 3---');
// let numberCheck = Number(prompt('Enter a number:'));
let numberCheck = 10;
switch (true) {
  case numberCheck > 10:
    console.log(numberCheck - 5);
    break;
  case numberCheck < 10:
    console.log(numberCheck + 5);
    break;
  default:
    console.log('The number is 10 or not a number');
}
// Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
console.log('---task 4---');
// const monthNumber = prompt('Enter month number between 1 and 12');
const monthNumber = 5;
switch (monthNumber) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;
  case 5:
    console.log('May');
    break;
  case 6:
    console.log('June');
    break;
  case 7:
    console.log('July');
    break;
  case 8:
    console.log('August');
    break;
  case 9:
    console.log('September');
    break;
  case 10:
    console.log('October');
    break;
  case 11:
    console.log('November');
    break;
  case 12:
    console.log('December');
    break;
  default:
    console.log('Please enter a valid month number between 1 and 12');
}

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
console.log('---task 5---');
// const threeDigitNumber = prompt('Enter a three-digit number');
const threeDigitNumber = String(999);
let result = 0;
if (threeDigitNumber.length === 3 && !isNaN(threeDigitNumber)) {
  for (let i = 0; i < threeDigitNumber.length; i++) {
    result = result + Number(threeDigitNumber[i]);
  }
  console.log(`The sum of the digits is: ${result}`);
} else {
  console.log('Please enter a valid three-digit number');
}
