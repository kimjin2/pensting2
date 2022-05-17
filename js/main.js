/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
$(function(){
    var a = 1 
    $('.btn1').click(function(){
      // $(this).toggleClass('on');
      if(a==1) {
          $(this).addClass('on');   
          $('.box').fadeIn();
          a=0; 
      }else{
          $(this).removeClass('on');
          $('.box').fadeOut();
          a=1; 
      }
    })

    $('.nav_m').click(function(){
      // $(this).toggleClass('on');
      if(a==1) {
          $(this).addClass('on');   
          $('.box').fadeIn();
          a=0; 
      }else{
          $(this).removeClass('on');
          $('.box').fadeOut();
          a=1; 
      }
    })


  $(window).scroll(function(){
    /********second-section SECTION**************/
    if ($(document).scrollTop() >= $('.second-section').position().top - 50) {
        $('.second-section').removeClass('show-animation');
        $('.second-section').addClass('show-animation');
    }
    else{
        $('.second-section').removeClass('show-animation');
    }
      /********second-section SECTION**************/
      if ($(document).scrollTop() >= $('.third-section').position().top - 0) {
          $('.third-section').removeClass('show-animation');
          $('.third-section').addClass('show-animation');
      }
      else{
          $('.third-section').removeClass('show-animation');
      }
 
    /********second-section SECTION**************/
    if ($(document).scrollTop() >= $('.fourth-section').position().top - 50) {
        $('.fourth-section').removeClass('show-animation');
        $('.fourth-section').addClass('show-animation');
    }
    else{
        $('.fourth-section').removeClass('show-animation');
    }

  /********fix-section SECTION**************/
  if ($(document).scrollTop() >= $('.five-section').position().top - 50) {
      $('.five-section').removeClass('show-animation');
      $('.five-section').addClass('show-animation');
  }
  else{
      $('.five-section').removeClass('show-animation');
  }

  /********six-section SECTION**************/
  if ($(document).scrollTop() >= $('.six-section').position().top - 0) {
      $('.six-section').removeClass('show-animation');
      $('.six-section').addClass('show-animation');
  }
  else{
      $('.six-section').removeClass('show-animation');
  }
})
/********six-sectionSECTION**************/



 
  var sta = 0
  $('.btn1').click(function(){
    
    
    if ( sta == 0) {

      $(this).addClass('on');
   
   
      sta = 1 
    } // sta 1
    
     else{ 
       $(this).removeClass('on');
     

      sta = 0
    }// else sta = 0

  })//click <nav>
  
  $('.nav_m').click(function(){
    if ( sta == 0) {
      $(this).addClass('on');
   
      sta = 1 
    } // sta 1
    
     else{
      $(this).removeClass('on');

      sta = 0
    }// else sta = 0

  })//click <nav_m>
  
  
  $('.tabSet').each(function(){
    var anchor = $(this).find('.tabs a'); // a .tabs a 중 하나 
    var anchor_on = $(this).find('.tabs a.on'); // b) a중 .on
    /* find는 하위요소 중에 찾음. 손주/자식 모두 다 찾을 수 있음 */
    var href_on = anchor_on.attr('href'); //c) b의 href
    var panel = $(this).find('.panel'); // #panel1-1 
  
  


    $(href_on).show(); 
    anchor.each(function(){
      var href_this = $(this).attr('href');
      $(this).click(function(){
        panel.hide();
        $(href_this).fadeIn(650);
        anchor.removeClass('on')
        $(this).addClass('on');
        $(href_this).show();
        
       
        })
      })//each2
    })//each
      

        $(".variable").slick({
            dots: false,
            infinite: true,
            variableWidth: true,
            autoplay : true,
            autoplaySpeed : 3000, 
            responsive: [
              { breakpoint: 1210,    
                settings: {
                slidesToShow: 3,
            }},
            { breakpoint: 769,    
              settings: {
              slidesToShow: 3,
              centerMode: true,
          }}
          ]
          });// variable파트너 

        $(".center").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay : true,
            autoplaySpeed : 3000,
            responsive: [
            { breakpoint: 1210,    
              settings: {
              slidesToShow: 3,
          }},
          { breakpoint: 769,    
            settings: {
            slidesToShow: 1,
        }}
        ]
          }); //center slick

        
          $(".lazy").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            pauseOnHover : true,
            responsive: [{ 
              breakpoint: 425,    
              settings: {
              slidesToShow: 3,
              swipe : true,        //모바일_ 스와이프 가능
              swipeToSlide : true,   //모바일_스와이프 가능
              touchMove : true,      //모바일_손가락터치시 슬라이드
          }},
          { breakpoint: 1025,    
            settings: {
            slidesToShow: 3,
            swipe : true,        //모바일_ 스와이프 가능
            swipeToSlide : true,   //모바일_스와이프 가능
            touchMove : true,      //모바일_손가락터치시 슬라이드
        }},] //lazy slick br
          });
        
          var swiper = new Swiper(".mySwiper", {
            pagination: {
              el: ".swiper-pagination",
              type: "progressbar"
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          });

})
//ready