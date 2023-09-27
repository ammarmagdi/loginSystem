
let welcomeMassage=document.getElementById('message');
let logOutBtn=document.getElementById('logOutBtn');

if(localStorage.getItem('userName') != null)
{
    console.log(localStorage.getItem('userName'));
    welcomeMassage.innerHTML = `Welcome ${localStorage.getItem('userName')}`
}


function logOut()
{
    //navigate login page
    //remove userName from localstorage
    window.location.href='../index.html';
    localStorage.removeItem('userName');
}
logOutBtn.addEventListener('click',logOut)