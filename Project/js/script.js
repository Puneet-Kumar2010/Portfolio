let body = document.querySelector('.body');
let menubar = document.querySelector('.decive-menu');
let shortMenuIcon = document.querySelector('.material-symbols-outlined');
let iconContainer = document.querySelector('.short-menu');

document.addEventListener('scroll', function () {
    menubar.style.visibility = 'hidden'
    console.log('none');
    iconContainer.innerHTML = '<span class="material-symbols-outlined" onclick="showMenu()">menu</span>'
})

function showMenu() {
    if (menubar.style.right == '0px' || menubar.style.display == "none") {
        iconContainer.innerHTML = '<span class="material-symbols-outlined" onclick="showMenu()">menu</span>'
        menubar.style.right = '-90vw'
        menubar.style.visibility = 'visible'
    } else {
        menubar.style.right = '0px'
        iconContainer.innerHTML = '<span class="material-symbols-outlined" onclick="showMenu()">close</span> '
        menubar.style.display == "flex"
        menubar.style.visibility = 'visible'
    }
}