$(document).ready(function(){
    $(".more-itmes").click(function(){
        $(this).parent().find(".more").slideToggle;
    });
});