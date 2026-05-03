const menu = document.getElementById('menu');
const navItem = document.getElementById('navItem');
const menuIcon = document.getElementById('menuIcon');
const bgWrap = document.querySelector('#bg-wrap')
menu.addEventListener('click', () => {
    if (navItem.classList.contains('active')) {
        // console.log('menu is clicked');
        navItem.classList.remove('active')
        bgWrap.classList.remove('wrap-active')
    }
    else {
        navItem.classList.add('active')
        bgWrap.classList.add('wrap-active')
    }
})
menuIcon.addEventListener('click', () => {
    if (navItem.classList.contains('active')) {
        navItem.classList.remove('active')
        bgWrap.classList.remove('wrap-active')
    } else {
        navItem.classList.add('active')
        bgWrap.classList.remove('wrap-active')
    }
})
