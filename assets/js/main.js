let block_pagination = document.querySelector('block-pagination-item');

// Check height where user scroll
window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    let height = document.documentElement.clientHeight;
    console.log(height, scroll);
});