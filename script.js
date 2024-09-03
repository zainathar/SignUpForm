const passwordCheckPara = document.querySelector(".password-check");
const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#cpass");
const formButton = document.querySelector(".form-button");

confirmPassword.addEventListener("blur", () => {
    if(password.value !== confirmPassword.value) {
        passwordCheckPara.classList.remove("hidden");
        passwordCheckPara.classList.add("show");
        formButton.classList.add("disabled");
        formButton.disabled = true;

        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    } else {
        passwordCheckPara.classList.remove("show");
        passwordCheckPara.classList.add("hidden");
        formButton.classList.remove("disabled");
        formButton.disabled = false;

        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    }
});