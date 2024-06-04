var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var loginBtn = document.getElementById("loginBtn");
var message = document.getElementById("message");

document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    if (checkUser()) {
      setTimeout(function () {
        location.href = "./home.html";
      }, 1000);
    }
  }
});

loginBtn.addEventListener("click", function () {
  if (checkUser()) {
    setTimeout(function () {
      location.href = "./home.html";
    }, 1000);
  }
});

if (localStorage.getItem("users")) {
  var usersList = JSON.parse(localStorage.getItem("users"));
}

function checkUser() {
  var loginUser = {
    email: loginEmail.value,
    pass: loginPass.value,
  };

  for (i = 0; i < usersList.length; i++) {
    if (
      loginUser.email == usersList[i].email &&
      loginUser.pass == usersList[i].password
    ) {
      sessionStorage.setItem(
        "Session UserName",
        JSON.stringify(usersList[i].name)
      );
      message.innerHTML = "";
      return true;
    } else if (
      loginUser.email != usersList[i].email &&
      loginUser.pass == usersList[i].password
    ) {
      message.innerHTML = "Enter valid email ";
      message.classList.remove("d-none");
    } else if (
      loginUser.email == usersList[i].email &&
      loginUser.pass != usersList[i].password
    ) {
      message.innerHTML = "Enter valid  password ";
      message.classList.remove("d-none");
    } else {
      message.innerHTML = "Enter valid email & password ";
      message.classList.remove("d-none");
    }
  }
}

var inputs = document.querySelectorAll("input");

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    document.getElementById("message").classList.add("d-none");
  });
}
