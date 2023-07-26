$(function() //
{
    var header=$("#header"); //в переменную header сохраняем селектор header
    var introH=$("#intro").innerHeight(); //в переменную introH сохраняем высоту блока intro
    var scrollOffset=$(window).scrollTop(); //переменная,котороя хранит текущий скролл страницы в пикселях
    checkScroll(scrollOffset); //вызов функции checkScroll
    $(window).on("scroll load resize" , function()//при скроле работает функция
    {
        scrollOffset=$(this).scrollTop();
        checkScroll(scrollOffset);
    });
    /*Fixed header*/
    function checkScroll(scrollOffset)
    {
        if(scrollOffset>=introH )
        {
            header.addClass("fixed"); //присваивает селктору header значение fixed из css
        }
        else
        {
            header.removeClass("fixed"); //возвращает значение от fixef к header
        }
    }

   /*Smooth scroll*/
   $("[data-scroll]").on("click",function(event)
   {
    event.preventDefault();
    let $this=$(this);
    let blockID = $(this).data('scroll');
    let blockOffSet=$(blockID).offset().top;
    nav.removeClass("active")
    nav_toggle.addClass("active");
    $("html,body").animate({
        scrollTop:blockOffSet - 20},500);
   });

   /*Menu nav toggle*/
    let nav = $("#nav");
    let nav_toggle = $("#nav-toggle");

    nav_toggle.on("click",function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        nav.toggleClass("active")
   });

   /*collapse*/
   $("[data-collapse]").on("click",function(event){
    event.preventDefault();
    var $this=$(this);
    var blockID = $(this).data("collapse");
    $(blockID).slideToggle();
    $(this).toggleClass("active")
   });

   /*slider*/
   $("[data-slider]").slick({
    infinite:true,
    fade:false,
    slidesToShow:1,
    slidesToScroll:1
   });
});
