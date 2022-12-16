const btn = document.querySelector("#menu-hamb")
btn.addEventListener('click', () => {
    const navBar = document.querySelector('#navbar')
    const active = document.querySelector('#active')

    navBar.classList.toggle('active')
    if (btn.innerHTML == 'X') {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        btn.innerHTML = 'X';
    }
})