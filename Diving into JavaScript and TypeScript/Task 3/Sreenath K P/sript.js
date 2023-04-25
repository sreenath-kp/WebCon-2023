var searchIcon = document.querySelector('.search-icon');
var search = document.querySelector('.search');
var cross = document.querySelector('.cross');

searchIcon.addEventListener('click',function () {
    search.classList.toggle('active');
    searchIcon.classList.toggle('active');
    cross.classList.toggle('active');

})