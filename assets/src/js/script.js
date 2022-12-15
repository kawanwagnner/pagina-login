const btn = document.querySelector("#menu-hamb")
btn.addEventListener('click', () => {
    const navBar = document.querySelector('#navbar')

    navBar.classList.toggle('active')
    if (btn.innerHTML == 'X') {
        btn.innerHTML = '<i class="fa-solid fa-bars"</i>';
        document.body.style.overflow = 'auto'
    } else {
        btn.innerHTML = 'X';
        document.body.style.overflow = 'hidden'
    }
})