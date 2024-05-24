// 5강 현업에서 일하는 것처럼 데이터 가져오기

// 1. 학생 리스트 정보 조회
fetch("https://2b74-175-208-136-225.ngrok-free.app/students")
  .then((res) => res.json()) // GET 생략했음, json을 js로 변환
  .then((result) => console.log(result)) // js를 가져옴
  .catch((error) => console.error("Error:", error)); // 에러 발생 시 조치

// 2. 학생의 상세 정보 조회
fetch("https://2b74-175-208-136-225.ngrok-free.app/students/2")
  .then((res) => res.json())
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));

async function fetchStudentsById() {
  try {
    const res = await fetch(
      "https://2b74-175-208-136-225.ngrok-free.app/students/2"
    );
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

fetchStudentsById();

// 3. 학생 정보 추가
fetch("https://2b74-175-208-136-225.ngrok-free.app/students", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    id: "2",
    name: "soo",
    major: "Trade",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

async function addStudent() {
  try {
    const response = await fetch(
      "https://2b74-175-208-136-225.ngrok-free.app/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          id: 30,
          name: didi,
          major: cs,
        }),
      }
    );
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}
