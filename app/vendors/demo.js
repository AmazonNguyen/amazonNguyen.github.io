/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// document.addEventListener('DOMContentLoaded', function() {
//     particleground(document.getElementById('particles'), {
//         dotColor: '#5cbdaa',
//         lineColor: '#5cbdaa'
//     });
//     var intro = document.getElementById('intro');
//     intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
// }, false);



// jQuery plugin example:
$(document).ready(function() {
    $('#particles').particleground({
        dotColor: '#AED9E0',
        lineColor: '#AED9E0'
    });
    $('.intro').css({
        'margin-top': -($('.intro').height() / 2)
    });
});