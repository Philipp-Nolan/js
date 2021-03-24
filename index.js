const firstInput = prompt('Введите первое число');
const secondInput = prompt('Введите второе число');

let msg = 'Числа равны !';
let err = 'Введите корректное число !';
let num = ': является больше ! ';

// Задание 1


maximumValue(firstInput, secondInput);
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {b}
 */
function maximumValue(a, b) {
  if (a === b) return msg;
  if (isNaN(a - b)) return err;
  if (a > b) return a;
  return b;
}
console.log(maximumValue(firstInput, secondInput));

// Задание 2

// minValue(firstInput, secondInput);
// /**
//  * 
//  * @param {number} a 
//  * @param {number} b 
//  * @returns {a}
//  */
// function minValue(a, b) {
//   if (isNaN(a - b)) return err;
//   if (a === b) return msg;
//   if (a < b) return b;
//   return a;
// }
// console.log(minValue(firstInput, secondInput));

// Задание 3

let yes = 'Четное';
let no = 'Нечетное';

parityValue(firstInput);
/**
 * 
 * @param {number} a 
 * @returns {yes | no}
 */
function parityValue(a) {
  if (a % 2 === 0) return yes;
  return no;
}
console.log(parityValue(firstInput));

// Задание 4
// const thirdInput = prompt('Введите третье число');
// discriminantValue(firstInput, secondInput, thirdInput);
// function discriminantValue(a, b, c) {
//   D = b ** 2 - 4 * a * c;
// }
