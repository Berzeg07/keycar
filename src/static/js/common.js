$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('is-active')
        $('.sidebar').toggleClass('is-active')
    })
});
