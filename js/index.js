// $('.bottom-inner>ul>li>a').mouseenter(function() {
//  $('.bottom-inner>ul .home').css('opacity','1')
// });
// $('.bottom-inner>ul>li>a').mouseleave(function() {
//  $('.bottom-inner>ul .home').delay(1000).css('opacity','0')
// });
$('.d .gouwudai').mouseenter(function(){
    $('.d .cart').css({'height':523,'opacity':1})
})
$('.d .gouwudai').mouseleave(function () {
    $('.d .cart').css({ 'height': 0, 'opacity': 0 })
})
$('.d .cart').mouseenter(function () {
    $('.d .cart').css({ 'height': 523, 'opacity': 1 })
})
$('.d .cart').mouseleave(function() {
  $('.d .cart').css({ height: 0, opacity: 0})
})
var fun = 0
$('.d .sousuo').click(function () {
    if(fun == 0){
        fun=1
        $('.d .go').css('display','block')
    }else{
        fun = 0
        $('.d .go').css('display', 'none')
    }
    
})
$('body').click(function (e) { 
    $('.f-b-m>ul>li:first-child .eng').css('display', 'none')
    $('.f-b-m>ul>li:last-child .e').css('display', 'none')
    num =0
    num1 =0
});
var num = 0
$('.f-b-m>ul>li:first-child').click(function (event) {
    event.stopPropagation()
    if (num == 0) {
        num = 1
        $('.f-b-m>ul>li:first-child .eng').css('display', 'block')
    } else {
        num = 0
        $('.f-b-m>ul>li:first-child .eng').css('display', 'none')
    }

})

var num1 = 0
$('.f-b-m>ul>li:last-child').click(function(event) {
    event.stopPropagation()
  if (num == 0) {
    num1 = 1
    $('.f-b-m>ul>li:last-child .e').css('display', 'block')
  } else {
    num1 = 0
    $('.f-b-m>ul>li:last-child .e').css('display', 'none')
  }
})


$(window).scroll(function() {
    var juli = $(this).scrollTop()
    // console .log(juli)
     if (juli > 500) {
        $('.fanhui').stop().fadeIn(1000)
     }else{
        $('.fanhui').stop().fadeOut(1000)
     }
});
 $('.fanhui').click(function() {
    $('html').animate({"scrollTop":0},500)
});




// var num = 0
//     $('.banner .pic .l').click(function() {
//         num = num + 1
//           if(num>4){
//             num=0
//         }
//         $('.banner .pic>img ').eq(num).addClass('love')
//         $('section .pic>img ').eq(num).siblings('img').removeClass('love')
//     });
//      $('.banner .pic .r').click(function() {
//         num = num - 1
//           if(num<0){
//             num=4
//         }
//         $('.banner .pic>img ').eq(num).addClass('love')
//         $('.banner .pic>img ').eq(num).siblings('img').removeClass('love')
//     });
$('.left').click(function (e) {
    var num = $(this).parent('.shoes').find('.text').val()

    num = parseInt(num) + 1

    //  console .log(num)

    $(this)
      .parent('.shoes')
      .find('.text')
      .val(num)
})

$('.right').click(function (e) {
    var num = $(this).parent('.shoes').find('.text').val()

    num = parseInt(num) - 1

    //  console .log(num)

    if (num < 1) {
        num = 1
    }

    $(this)
      .parent('.shoes')
      .find('.text')
      .val(num)
})