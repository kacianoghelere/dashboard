/* 
 * Controle de menus
 */

$(function () {
    $('.menu-item').click(function () {
        $('#page-container').load('pages/' + $(this).data('page') + '.html');
    });
});