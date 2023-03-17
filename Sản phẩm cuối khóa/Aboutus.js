const myNickName = document.getElementById('inputName');
    h3 = document.querySelector("h3");
    h3.innerHTML = localStorage.getItem('myNickName');

function display() {
    localStorage.setItem('myNickName', myNickName.value);
    localStorage.setItem('value', myEmail.value);
    h3.innerHTML = localStorage.getItem('value');
    h3.innerHTML = localStorage.getItem('myNickName');
}