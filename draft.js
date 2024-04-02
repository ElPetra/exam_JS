for (let el of lock) {
  el.addEventListener("click", function () {
    if (el.classList == "lock") {
      password.setAttribute("style", "-webkit-text-security: none");
      el.innerHTML = `<img class="unlock" src="./src/unlock.svg" alt=""></img>`;
    }
  });
}

for (let el of unlock) {
  el.addEventListener("click", function () {
    if (el.classList == "unlock") {
      password.setAttribute("style", "-webkit-text-security: disc");
      el.innerHTML = `<img class="lock" src="./src/Lock.svg" alt="">`;
    }
  });
}
