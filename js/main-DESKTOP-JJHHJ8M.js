/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
$(function(){
  
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
                anchor.removeClass('on')
                $(this).addClass('on');
                $(href_this).show();
                })
            })//each2
        })//each;

        $(".variable").slick({
            dots: false,
            infinite: true,
            variableWidth: true,
            autoplay : true,
            autoplaySpeed : 3000, 
          });// variable파트너 

        $(".center").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay : true,
            autoplaySpeed : 3000, 
          }); //center slick
        

})//ready