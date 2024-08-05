// 1-vazifa

// 1-question

// let arr = [55, 12, 3, 6, 9, 87, 36];

// arr.sort(function(a, b) {
//   return a - b;
// });

// console.log(arr);

// 1-question

// 2-question

// function rangeSum(arr, start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }

//   let arr = [1, 6, 9, 5, 8, 10, 15];
//   let result = rangeSum(arr, 2, 5); 
//   console.log(result);

//   2-question

// 3-question

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];

// let uniqueValues = [...new Set(arr)];

// console.log(uniqueValues);

// 3-question

// 4-question

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];

// let max = arr.reduce((a, b) => Math.max(a, b));

// let min = arr.reduce((a, b) => Math.min(a, b));

// console.log("Eng katta qiymat:", max);
// console.log("Eng kichik qiymat:", min);

// 4-question

// 5-question

// function rotateArray(arr) {
//     if (arr.length > 0) {
//       let firstElement = arr.shift();
//       arr.push(firstElement); 
//     }
//     return arr;
//   }

//   let inputArray = [1, 5, 8, 9, 10];
//   let outputArray = rotateArray(inputArray);

//   console.log(outputArray);

//   5-question

// 6-question

// function reverseArray(arr) {
//     let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i]);
//     }
//     return reversedArray;
//   }

//   let inputArray = [1, 5, 8, 9, 10];
//   let outputArray = reverseArray(inputArray);

//   console.log(outputArray); 

//   6-question

// 7-question

// let arr = [5, 76, 31, 12, 9, 76, 24];

// let oddNumbers = arr.filter(num => num % 2 !== 0);

// console.log("Toq sonlar:", oddNumbers);

// let oddCount = oddNumbers.length;

// console.log("Toq sonlar soni:", oddCount);

// 7-question

// 8-question

// let arr = [2, 3, 4, 5, 7];

// let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);

// console.log("Indekslar toq bo'lgan elementlar:", oddIndexElements);


// 8-question

// 9-question

// function maxOddIndexValue(arr) {
//     let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);
    
//     let maxOddIndexValue = oddIndexElements.reduce((max, num) => Math.max(max, num), -Infinity);
    
//     return maxOddIndexValue;
// }

// let arr = [2, 3, 4, 5, 7];
// let maxOddValue = maxOddIndexValue(arr);

// console.log("Indekslar toq bo'lgan elementlarning eng katta qiymati:", maxOddValue);


// 9-question

// 11-question

// function firstNOddNumbers(n) {
//     let oddNumbers = [];
//     for (let i = 0; i < n; i++) {
//         oddNumbers.push(2 * i + 1);
//     }
//     return oddNumbers;
// }

// let n = 5;
// let output = firstNOddNumbers(n);
// console.log(output);  


// 11-question


// 14-question

// function minEvenIndexValue(arr) {
//     let evenIndexValues = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             evenIndexValues.push(arr[i]);
//         }
//     }

//     if (evenIndexValues.length === 0) {
//         return null; 
//     }

//     return Math.min(...evenIndexValues);
// }

// let array = [4, 1, 7, 8, 2, 5];
// console.log(minEvenIndexValue(array)); 


// 14-question




// --------------------------------------------------------2-vazifa--------------------------------------


// 1-question

// let employees = [
//     { id: 1, name: "Anvar", age: 30, salary: 50000 },
//     { id: 2, name: "Akbar", age: 25, salary: 55000 },
//     { id: 3, name: "Sobir", age: 40, salary: 60000 }
// ];

// function getSalariesAndSum(employees) {
//     let salaries = employees.map(employee => employee.salary);

//     let totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);

//     return {
//         salaries: salaries,
//         totalSalary: totalSalary
//     };
// }


// let result = getSalariesAndSum(employees);
// console.log(result);


// 1-question


// 2-question

// let employees = [
//     { id: 1, name: "Anvar", age: 30, salary: 50000 },
//     { id: 2, name: "Akbar", age: 25, salary: 55000 },
//     { id: 3, name: "Sobir", age: 40, salary: 60000 }
// ];

// let highestPaidEmployee = employees.reduce((max, employee) => {
//     return employee.salary > max.salary ? employee : max;
// }, employees[0]);

// console.log(highestPaidEmployee.name); 

// 2-question

// 4-question


// let array = [43, 12, 76, 23, 97, 28, 11];

// array.sort((a, b) => a - b);

// console.log(array); 

// 4-question

// 5-question

// let array = [43, 12, 76, 23, 97, 28, 11];

// let minValue = Math.min(...array);

// console.log(minValue); 

// 5-question


// 7-question

let employees = [
    { id: 1, name: "Anvar", age: 30, salary: 50000 },
    { id: 2, name: "Akbar", age: 25, salary: 55000 },
    { id: 3, name: "Sobir", age: 40, salary: 60000 }
];

let inputId = prompt("Id kiriting:");

inputId = parseInt(inputId);

let index = employees.findIndex(employee => employee.id === inputId);

if (index !== -1) {
    console.log("Index:", index);
    console.log("Xodim ma'lumotlari:", employees[index]);
} else {
    console.log("Xodim topilmadi.");
}

7-question