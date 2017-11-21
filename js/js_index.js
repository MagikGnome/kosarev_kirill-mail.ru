var maps = document.querySelector('.maps');
var modal_map = document.querySelector('.modal_map');
var cross = document.querySelector('.cross');
var modal_login = document.querySelector('.modal_login');
var entrance = document.querySelector('.entrance');
entrance.addEventListener('click',function(event) {
    event.preventDefault();
    modal_login.classList.toggle('login_open');
});
maps.addEventListener('click',function(event) {
    event.preventDefault();
    modal_map.classList.toggle('map_open');
});
cross.addEventListener('click',function(event) {
    event.preventDefault();
    modal_map.classList.toggle('map_open');
});