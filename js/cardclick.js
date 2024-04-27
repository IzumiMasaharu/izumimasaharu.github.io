document.querySelector('.card').addEventListener('click', function() {
    window.location.href = this.getAttribute('href');
});