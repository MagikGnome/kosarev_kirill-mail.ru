var maps = document.querySelector('.maps');
var modal_map = document.querySelector('.modal_map');
var cross = document.querySelector('.cross');
maps.addEventListener('click',function(event) {
    event.preventDefault();
    modal_map.classList.toggle('map_open');
});
cross.addEventListener('click',function(event) {
    event.preventDefault();
    modal_map.classList.toggle('map_open');
});