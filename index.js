const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close')
const mobileLinks = document.querySelector('.mobileLinks')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body') 

menu.addEventListener('click', () => {
    mobileLinks.classList.remove('hide')
    closeMenu.classList.remove('hide')
    menu.classList.add('hide')
    overlay.classList.remove('hide')
    body.classList.add('noScroll')
    body.classList.remove('scroll')
    console.log(body.classList)
})

closeMenu.addEventListener('click', () => {
    mobileLinks.classList.add('hide')
    closeMenu.classList.add('hide')
    menu.classList.remove('hide')
    overlay.classList.add('hide')
    body.style.overflow = 'scroll'
    body.classList.remove('noScroll')
    body.classList.add('scroll')
    console.log(body.classList)
})

