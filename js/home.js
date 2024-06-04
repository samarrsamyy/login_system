if (sessionStorage.getItem("Session UserName")) {
  var logout = document.getElementById("logout");

  logout.addEventListener("click", function () {
    sessionStorage.clear();
    location.href = "./index.html";
  });

  var userName = JSON.parse(sessionStorage.getItem("Session UserName"));

  document.getElementById("welcome").innerHTML = "Welcome " + userName;
}
else{
  location.href = "./index.html";

}