const header = $('#header');
const headerLogo = $('#header-logo');
//data-scroll
const intro = $('#intro');
const about = $('#about');
const services = $('#services');
const work = $('#work');
const blog = $('#blog');
const contact = $('#contact');
const blocksArray = [intro, services, about, work, blog, contact];

const navLinks = $('.nav__link')

let scrollOffset = $(window).scrollTop();

window.addEventListener('scroll', function  (){
    scrollOffset = $(this).scrollTop()
    if(scrollOffset > intro.innerHeight()) {
        header.addClass("fixed");
         addActiveToBlocks();
    }
    else {
        header.removeClass('fixed');
    }
});

$("[data-scroll]").on('click', function () {
    navLinks.removeClass('active');
    $(this).addClass('active');
});

const addActiveToBlocks = function() {
    for (let i = 0; i < blocksArray.length; i++) {
        if(blocksArray[i].offset().top  < scrollOffset && scrollOffset < (blocksArray[i].offset().top + blocksArray[i].innerHeight()))
        {
            for(const link of navLinks) {
                link.classList.remove('active')
                if(link.getAttribute('data-scroll') === blocksArray[i][0].getAttribute('id')) {
                    link.classList.add('active');
                }
            }
        }
    }
}

  /*slider*/
   $("[data-slider]").slick({
    infinite:true,
    fade:false,
    slidesToShow:1,
    slidesToScroll:1,
   });

   /*Accordion block:*/
   $("[data-collapse]").on("click",function(event){
    event.preventDefault();
    let $this=$(this);
    let blockID = $(this).data("collapse");
    $(blockID).slideToggle();
    $(this).toggleClass("active")
   });

// $(function()
// {
//     var header=$("#header"); //в переменную header сохраняем селектор header
//     var introH=$("#intro").innerHeight(); //в переменную introH сохраняем высоту блока intro
//     var scrollOffset=$(window).scrollTop(); //переменная,котороя хранит текущий скролл страницы в пикселях
//     checkScroll(scrollOffset); //вызов функции checkScroll
//     $(window).on("scroll load resize" , function()//при скроле работает функция
//     {
//         scrollOffset=$(this).scrollTop();
//         checkScroll(scrollOffset);
//     });
//     /*Fixed header*/
//     function checkScroll(scrollOffset)
//     {
//         if(scrollOffset>=introH )
//         {
//             header.addClass("fixed"); //присваивает селктору header значение fixed из css
//         }
//         else
//         {
//             header.removeClass("fixed"); //возвращает значение от fixef к header
//         }
//     }

   //? Smooth scroll
//    $("[data-scroll]").on("click",function(event)
//    {
//     event.preventDefault();
//     let $this=$(this);
//     let blockID = $(this).data('scroll');
//     let blockOffSet=$(blockID).offset().top;

// *    const nav__link = $('.nav__link');
//     nav__link.removeClass("active")
//     nav__toggle.addClass("active");
//     $("html,body").animate({
//         scrollTop:blockOffSet - 20},500);
//    });

   /*Menu nav toggle*/
    const  nav = $("#nav");
    const nav__toggle = $("#nav-toggle");
    const burger = $("#burger");
    const x_mark = $("#x-mark");

    nav__toggle.on("click", function(event){
        event.preventDefault();
        console.log(nav__toggle.text());
        $(this).toggleClass("active");
        nav.toggleClass("active")
   });

    //Hovers
    headerLogo.hover(function() {
        headerLogo.toggleClass('fa-beat-fade');
    });

    burger.hover(function() {
        burger.toggleClass('fa-beat-fade');
    });

    x_mark.hover(function() {
        x_mark.toggleClass('fa-spin');
    });

    nav__toggle.on('click', function() {
        burger.toggleClass('hidden');
        x_mark.toggleClass('hidden');
    });



