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

const sendInformations = document.querySelector('#send-informations')
sendInformations.addEventListener('click', () => {
    const usuario = {
        nome: document.querySelector('.name-box').value,
        sobrenome: document.querySelector('.sobrenome-box').value,
        email: document.querySelector('.email-box').value,
        password: document.querySelector('.password-box').value
    }

    const nomeCompleto = usuario.nome + ' ' + usuario.sobrenome

    nome.innerHTML = nomeCompleto;
    sobrenome.innerHTML = usuario.sobrenome;
    email.innerHTML = usuario.email;
    password.innerHTML = usuario.password;
})

function load() {

    const usuario = {
        nome: document.querySelector('.name-box').value,
        sobrenome: document.querySelector('.sobrenome-box').value,
        email: document.querySelector('.email-box').value,
        password: document.querySelector('.password-box').value
    }

    const nomeCompleto = usuario.nome + ' ' + usuario.sobrenome

    nome.innerHTML = nomeCompleto;
    sobrenome.innerHTML = usuario.sobrenome;
    email.innerHTML = usuario.email;
    password.innerHTML = usuario.password;
}