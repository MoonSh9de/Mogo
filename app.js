//* Header vars
const header = $('#header');
const headerLogo = $('#header-logo');

//* Data-scroll vars
const intro = $('#intro');
const about = $('#about');
const services = $('#services');
const work = $('#work');
const blog = $('#blog');
const contact = $('#contact');
const blocksArray = [intro, services, about, work, blog, contact];

//* Links var
const navLinks = $('.nav__link')

// *Menu nav toggle
const nav = $("#nav");
const nav__toggle = $("#nav-toggle");
const burger = $("#burger");
const x_mark = $("#x-mark");

//* Scroll var
let scrollOffset = $(window).scrollTop();

// *Functions
const addHiddenClass = function() {
    burger.toggleClass('hidden');
    x_mark.toggleClass('hidden');
}

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

function eventScroll() {

    scrollOffset = $(this).scrollTop()
    if(scrollOffset > intro.innerHeight()) {
        header.addClass("fixed");
         addActiveToBlocks();
    }
    else {
        header.removeClass('fixed');
    }
}

//* Hovers
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
    addHiddenClass();
});

//* Events

const eventForNav = new Event('checkNavActive')
//* Scroll
window.addEventListener('scroll', eventScroll);

$("[data-scroll]").on('click', function () {
    navLinks.removeClass('active');
    $(this).addClass('active');
});

//* Smooth scroll
$("[data-scroll]").on("click",function(event)
{
    event.preventDefault();
    const blockID = $(this).data('scroll');
    const element = document.getElementById(blockID);
    const blockOffSet = element.offsetTop;
    navLinks.removeClass("active")
    if (document.documentElement.clientWidth <= 990) {
        nav.toggleClass('active');
        addHiddenClass();
    }
    //* Animate for scroll
    if(blockID !== 'intro') {
        $("html,body").animate({
            scrollTop:blockOffSet + 40},700);
    }
    else  $("html,body").animate({
        scrollTop:blockOffSet},700);

});

//* Slider
$("[data-slider]").slick({
    infinite:true,
    fade:false,
    slidesToShow:1,
    slidesToScroll:1,
});

//* Accordion block
$("[data-collapse]").on("click",function(event){
    event.preventDefault();
    let $this=$(this);
    let blockID = $(this).data("collapse");
    $(blockID).slideToggle();
    $(this).toggleClass("active")
});

//* Nav__toggle
nav__toggle.on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    nav.toggleClass("active")
});


