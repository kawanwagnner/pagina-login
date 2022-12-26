/* Menu Hamburguer ----------------------------------------------------------------------------------*/

const btnMenu = document.querySelector("#menu-hamb")
btnMenu.addEventListener('click', () => {
    const navBar = document.querySelector('#navbar')

    navBar.classList.toggle('active')
    if (btnMenu.innerHTML == 'X') {
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        btnMenu.innerHTML = 'X';
    }
})

/* Local Storage Cadastro ..saving informations ----------------------------------------------------------------------------------*/

const sendInformations = document.querySelector('#send-informations')
sendInformations.addEventListener('click' || 'Enter', () => {
    localNome = document.querySelector('.name-box').value
    localSobrenome = document.querySelector('.sobrenome-box').value
    localEmail = document.querySelector('.email-box').value
    localSenha = document.querySelector('.password-box').value

    const usuario = {}
    usuario.nome = localStorage.setItem('nome', document.querySelector('.name-box').value);
    usuario.sobrenome = localStorage.setItem('sobrenome', document.querySelector('.sobrenome-box').value);
    usuario.email = localStorage.setItem('email', document.querySelector('.email-box').value);
    usuario.password = localStorage.setItem('password', document.querySelector('.password-box').value);

    /* validation of date ..comparing informations ---------------------------------------------------------------------------------- */

    if (localNome == '') {
        alert('Digite um nome válido!')
    
    }
    
    if (localSobrenome == '') {
        alert('Digite um sobrenome válido!')
    }

    if (localEmail == '') {
        alert('Digite um e-mail válido!')
    }

    if (localSenha.length >= 8 && localSenha.length <= 15) {
        location.href = "perfil.html"
        alert(`Bem-vindo(a)!!`)
        nome.innerHTML = '';
        sobrenome.innerHTML = '';
        email.innerHTML = '';
        password.innerHTML = '';
    } else {
        alert('Senha deve ser maior que 8 e menor que 15 dígitos!')
    }
})

/* Local Storage Login ..comparing informations ----------------------------------------------------------------------------------
[...]
*/

/* Termos de Uso. ----------------------------------------------------------------------------------*/

const termos = document.querySelector('.support-terms')
termos.addEventListener('click', () => {
    alert('Use com modereção e não esqueça de me seguir no GitHub: Clique em suporte ou pesquise "kawanwagnner".')
    alert('Muito obrigado por testar a aplicação! 😊')
})
