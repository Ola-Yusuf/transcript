//event listeners
function eventListeners() {
  //add event listeners
  const signUp = document.querySelector("#signUp");
  const login = document.querySelector("#login");
  const signUpLink = document.querySelector("#signUpLink");
  const logInLink = document.querySelector("#logInLink");
  if (signUp) {
    signUp.addEventListener("submit", createUserAccount);
  }
  if (login) {
    login.addEventListener("submit", loginToAccount);
  }
}

eventListeners();

//Post create user account function
function createUserAccount(e) {
  e.preventDefault();
  const form = document.querySelector("#signUp");
  let data = new FormData(form);
  window.location = "dashboard.html";
}

//Post create user account function
function loginToAccount(e) {
  e.preventDefault();
  const form = document.querySelector("#login");
  window.location = "dashboard.html";
}

function showElement(element) {
  document.getElementById(element).style.display = "block";
}

function hideElement(element) {
  document.getElementById(element).style.display = "none";
}
