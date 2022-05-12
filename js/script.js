const menuLink = document.querySelector('.menu__link');
const menuContent = document.querySelector('.menu__content');
menuLink.addEventListener('click', function () {
   menuContent.classList.toggle('active');
});

document.querySelector('.map-wrapper').onclick = function () {
   menuContent.classList.remove('active');
}