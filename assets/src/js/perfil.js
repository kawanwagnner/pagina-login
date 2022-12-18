/*
const usuario = {
    nome: localStorage.setItem('nome', document.querySelector('.name-box').value),
    sobrenome: localStorage.setItem('sobrenome', document.querySelector('.sobrenome-box').value),
    email: localStorage.setItem('email', document.querySelector('.email-box').value),
    password: localStorage.setItem('password', document.querySelector('.password-box').value)
}

const nomeCompleto = localStorage.getItem('nome') + ' ' + localStorage.getItem('sobrenome')
const load = [usuario.nome, usuario.email, usuario.password]

load.addEventListener('click', () => {
    load[0].innerHTML = nomeCompleto;
    load[1].innerHTML = localStorage.getItem('email');
    load[2].innerHTML = localStorage.getItem('pasword');
})*/

localStorage.setItem('nome', document.querySelector('.name-box').value)
const nome1 = document.querySelector('#nome')
const nome2 = document.querySelector('#email')

nome1.innerHTML = 'sewsj'
nome2.innerHTML == 'sjwev'