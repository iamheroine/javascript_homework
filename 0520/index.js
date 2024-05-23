// 문제 1
let userInfo = [
  { 이름: "철수", 나이: 19, 성별: "남" },
  { 이름: "짱구", 나이: 20, 성별: "남" },
  { 이름: "유리", 나이: 21, 성별: "여" },
];

console.log(userInfo);

// 문제 2
const userContainer = document.querySelector(".user-container");

userInfo.forEach((person) => {
  let setUserInfo = `
  <div>
    <h1>이름: ${person.이름}</h1>
    <p>나이: ${person.나이}</p>
    <p>성별:  ${person.성별}</p>
  </div>
  <hr />
  `;

  userContainer.innerHTML += setUserInfo;
});

// 문제 3
let femaleUsers = userInfo.find((person) => person.성별 === "여");

console.log(femaleUsers);

// 문제 4
let maleUsers = userInfo.filter((person) => person.성별 === "남");

console.log(maleUsers);

// 문제 5
let olderAge = userInfo.map((person) => {
  console.log(person);
  return {
    ...person,
    나이: person.나이 + 10,
  };
});

console.log(olderAge);

// 문제 6
let descendingAge = [...userInfo];

console.log(descendingAge);

descendingAge.sort((a, b) => b.나이 - a.나이);

console.log(descendingAge);
console.log(userInfo);

// 문제 7
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;

console.log(user);
