let btnCreateAccount = document.querySelector(".btn_yellow");
let btnLogin = document.querySelector(".btn_black");
let modalRegister = document.querySelector(".modal__register");
let btnCloseModal = document.querySelectorAll(".cross");
let btnRegister = document.querySelector(".btn_reg");
let userName = document.querySelector(".info_username");
let infoCourse = document.querySelector(".info_course");
let password = document.querySelector(".password");
let passwordLogin = document.querySelector(".password_login");
let passwordRepeat = document.querySelector(".password_repeat");
let error = document.querySelectorAll(".error");
let lock1 = document.querySelector(".lock1");
let unlock1 = document.querySelector(".unlock1");
let lock2 = document.querySelector(".lock2");
let unlock2 = document.querySelector(".unlock2");
let lock3 = document.querySelector(".lock3");
let unlock3 = document.querySelector(".unlock3");
let login = document.querySelector(".login");
let modalLogin = document.querySelector(".modal__login");
let loginLS = document.querySelector(".loginLS");
let usernameLS = document.querySelector(".usernameLS");
let linkReg = document.querySelector(".reg");
let btnLoginModal = document.querySelector(".btn_login-modal");
let tel = document.querySelector(".tel");
let LS = window.localStorage;
let arr = [];

let checkEmail = (str) => {
  if (str !== "") {
    let arr = str.split("");
    for (let el of arr) {
      if (!arr.includes("@") || !arr.includes(".")) {
        error[0].classList.remove("d-none");
      } else {
        error[0].classList.add("d-none");
      }
    }
  } else {
    error[0].innerText = "Введите адрес электронной почты";
    error[0].classList.remove("d-none");
  }
}

let checkCourse = (str) => {
  if (str == "") {
    error[1].classList.remove("d-none");
  } else {
    error[1].classList.add("d-none");
  }
}

let checkSecondPassword = (str) => {
  if (str == password.value) {
    error[3].classList.add("d-none");
  } else {
    error[3].classList.remove("d-none");
  }
}

let checkPassword = (arr) => {
  let lower = new RegExp("(?=.*[a-z])");
  let upper = new RegExp("(?=.*[A-Z])");
  let number = new RegExp("(?=.*[0-9])");
  let special = new RegExp("(?=.*[!.@#%&^&*])");
  let length = new RegExp("(?=.{8,})");
  if (length.test(arr)) {
    error[2].classList.add("d-none");
    if (
      lower.test(arr) &&
      upper.test(arr) &&
      number.test(arr) &&
      special.test(arr)
    ) {
      error[2].classList.add("d-none");
    } else {
      error[2].innerText = "Дожны быть заглавные буквы, цифры и символы";
      error[2].classList.remove("d-none");
      console.log(error[2].classList);
      console.log("чего-то нет");
    }
  } else {
    error[2].classList.remove("d-none");
  }
}

let changeLS = (email, course, password) => {
  let obj = { email: email, course: course, password: password };
  arr.push(obj);
  LS.setItem("user", JSON.stringify(arr));
}

btnCreateAccount.addEventListener("click", function () {
  modalRegister.classList.add("open");
});

for (let el of btnCloseModal) {
  el.addEventListener("click", function () {
    modalRegister.classList.remove("open");
    modalLogin.classList.remove("open");
  });
}

btnRegister.addEventListener("click", function () {
  checkEmail(userName.value);
  checkCourse(infoCourse.value);
  checkPassword(Array.from(password.value.split("")));
  checkSecondPassword(passwordRepeat.value);
  let arr = Array.from(error);
  if (arr.every((el) => el.classList.contains("d-none"))) {
    modalRegister.classList.remove("open");
    changeLS(userName.value, infoCourse.value, password.value);
    tel.innerHTML = `<img class="salut" src="./src/style/nemzetiünnep-fireworks.gif" alt="" />
    <h1 class="congratulation">You are successfully registered!</h1>`;
  } 
});

lock1.addEventListener("click", function () {
  if (lock1.classList == "lock1") {
    password.setAttribute("style", "-webkit-text-security: none");
    lock1.classList.add("d-none");
    unlock1.classList.remove("d-none");
  }
});

lock2.addEventListener("click", function () {
  if (lock2.classList == "lock2") {
    passwordRepeat.setAttribute("style", "-webkit-text-security: none");
    lock2.classList.add("d-none");
    unlock2.classList.remove("d-none");
  }
});
lock3.addEventListener("click", function () {
  if (lock3.classList == "lock3") {
    passwordLogin.setAttribute("style", "-webkit-text-security: none");
    lock3.classList.add("d-none");
    unlock3.classList.remove("d-none");
  }
});
unlock1.addEventListener("click", function () {
  if (unlock1.classList == "unlock1") {
    password.setAttribute("style", "-webkit-text-security: disc");
    lock1.classList.remove("d-none");
    unlock1.classList.add("d-none");
  }
});
unlock2.addEventListener("click", function () {
  if (unlock2.classList == "unlock2") {
    passwordRepeat.setAttribute("style", "-webkit-text-security: disc");
    lock2.classList.remove("d-none");
    unlock2.classList.add("d-none");
  }
});
unlock3.addEventListener("click", function () {
  if (unlock3.classList == "unlock3") {
    passwordLogin.setAttribute("style", "-webkit-text-security: disc");
    lock3.classList.remove("d-none");
    unlock3.classList.add("d-none");
  }
});

login.addEventListener("click", function () {
  modalRegister.classList.remove("open");
  modalLogin.classList.add("open");
});

btnLogin.addEventListener("click", function () {
  modalLogin.classList.add("open");
});

linkReg.addEventListener("click", function () {
  modalRegister.classList.add("open");
  modalLogin.classList.remove("open");
});

btnLoginModal.addEventListener("click", function () {
  modalLogin.classList.remove("open");
  tel.innerHTML = `<img class="salut" src="./src/style/nemzetiünnep-fireworks.gif" alt="" />
  <h1 class="congratulation">You are successfully login!</h1>`;
});

usernameLS.addEventListener("click", function () {
  arr = JSON.parse(LS.getItem("user"));
  usernameLS.value = arr[arr.length - 1].email;
  console.log(arr[arr.length - 1].email);
});

loginLS.addEventListener("click", function () {
  arr = JSON.parse(LS.getItem("user"));
  loginLS.value = arr[arr.length - 1].password;
  console.log(arr[arr.length - 1].password);
});
