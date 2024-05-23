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

// value 자리에 배열이나 객체를 넣게 되면 문자열이나 [object Object]로 출력됨
localStorage.setItem("user", {...user});
localStorage.getItem("user");

// 저장 또는 추가: JSON.stringify() -> setItem
localStorage.setItem("user", JSON.stringify({...user}));

// 접근: getItem -> JSON.parse()
JSON.parse(localStorage.getItem("user"));

// setItem으로 저장, 추가 모두 가능
localStorage.setItem("user", JSON.stringify({...user, 나이: 30}));

// 새 데이터 추가 및 저장도 해보자
const newUser = { 이름: "도희",
	나이: 30,
	주소: "서울",
};

JSON.parse(localStorage.getItem("user")); // 접근
let users = [user]; // push 메서드 사용을 위해 user 객체를 배열에 넣어주기
users.push(newUser); // 추가
localStorage.setItem("user", JSON.stringify(users)); // 추가 및 저장

