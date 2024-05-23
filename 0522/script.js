const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 문제 8
// 1. user 데이터를 로컬스토리지에 저장하세요. 이때 로컬 스토리지의 `key`는 `user`로 저장합니다. 단, `value`에 `[object Object]` 처럼 저장되면 안됩니다.
// 2. 로컬 스토리지에 저장된 데이터(`user`)를 조회한 후 콘솔에 출력해보세요. 단, 문자열이 아니라 객체로 출력되어야 합니다.
// 3. 조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요.
// 4. 조회한 로컬 스토리지의 데이터(`user`)를 삭제하는 코드를 작성하는 코드를 작성해보세요. 그리고 다시 `user` 데이터 조회 후 `null`이 출력되는지 확인하세요.

// value 자리에 넣는 값은 문자열, 배열이나 객체를 넣게 되면 [object Object]로 출력됨
localStorage.setItem("user", { ...user });
localStorage.getItem("user");

// 저장 또는 추가: JSON.stringify() -> setItem
localStorage.setItem("user", JSON.stringify({ ...user }));

// 접근: getItem -> JSON.parse()
JSON.parse(localStorage.getItem("user"));

// setItem으로 저장, 추가 모두 가능
localStorage.setItem("user", JSON.stringify({ ...user, 나이: 30 }));

localStorage.removeItem("user"); // 삭제
JSON.parse(localStorage.getItem("user")); // null

// 새 데이터 추가 및 저장도 해보자
const newUser = { 이름: "도희", 나이: 30, 주소: "서울" };
// 🤔 왜 newUser가 로컬 스토리지에 들어가 있었을까...

JSON.parse(localStorage.getItem("user")); // 접근
let users = [user]; // push 메서드 사용을 위해 user 객체를 배열에 넣어주기
users.push(newUser); // 추가
console.log(user, users);
localStorage.setItem("user", JSON.stringify(users)); // 추가 및 저장
console.log(user, users);
// localStorage.clear();

// 응용 문제 1
const products = [
  {
    id: 1,
    brand: "아디다스",
    name: "멋진 아디다스 반팔티",
    price: 32000,
  },
  {
    id: 2,
    brand: "나이키",
    name: "멋진 나이키 바지",
    price: 30000,
  },
];

localStorage.setItem("products", JSON.stringify(products));

const newProduct = {
  id: 3,
  brand: "뉴발",
  name: "멋진 뉴발 신발",
  price: 78000,
};

JSON.parse(localStorage.getItem("products")); // 추가 받을 데이터에 접근
products.push(newProduct); // products 배열에 newProduct 객체 추가
localStorage.setItem("products", JSON.stringify(products)); // 로컬 스토리지에 products 데이터에 products 배열 덮어씌우기

// 응용 문제 2
// 로컬 스토리지 products 데이터에 접근
let productData = JSON.parse(localStorage.getItem("products"));

// products(배열임) 안의 전체 요소들 순회해서 새 배열 반환
let newProducts = productData.map((product) => {
  // if (products의 각 요소(객체임) id가 1인지 확인)
  if (product.id === 1) {
    // { ...product(객체임), price: 35000, } 반환하여 배열 데이터 업뎃
    return { ...product, price: 35000 };
  }
  // id가 1이 아닌 products의 각 요소(객체임)들은 그대로 반환
  return product;
});

// 변경된 products 배열을 로컬 스토리지 products 데이터로 덮어씌워 저장
localStorage.setItem("products", JSON.stringify(newProducts));

// console.log(products, newProducts);

// 응용 문제 3
// 업데이트 된 로컬 스토리지 products 데이터에 접근
let newProductData = JSON.parse(localStorage.getItem("products"));

// products(배열임) 안의 전체 요소들 순회해서 id가 1인 상품을 제외한 새 배열 반환
let filteredProducts = newProductData.filter((product) => product.id !== 1);

// 변경된 products 배열을 로컬 스토리지 products 데이터로 덮어씌워 저장
localStorage.setItem("products", JSON.stringify(filteredProducts));