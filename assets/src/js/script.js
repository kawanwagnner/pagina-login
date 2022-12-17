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
    const login = { 
        email: document.querySelector('.email-box').value, 
        password: document.querySelector('.password-box').value 
    }
    
    email.innerHTML = login.email;
    password.innerHTML = login.password;
})