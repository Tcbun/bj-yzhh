// var mySwiper = new Swiper('.swiper-container1', {
//     direction: 'horizontal',
//     autoplay: false,//可选选项，自动滑动

// 如果需要分页器
// pagination: {
//     el: '.swiper-pagination1',
// },

// 如果需要前进后退按钮
// navigation: {
//     nextEl: '.swiper-button-next1',
//     prevEl: '.swiper-button-prev1',
// },

// 如果需要滚动条
//     scrollbar: {
//         el: '.swiper-scrollbar1',
//     },
// })

// var mySwiper2 = new Swiper('.swiper-container2', {
//     direction: 'horizontal',
// autoplay: false,//可选选项，自动滑动

// 如果需要分页器
// pagination: {
//     el: '.swiper-pagination2',
// },

// 如果需要前进后退按钮
// navigation: {
//     nextEl: '.swiper-button-next2',
//     prevEl: '.swiper-button-prev2',
// },

// 如果需要滚动条
//     scrollbar: {
//         el: '.swiper-scrollbar2',
//     },
// })

$("#feelNow").click(function () {
    $(".dialog").fadeIn();
})
$("#readMore").click(function () {
    $(".dialog").fadeIn();
})
$(".dialog").click(function () {
    $(this).fadeOut();
})
$(".dialog img:nth-of-type(2)").click(function () {
    $(".dialog").fadeOut();
})
$(".news-ex button").click(function () {
    $(".dialog").fadeIn();
})
$(function () {
    var timer = null;
    $(".choice li img").hover(function () {
        $(this).animate({
            "opacity": ".5"
        });

        var imgSrc = $(this).attr("src");
        var imgName = imgSrc.substring(15);
        var imgSrcNow = imgSrc.replace(/\.\/images\/index\/(.*).png/g, "./images/index/b_" + imgName);
        $(this).attr("src", imgSrcNow);

    }, function () {
        // clearTimeout(timer);
        // var $_that = $(this);
        // $(this).animate({
        //     "opacity": "1"
        // }, 500);
        // timer = setTimeout(function () {
        //     var imgSrc = $_that.attr("src");
        //     var imgName = imgSrc.substring(17);
        //     var imgSrcNow = imgSrc.replace(/\.\/images\/index\/(.*).png/g, "./images/index/" + imgName);
        //     $(this).find("img").attr("src", imgSrcNow).css("background", "#5c91fd");
        // }, 1500)
    })
})
