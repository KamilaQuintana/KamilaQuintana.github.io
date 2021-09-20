const mainPage = document.querySelector(".main-page")
const loginPage = document.querySelector(".login-page")
const feedsPage = document.querySelector(".feeds-page")

const btnTop = document.querySelector(".btn-top")
const loginModal = document.querySelector(".login-modal")
const loginPageUser = document.querySelector(".login-page-user")
const loginPagePassword = document.querySelector(".login-page-password")
const postBtn = document.querySelector(".post-btn")
const postModalWrapper = document.querySelector(".post-modal-wrapper")
const postModal = document.querySelector(".post-modal")
const inputModal = document.querySelector(".modal-input")
const postModalPostBtn = document.querySelector(".modal-header button")
const postModalPlus = document.querySelector(".modal-icons span")
const sideBarWrapper = document.querySelector(".sidebar-wrapper")
const sidebar = document.querySelector(".sidebar")
const toggleCircle = document.querySelector(".circle")
const darkElements1 = document.querySelectorAll(".dark-mode-1")
const darkElements2 = document.querySelectorAll(".dark-mode-2")
const lightTexts = document.querySelectorAll(".light-text")
const darkBorders = document.querySelectorAll(".border-for-dark")

const goToLoginPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "grid";
}

const goToFeedsPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "none";
    feedsPage.style.display = "block";
}

const signIn = () => {
    const usernameInput = document.querySelector(".user-info");
    const passwordInput = document.querySelector(".password");
    
    if (usernameInput.value && passwordInput.value) {
        goToFeedsPage()
    }
    else {
        goToLoginPage();
        loginModal.style.display = "block";
    }
}

const closeModalLogin = () => {
    loginModal.style.display = "none"
}

const signInLoginPage = () => {
    if (loginPageUser.value && loginPagePassword.value) {
        goToFeedsPage()
    }
    else {
        loginModal.style.display = "block"
    }
}

const openModalPost = () => {
    postModalWrapper.style.display = "block";
}

const closeModalPost = () => {
    postModalWrapper.style.display = "none";
    if (inputModal.value !== "") {
        inputModal.value = "";
    }
}

const enablePost = () => {
    if (inputModal.value && postModalPostBtn.style.opacity != 1) {
        postModalPostBtn.style.opacity = 1;
        postModalPlus.style.opacity = 1;
    }
    else if (!inputModal.value) {
        postModalPostBtn.style.opacity = 0.5;
        postModalPlus.style.opacity = 0.5;
    }
}

const openSidebar = () => {
    sideBarWrapper.style.display = "block"
}

const closeSidebar = () => {
    sideBarWrapper.style.display = "none"
}

const toggleDarkMode = () => {
    toggleCircle.classList.toggle("circle-move")
    Array.from(darkElements1).forEach(el => el.classList.toggle("dark-1"))
    Array.from(darkElements2).forEach(el => el.classList.toggle("dark-2"))
    Array.from(lightTexts).forEach(el => el.classList.toggle("light"))
    Array.from(darkBorders).forEach(el => el.classList.toggle("border-color"))
}
