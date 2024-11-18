$(window).scroll(function(){
    if(scrollY < 1000) {
        $('header').fadeIn(200).css('backgroundColor', '#000000')
        $('.wrap').css('color', '#ffffff')
        $('.lang button img').css('filter', 'invert(100)')
     } else {
         $('.lang button img').css('filter', 'invert(0)')
         $('header').css('backgroundColor', '#ffffff')
         $('.wrap').css('color', '#000000')
     }
 })
$('.langbtn').on('click',function(){
 $('.lang a:last-child').toggle()
})
 $('ul > li:nth-child(5)').mouseenter(function(){
     $('.sub').slideDown(300)
 })
 $('ul > li:nth-child(5)').mouseleave(function(){
     $('.sub').slideUp(300)
 })


 $('.subpage1').mouseenter(function(){
     $('.p1_left b').fadeTo(500,1)
     $('.p1_left img').fadeTo(500,0.5)
 })
 $('.subpage2').mouseenter(function(){
     $('.p2_t_r b').fadeTo(500,1)
     $('.p2_t_r img').fadeTo(500,0.5)
 })
 $('.subpage3').mouseenter(function(){
     $('.p2_b_l b').fadeTo(500,1)
     $('.p2_b_l img').fadeTo(500,0.5)
 })
 $('.subpage4').mouseenter(function(){
     $('.p3_t_r b').fadeTo(500,1)
     $('.p3_t_r img').fadeTo(500,0.5)
 })
 $('.subpage5').mouseenter(function(){
     $('.p3_b_r b').fadeTo(500,1)
     $('.p3_b_r img').fadeTo(500,0.5)
 })


 $('.subpage1').mouseleave(function(){
     $('.p1_left b').fadeTo(500,0)
     $('.p1_left img').fadeTo(500,1)
 })
 $('.subpage2').mouseleave(function(){
     $('.p2_t_r b').fadeTo(500,0)
     $('.p2_t_r img').fadeTo(500,1)
 })
 $('.subpage3').mouseleave(function(){
     $('.p2_b_l b').fadeTo(500,0)
     $('.p2_b_l img').fadeTo(500,1)
 })
 $('.subpage4').mouseleave(function(){
     $('.p3_t_r b').fadeTo(500,0)
     $('.p3_t_r img').fadeTo(500,1)
 })
 $('.subpage5').mouseleave(function(){
     $('.p3_b_r b').fadeTo(500,0)
     $('.p3_b_r img').fadeTo(500,1)
 })


  $('.p1_youtube .slide').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     autoplay: true,
     autoplaySpeed: 2000,
     nextArrow:$('.next'),
     prevArrow:$('.prev'),
     responsive: [
         {
         breakpoint: 1400,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
             }
         },
         {
         breakpoint: 1024,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             }
         },
     ]
 });

 $('.page4 .video_slide').slick({
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     nextArrow:$('.next_1'),
     prevArrow:$('.prev_1'),
 })
  $('.page_5_slidebox').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow:$('.next_2'),
      prevArrow:$('.prev_2'),
      responsive: [
         {
         breakpoint: 1400,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
             }
         },
         {
         breakpoint: 1024,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             }
         },
     ]
  });