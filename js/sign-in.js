
let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');
let alertMassage=document.getElementById('alertMassage');
let userContainer = [];
 if (localStorage.getItem('Users') != null) {
     userContainer = JSON.parse(localStorage.getItem('Users'));
 }
function logIn() {
    let users = JSON.parse(localStorage.getItem('user'));
    console.log('users: ', users);
    for (let i = 0; i < users.length; i++) {
        if (emailLoginInput.value === users[i].email && passwordLoginInput.value === users[i].password ) {
            console.log(users[i].name, users[i].password);
            localStorage.setItem("userName", users[i].name)
            location.href='../../home.html';
        } else {
            getAlertMessage('Email or Password incorrect','red');
        }
    }
    if(checkInputsEmpty() == true)
    {
        getAlertMessage('All Inputs Required','red')
    }

     }
   
function checkEmailPassword() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailLoginInput.value && userContainer[i].password == passwordLoginInput.value) {
            localStorage.setItem('userName',userContainer[i].userName)
            return true;
        }
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if (emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', () => {
    logIn();
});



if (localStorage.getItem('userName')) {
    console.log("done");
    location.href = '../home.html';
} else {
    location.href != '../home.html';

}