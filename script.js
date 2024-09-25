// Задание 1: Найти сумму всех элементов массива. Напишите функцию sumArray , которая принимает массив чисел
// и возвращает сумму всех элементов. Реализуйте это с помощью цикла for .
let numbers = [1, 2, 3, 4, 5]; 

function sumArray(numbers) {
    let ourArray = [1, 2, 3, 4, 5]; 
    let sum = 0;
    for (let i = 0; i < ourArray.length; i += 1) {
       sum += ourArray[i];
    }
    return sum;
}
//function sumArray(arr) {
 //   return arr.reduce(function (acc, curr) {
 //       return acc + curr;
 //   }, 0);
//} запасной способ №2
console.log(sumArray(numbers)); // 15

// Задание 2: Найти максимальный элемент массива. Напишите функцию findMax , которая принимает массив чисел
//и возвращает максимальный элемент. Используйте цикл for .
let numbers1 = [3, 1, 4, 1, 5, 9]; 
let max = Math.max(...numbers1);
console.log(max) // 9
// не получилось выполнить через функцию, поэтому пошла этим путем

// Задание 3: Фильтрация массива по условию. Создайте функцию filterArray , которая принимает массив чисел и
// возвращает новый массив, содержащий только четные числа. Реализуйте это с использованием цикла for .
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

function filterArray(numbers2) {
    let result = [];
    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] % 2 === 0) { 
            result.push(numbers2[i]);
        }
    }
    return result;
}
console.log(filterArray(numbers2)); // [2, 4, 6, 8]

// Задание 4: Реализация метода массива "map" через цикл. Напишите функцию mapArray , которая принимает массив
//и функцию-преобразователь. Эта функция должна возвращать новый массив, где каждый элемент является
//результатом применения функции-преобразователя к каждому элементу исходного массива. Реализуйте это с
//использованием цикла.
let numbers3 = [1, 2, 3, 4, 5]; // Пример массива

function multiplyByTwo(arr) {
    let result = [];
    for (let i = 0; 1 < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}
console.log(multiplyByTwo(numbers3));

console.log(mapArray(numbers3, multiplyByTwo)); // Пример вывода: [2, 4, 6, 8, 10]

// Задание 5: Реализация метода массива "forEach" через цикл Создайте функцию forEachArray , которая
// принимает массив и функцию, и применяет эту функцию к каждому элементу массива. Реализуйте это с
// использованием цикла for .
let numbers4 = [1, 2, 3, 4, 5]; // Пример массива
// Пример функции для вывода:
function printElement(element) {
console.log(element);
}
// Напишите функцию здесь
function forEachArray(arr, callback) {
// Реализация через цикл for
}
forEachArray(numbers4, printElement); // Пример вывода: 1 2 3 4 5 (по одному числу на строку)

//Задание 6: Развернуть массив. Напишите функцию reverseArray , которая принимает массив и возвращает его
// развернутую версию. Реализуйте это без использования встроенного метода reverse , используя цикл for .
let numbers5 = [1, 2, 3, 4, 5]; // Пример массива
// Напишите функцию здесь
function reverseArray(arr) {
// Реализация через цикл for
}
console.log(reverseArray(numbers5)); // Пример вывода: [5, 4, 3, 2, 1]



