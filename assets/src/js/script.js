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
        nome: localStorage.setItem('nome', document.querySelector('.name-box').value),
        sobrenome: localStorage.setItem('sobrenome', document.querySelector('.sobrenome-box').value),
        email: localStorage.setItem('email', document.querySelector('.email-box').value),
        password: localStorage.setItem('password', document.querySelector('.password-box').value)
    }

    const nomeCompleto = usuario.nome + ' ' + usuario.sobrenome

    nome.innerHTML = '';
    sobrenome.innerHTML = '';
    email.innerHTML = '';
    password.innerHTML = '';
})


/*function load() {
    const nomeCompleto = localStorage.getItem('nome') + ' ' + localStorage.getItem('sobrenome')

    nome.innerHTML = (nomeCompleto);
    email.innerHTML = localStorage.getItem('email');
    password.innerHTML = localStorage.getItem('password');
}*/
