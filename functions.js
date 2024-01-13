document.addEventListener('DOMContentLoaded', function () {
    var line1 = document.querySelector('.typewriter.line1');
    var line2 = document.querySelector('.typewriter.line2');

    setTimeout(function () {
        line1.classList.add('hide-cursor');
    }, 2100); // Hide cursor after 2 seconds

    setTimeout(function () {
        line2.style.visibility = 'visible';
    }, 2100); // Make the second line visible after 2 seconds
});
