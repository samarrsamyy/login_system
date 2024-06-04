var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var signupBtn = document.getElementById("signupBtn");
var message = document.getElementById("message");
var userList = [];

document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addUser();
  }
});

signupBtn.addEventListener("click", function () {
  addUser();
});

if (localStorage.getItem("users")) {
  userList = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
  for (i = 0; i < userList.length; i++) {
    if (userEmail.value == userList[i].email) {
      message.innerHTML = "email already exists";
      message.classList.remove("d-none");
      message.classList.add("text-danger");
      userEmail.classList.remove("is-valid");
      userEmail.classList.add("is-invalid");

      return;
    }
  }

  if (
    validationInputs(userName, "errNameMsg") &&
    validationInputs(userEmail, "errEmailMsg") &&
    validationInputs(userPassword, "errPassMsg")
  ) {
    users = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    userList.push(users);
    clearInput();
    clearValidation();
    message.innerHTML = "Success";
    message.classList.add("text-success");
    message.classList.remove("d-none");
    localStorage.setItem("users", JSON.stringify(userList));

    setTimeout(function () {
      location.href = "./index.html";
    }, 1000);
  }
}

function clearInput() {
  userName.value = null;
  userEmail.value = null;
  userPassword.value = null;
}

function clearValidation() {
  userName.classList.remove("is-valid");
  userEmail.classList.remove("is-valid");
  userPassword.classList.remove("is-valid");
}

function validationInputs(element, errMsg) {
  var text = element.value;
  var regex = {
    userName: /^[a-z]{3,8}$/i,
    userEmail: /^[a-z]\w*@(gmail|yahoo|hotmail|outlook)\.com$/i,
    userPassword: /^.{5,}$/,
  };
  var errMsg = document.getElementById(errMsg);
  if (regex[element.id].test(text)) {
    errMsg.classList.add("d-none");
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    return true;
  } else {
    errMsg.innerHTML = `Please enter Valid ${element.id}`;
    errMsg.classList.remove("d-none");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}

userName.addEventListener("blur", function () {
  validationInputs(this, "errNameMsg");
});
userEmail.addEventListener("blur", function () {
  validationInputs(this, "errEmailMsg");
});
userPassword.addEventListener("blur", function () {
  validationInputs(this, "errPassMsg");
});
