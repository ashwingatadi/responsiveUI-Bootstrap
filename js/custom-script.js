$(document).ready(function(){
    $('#myNavbar ul li').click(function(){
        $('#myNavbar ul li').removeClass('active');
        $(this).addClass('active');
    });
});