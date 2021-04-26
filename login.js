let loginCheck = localStorage.getItem("login")
let passwordCheck = localStorage.getItem("password")
let isLoged = false;
localStorage.setItem('isLoged', isLoged)

let login = document.getElementById("loginInput")
let loginAlert = document.getElementById("loginAlert")
let password = document.getElementById("passwordInput")
let passwordAlert = document.getElementById("passwordAlert")

let loginBtn = () => {
    if (login.value !== loginCheck) {
        login.style.border = "2px solid red"
        loginAlert.innerHTML = "Неверный логин!"
    }
    else if (password.value !== passwordCheck) {
        password.style.border = "2px solid red"
        passwordAlert.innerHTML = "Неверный пароль!"
        loginAlert.innerText = ""
        login.style.border = ""
    }
    else {
        location.href = "index.html"
        let isLoged = true;
        localStorage.setItem('isLoged', isLoged)
    }
}

