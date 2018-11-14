$(function(){
    $(window).on("load resize",function(){
        $(".fill-screen").css("height",window.innerHeight);
    });
    //scrollspy function
    //it call on body
    
    $('.progress-bar').each(function(){
        var bar_value=$(this).attr('aria-valuenow')+'%';
        $(this).animate({width:bar_value},{duration:2000,easing:'easeOutCirc'});
    });
    $('nav a').bind('click', function(){
        $($(this).attr('href')).animatescroll({scrollSpeed: 3000, padding:50});
        event.preventDefault();
    });
    

    $('body').scrollspy({
        target:"nav",
        offset:150
            });
})