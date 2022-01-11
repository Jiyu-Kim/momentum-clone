const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleLoginSubmit(event) {
    // stop refreshing
    event.preventDefault();
    // hide the loginForm
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // Store the userName in localStorage
    const typedUserName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUserName);
    // show the greeting
    paintGreeting(typedUserName);
};

function paintGreeting(userName) {
    greeting.innerText = `Hello, ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    // show the loginForm
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit)
    // show the greeting
} else {
    // show the greeting
    paintGreeting(savedUserName);
}