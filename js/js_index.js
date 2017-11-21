var maps = document.querySelector('.maps');
var modal_map = document.querySelector('.modal_map');
var cross_map = document.querySelector('.cross_map');
var modal_login = document.querySelector('.modal_login');
var entrance = document.querySelector('.entrance');
var cross_login = document.querySelector('.cross_login');
entrance.addEventListener('click',function(event) {
    event.preventDefault();
    modal_login.classList.toggle('login_open');
});
maps.addEventListener('click',function(event) {
    event.preventDefault();
    modal_map.classList.toggle('map_open');
});
cross_map.addEventListener('click',function(event) {
    event.preventDefault();
    modal_map.classList.toggle('map_open');
});
cross_login.addEventListener('click',function(event) {
    event.preventDefault();
    modal_login.classList.toggle('login_open');
});