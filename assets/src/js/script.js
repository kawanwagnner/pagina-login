/* Menu Hamburguer ----------------------------------------------------------------------------------*/

const btnMenu = document.querySelector("#menu-hamb")
btnMenu.addEventListener('click', () => {
    const navBar = document.querySelector('#navbar')
    const active = document.querySelector('#active')

    navBar.classList.toggle('active')
    if (btnMenu.innerHTML == 'X') {
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        btnMenu.innerHTML = 'X';
    }
})

/* Local Storage Cadastro ..saving informations ----------------------------------------------------------------------------------*/

const sendInformations = document.querySelector('#send-informations')
sendInformations.addEventListener('click', () => {
    const usuario = {
        nome: localStorage.setItem('nome', document.querySelector('.name-box').value),
        sobrenome: localStorage.setItem('sobrenome', document.querySelector('.sobrenome-box').value),
        email: localStorage.setItem('email', document.querySelector('.email-box').value),
        password: localStorage.setItem('password', document.querySelector('.password-box').value)
    }

    location.href = "perfil.html";

    nome.innerHTML = '';
    sobrenome.innerHTML = '';
    email.innerHTML = '';
    password.innerHTML = '';
})

/* Local Storage Login ..comparing informations ----------------------------------------------------------------------------------*/

sendInformations.addEventListener('click', () => {
    const usuario = {
        localEmail: document.querySelector('.email-box').value,
        localPassword: document.querySelector('.password-box').value
    }

    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    if (localEmail == email ) {
        location.href = 'perfil.html'
    } else {
        alert('Usuario não encontrado!!')
    }

})