/* Pull Informations ..of user ---------------------------------------------------------------------------------- */

const localNome = document.querySelector('.titulo')
const localEmail = document.querySelector('.email-box')
const localPassword = document.querySelector('.password-box')

const nomeSobrenome = localStorage.getItem('nome') + ' ' + localStorage.getItem('sobrenome')
const email = localStorage.getItem('email')
const password = localStorage.getItem('password')

localNome.innerHTML = nomeSobrenome;
localEmail.innerHTML = email;
localPassword.innerHTML = password;

/* Sign Out ..of user ----------------------------------------------------------------------------------*/

const btn = document.querySelector('#clean')
btn.addEventListener('click', () => {
    location.href = 'index.html'
    localStorage.clear()
})

/* Change Photo ..of user ----------------------------------------------------------------------------------*/

const changePhoto = document.querySelector('#change-photo')
const phtoPerfil = document.querySelector('#foto-perfil')
const containerChangePhoto = document.querySelector('#container-hover')

containerChangePhoto,phtoPerfil.addEventListener('mouseenter', () => {
    changePhoto.style.opacity = '100%'
})

containerChangePhoto,phtoPerfil.addEventListener('mouseout', () => {
    changePhoto.style.opacity = '0%'
})

/* Termos de Uso. ----------------------------------------------------------------------------------*/

const termos = document.querySelector('.support-terms')
termos.addEventListener('click', () => {
    alert('Use com modereção e não esqueça de me seguir no GitHub.')
    alert('Muito obrigado por testar aplicação! 😊')
})
