// 6강 이전 수업 복습
// 1. map

// 1-3
const users = [
  { name: "Alice", age: 30, city: "Seoul" },
  { name: "Bob", age: 25, city: "New York" },
  { name: "Charlie", age: 35, city: "London" },
];

let nameAndCity = users.map((user) => {
  return { name: user.name, city: user.city };
});
console.log(nameAndCity);

// 2. find

// 2-1
const numbers = [3, 7, 11, 9, 12, 13];

const answer = numbers.find((number) => {
  return number > 10;
});
// const answer = numbers.find((number) => {
//   return number > 10
// })

console.log(answer);

// 2-2
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const personAlice = people.find((person) => {
  return (person.name = "Alice");
});
// const personAlice = people.find(person => person.name = 'Alice');

console.log(personAlice);

// 2-3
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Tablet" },
];

const numThree = products.find((product) => product.id === 3);

console.log(numThree);

// 3. filter

// 3-1
const nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter((num) => num % 2 === 0);

console.log(evenNums);

// 3-2
const overThirty = people.filter((person) => person.age >= 30);

console.log(overThirty);

// 3-3
const goods = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 250 },
];

const overFiftyBucks = goods.filter((product) => product.price >= 500);

console.log(overFiftyBucks);

// 4. Spread Operator & Destructuring

// 4-1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = [...arr1, ...arr2, ...arr3];
console.log(newArr);

// 4-2
const obj1 = { name: "Alice", age: 30 };
const obj2 = { job: "Software Engineer", city: "Seoul" };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);

// 4-3

// const sum = sumNumbers(...numbers);
// console.log(sum);

// 4-4
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
};

const { name, age, occupation } = person;
console.log(name, age, occupation);

// 4-5
const user = {
  name: "Jane Doe",
  age: 25,
  occupation: "Web Developer",
  address: {
    city: "Seoul",
    country: "South Korea",
  },
};

const {
  address: { city },
} = user;
console.log(city);

// 4-6
const numbers2 = [1, 2, 3, 4, 5];

const [num1, num2, ...rest] = numbers2;
console.log(rest);

// 5. localStorage

// 5-1
