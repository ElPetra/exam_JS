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
let linkReg = document.querySelector(".reg");
let btbLodinModal = document.querySelector(".btn_login-modal");


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
    console.log(arr);
  }
});

function checkEmail(str) {
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

function checkCourse(str) {
  if (str == "") {
    error[1].classList.remove("d-none");
  } else {
    error[1].classList.add("d-none");
  }
}
// function checkPassword(arr) {
//   if (arr.length > 7) {
//     // let specials = "!@#$%^&*()_-+=|/.,:;[]{}";
//     // let arrSymbols = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","|","/",".",",",":",";","[","]","{","}",];
//     for (let el of arr) {
//       if (!arr.includes(el.toUpperCase())) {
//         let errorPassword = (document.querySelector(
//           ".errorPassword"
//         ).innerText = "Пароль должен содержать заглавные буквы");
//         error[2].classList.remove("d-none");
//       } else {
//         error[2].classList.add("d-none");
//       }
//     }
//   } else {
//     error[2].classList.remove("d-none");
//   }
// }

function checkSecondPassword(str) {
  if (str == password.value) {
    error[3].classList.add("d-none");
  } else {
    error[3].classList.remove("d-none");
  }
}

function checkPassword(arr) {
  let lower = new RegExp("(?=.*[a-z])");
  let upper = new RegExp("(?=.*[A-Z])");
  let number = new RegExp("(?=.*[0-9])");
  let special = new RegExp("(?=.*[!.@#%&^&*])");
  let length = new RegExp("(?=.{8,})");
  if (lower.test(arr)) {
    error[2].classList.add("d-none");
  } else {
    error[2].innerText = "Нет строчных";
    error[2].classList.remove("d-none");
    console.log(error[2].classList);
    console.log("нет строчных");
  }
  if (upper.test(arr)) {
    error[2].classList.add("d-none");
  } else {
    error[2].innerText = "Нет заглавных";
    error[2].classList.remove("d-none");
    console.log(error[2]);
      console.log("нет заглавных");
  }
  if (number.test(arr)) {
    error[2].classList.add("d-none");
  } else {
    error[2].innerText = "Нет цифр";
    error[2].classList.remove("d-none");
    console.log("нет цифр");
  }
  if (special.test(arr)) {
    error[2].classList.add("d-none");
  } else {
    error[2].innerText = "Нет знаков";
    error[2].classList.remove("d-none");
    console.log("нет знаков");
  }
  if (length.test(arr)) {
    error[2].classList.add("d-none");
  } else {
    error[2].classList.remove("d-none");
    console.log("длина");
  }
}

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
})
linkReg.addEventListener("click", function () {
    modalRegister.classList.add("open");
    modalLogin.classList.remove("open");
})

btbLodinModal.addEventListener("click", function () {
    // checkEmail(userName.value);
    modalLogin.classList.remove("open");
})