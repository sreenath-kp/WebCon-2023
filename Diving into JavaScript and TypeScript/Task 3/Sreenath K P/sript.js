var Top = 0;
    header = document.querySelector('header');
window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > Top) {
        header.style.top = "-8vh";
    }else {
        header.style.top = "0";
    }
})    

var searchIcon = document.querySelector('.search-icon');
var search = document.querySelector('.search');
var cross = document.querySelector('.cross');

searchIcon.addEventListener('click',function () {
    search.classList.toggle('active');
    searchIcon.classList.toggle('active');
    cross.classList.toggle('active');

})
