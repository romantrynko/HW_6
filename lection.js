let numbers = [1, 6, 9, 0, 17, 22, 99];

// let sort = numbers.sort((a, b) => {
//     console.log(a);
//     console.log(b);
//     console.log('_________');

//     return a-b;
// })

// console.log(sort);



// let sort1 = numbers.sort();

// console.log(sort1); // сортує по алфавіту

// let strs = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew'];

// let sort2 = strs.sort((a, b) => {   //сортує слова
//     if(a < b) {
//         return -1
//     } else {
//         return 1
//     }
// });

// console.log(sort2);




// let users = [
//     {name: 'Dima', age: 10},
//     {name: 'Nastya', age: 22},
//     {name: 'Volodya', age: 19},
//     {name: 'Yarko', age: 39},
//     {name: 'Yevhen', age: 14},
//     {name: 'Taras', age: 44},
// ];

// let sortedUsers = users.sort((a, b) => {
//     return a.age - b.age
// })

// console.log(sortedUsers);



// numbers.filter((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log('______');
// })

// let numbers1 = numbers.filter(value => {
//     return !(value % 2)  // true / false
// })

// console.log(numbers1);


// let numbers1 = numbers.filter (value => value % 2)  // true / false верне непарні значення
// let numbers1 = numbers.filter (value => !(value % 2))  // true / false верне непарні значення

// console.log(numbers1);


// let map = numbers.map((value, index) => {  // множить парні на два інші не рухає
//     if (!(value % 2)) {
//         return value * 2;
//     }


//     return value;    // return зупиняє виконання функції
// })

// console.log(map);

// let map = numbers.map((value, index) => {  // множить число на його індекс
//     return value * index;    // return зупиняє виконання функції
// })

// console.log(map);



// let strs = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew'];

// let usersWithId = strs.map((name, index) => {
//     return {name, id: index + 1}
// })

// console.log(usersWithId);
// console.log(strs);


// numbers.forEach(value => {

//     if(!(value % 2)) {
//         return
//     }

//     console.log(value);
// })


// let numbers1 = numbers.reverse();

// console.log(numbers1);

// let findedUser = strs.find(value => {
//     return value.toLowerCase().startsWith('s')
// })

// console.log(findedUser);

// let findedIndex = strs.findIndex(value => {
//     return value.toLowerCase().startsWith('t')
// })

// console.log(findedIndex);

// let b = strs.some(value => {
//     return value.toLowerCase().startsWith('d')
// });

// let bE = strs.every(value => {
//     return value.toLowerCase().startsWith('d')
// });

// console.log(b);
// console.log(bE);

// let arrInArr = [1, 2, 3, [1, 3, 2, [2, 6,2], 2, 55], 56, 26, [6, 25]];

// let flat = arrInArr.flat(3);

// console.log(flat);

// let sum = numbers.reduce((previousValue, currentValue) => {
//     console.log(previousValue);
//     console.log(currentValue);
//     console.log('___________');

//     return previousValue + currentValue;
// });

// console.log(sum);

// let sumShort = numbers.reduce((p, c) => p + c);

// console.log(sumShort);


// let users = [
//         {name: 'Dima', age: 10},
//         {name: 'Nastya', age: 22},
//         {name: 'Volodya', age: 19},
//         {name: 'Yarko', age: 39},
//         {name: 'Yevhen', age: 14},
//         {name: 'Taras', age: 44},
//     ];

//     let sumOfAges = users.reduce((prev, curr) => {
//         console.log(prev);
//         console.log(curr);
//         console.log('______');


//         return prev + curr.age
//     }, 0);

//     console.log(sumOfAges);


// function Animal(name, color) {
//     this.name = name
//     this.color = color

//     // this.run = function() {
//     //     console.log('Running!!!');
//     // }
// }

// Animal.prototype.run = function () {
//     console.log(this.name + ' Running!!!');
// }

// function Hamster (name, color, house) {
//     this.name = name
//     this.color = color
//     this.house = house
// }

// // Hamster.prototype = Animal.prototype // 1. bed choice
// // Hamster.prototype.__proto__ = Animal.prototype // 2.
// Hamster.prototype = Object.create(Animal.prototype)



// let z = new Animal('Zipka', 'Red');
// let x = new Animal('Bipka', 'Red');
// let c = new Animal('Mipka', 'Red');
// let v = new Animal('Nipka', 'Red');


// let gulka = new Hamster('Gulka', 'White', true);

// Hamster.prototype.run = function () {
//     console.log('Hello world!');
// }

// z.run()
// x.run()
// c.run()
// v.run()


// gulka.run()

function Hamster(name) {
    this.name = name;
    this.stomach = [];
}

// Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (food) {
    this.stomach.push(food);
}

let Gulka = new Hamster('Gulka');
let Bulka = new Hamster('Bulka');

console.log(Gulka.stomach);
console.log(Bulka.stomach);

Gulka.findFood('Grushka');

console.log(Gulka.stomach);
console.log(Bulka.stomach);
