const menu = document.getElementById('menu');
const navItem = document.getElementById('navItem');
const menuIcon = document.getElementById('menuIcon');
menu.addEventListener('click', () => {
    if (navItem.classList.contains('active')) {
        // console.log('menu is clicked');
        navItem.classList.remove('active')
    }
    else {
        navItem.classList.add('active')
    }
})
menuIcon.addEventListener('click', () => {
    if (navItem.classList.contains('active')) {
        navItem.classList.remove('active')
    } else {
        navItem.classList.add('active')

    }
})
