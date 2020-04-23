$(document).ready(function(){
    let header = $("#header__menu");
    let intro = $("#header__col");
    let introH = intro.innerHeight();
    let scrollTop = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH){
            header.addClass("fixed"); 
        } else{
            header.removeClass("fixed"); 
        }
    }); 

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 78
        }, 700);
    });

    let nav = $("#nav")

    $("#navToggle").on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

    var button = $("#header__button");
    var modal = $("#modal");
    var close = $("#close");

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });
});