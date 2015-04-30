/* 
 * Controle de menus
 */

$(function () {
    $('.menu-item').click(function () {
        $('#page-container').load($(this).data('page') + '.html');
    });
});