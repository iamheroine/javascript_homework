const sidebarBtn = document.querySelector('.side-bar-btn');
const sidebar = document.querySelector('.side-bar');

const buttonClickHandler = () => {
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    sidebar.textContent = "열기";
  } else {
    sidebar.classList.add('active');
    sidebar.textContent = "닫기";
  };
  
}

sidebarBtn.addEventListener('click', buttonClickHandler);
sidebarBtn.removeEventListener('click', buttonClickHandler);






// const btn = document.querySelector(".side-bar-btn");

 

// btn.addEventListener("click", (e) => {

//   //   if (e.target.classList.contains("메뉴")) {

//   //     e.target.classList.toggle("active");

//   //   }

// });




// const btn = document.querySelector('.side-bar-btn');

// const sideBar = document.querySelector('.side-bar');

// btn.addEventListener('click', function() {

//    const active = sideBar.classList.toggle('active');

//    btn.textContent = active ? "닫기" : "열기";

// });