// 2 - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let sortedNums = nums.sort((a, b) => {
//     return a - b
// })

// console.log(sortedNums);



// 4 -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let sortedNums = nums.sort((a, b) => {
//     return b - a
// })

// console.log(sortedNums);



// 5 -- при помощи filter получить числа кратные 3

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let filterNums = nums.filter((value) => {
//     return value % 3 === 0
// })

// console.log(filterNums);



// 6 -- при помощи filter получить числа кратные 10

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let filterNums = nums.filter((value) => {
//     return value % 10 === 0
// })

// console.log(filterNums);



// 7 -- перебрать (проитерировать) массив при помощи foreach()

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// nums.forEach(num => {
//     console.log(num);
// })



// // 8 -- перебрать массив при помощи map() и 
// //      получить новый массив в котором все значения будут в 3 раза больше

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let mappedNums = nums.map(num => {
//     return num * 3
// })

// console.log(mappedNums);



// 10 - создать массив со словами на 15-20 элементов.

let wordsArray = ['Hello', 'my', 'name', 'is', 'Roman', 'i', 'live', 'and', 'work', 'in', 'Lviv', 'this', 'is', 'my', 'favourite', 'city', 'of', 'Ukraine'];

// 11 -- отсортировать его по алфавиту в восходящем порядке.

// let sortedWords = wordsArray.sort((a, b) => (a.toLowerCase() < b.toLowerCase()) ? -1 : 1)

// console.log(sortedWords);



// 12 -- отсортировать его по алфавиту  в нисходящем порядке.



let sortedWords = wordsArray.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1)

console.log(sortedWords);



// 13 -- отфильтровать слова длиной менее 4х символов

let filterLessFour = wordsArray.filter((word) => word.length < 3 ? word : '')

console.log(filterLessFour);



// 14 -- перебрать массив при помощи map() и получить новый массив 
//         в котором все значения будут со знаком "!" в конце

let newArray = wordsArray.map((element) => {
    return element + '!'
})

console.log(newArray);



// 16 Все робити через функції масивів (foreach, map ...тд)

