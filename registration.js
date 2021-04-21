let username = document.getElementById("usernameInput")
let login = document.getElementById("loginInput")
let loginAlert = document.getElementById("loginAlert")
let password = document.getElementById("passwordInput")
let passwordRepeat = document.getElementById("repeatInput")
let passwordAlert = document.getElementById("passwordAlert")

let register = () => {
    if (login.value.length < 6) {
        login.style.border = "2px solid red"
        loginAlert.innerHTML = "Логин должен состоять как минимум из 6 знаков"
    }
    else if (password.value.length < 8 && passwordRepeat.value.length < 8) {
        password.style.border = "2px solid red"
        passwordRepeat.style.border = "2px solid red"
        passwordAlert.innerHTML = "Пароль должен состоять как минимум из 8 знаков"
    }
    else if (password.value !== passwordRepeat.value) {
        password.style.border = "2px solid red"
        passwordRepeat.style.border = "2px solid red"
        passwordAlert.innerHTML = "Пароли не совпадают"
    }
    else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("login", login.value)
        localStorage.setItem("password", password.value)
        location.href = "login.html"
    }
}