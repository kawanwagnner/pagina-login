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
    usuario.nome = localStorage.setItem('nome', localNome);
    usuario.sobrenome = localStorage.setItem('sobrenome', localSobrenome);
    usuario.email = localStorage.setItem('email', localEmail);
    usuario.password = localStorage.setItem('password', localSenha);

    /* validation of date ..comparing informations ---------------------------------------------------------------------------------- */

    if (localNome == '') {
        alert('Digite um nome válido!')
    } else if (localSobrenome == '') {
        alert('Digite um sobrenome válido!')
    } else if (localEmail == '') {
        alert('Digite um e-mail válido!')
    } else if (localSenha.length < 8 || localSenha.length > 15) {
        alert('Senha deve ser maior que 8 e menor que 15 dígitos!')
    } else {
        location.href = "perfil.html";
        alert(`Bem-vindo(a)!!`);
        nome.innerHTML = '';
        sobrenome.innerHTML = '';
        email.innerHTML = '';
        password.innerHTML = '';
    }
})

/* Local Storage Login ..comparing informations ----------------------------------------------------------------------------------
[...]
*/

/* Termos de Uso. ----------------------------------------------------------------------------------*/

const termos = document.querySelector('.terms-utilize')
termos.addEventListener('click', () => {
    alert('Use com modereção e não esqueça de me seguir no GitHub: Clique em suporte ou pesquise direto no GitHub por "kawanwagnner".')
    alert('Muito obrigado por testar a aplicação! 😊')
})
