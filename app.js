const header = $('#header');
//
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

//     const nav__link = $('.nav__link');
//     nav__link.removeClass("active")
//     nav__toggle.addClass("active");
//     $("html,body").animate({
//         scrollTop:blockOffSet - 20},500);
//    });

//    /*Menu nav toggle*/
//     let nav = $("#nav");
//     let nav__toggle = $("#nav-toggle");

//     nav__toggle.on("click",function(event){
//         event.preventDefault();

//         $(this).toggleClass("active");
//         nav.toggleClass("active")
//    });

