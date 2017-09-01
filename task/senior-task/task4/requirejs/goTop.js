(function goTop(){
  var $btn = $('.go-top')
  $(window).on('scroll', function(){
    if($(window).scrollTop() > 300){
      $btn.fadeIn('slow');
    }else{
      $btn.fadeOut('slow');
    }
  })

  $btn.on("click",function(){
    $('body').animate({
      scrollTop: 0
    },500)
  });
})()
