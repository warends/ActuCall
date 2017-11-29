$(document).ready(function(){
    // var path = document.querySelector('.line-1');
    // var length = path.getTotalLength();
    // console.log(length);

    $('#menu-btn').on('click', (e)=>{
        e.preventDefault();
        $('#menu-left, #menu-right').toggleClass('active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 10){
            $('#menu-btn').addClass("active");
            $('#menu-left, #menu-right').addClass('hide');
        }
        else{
            $('#menu-btn').removeClass("active");
            $('#menu-left, #menu-right').removeClass('hide');
        }
    });

  $('.slider').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed:4000,
    slidesToScroll:1,
    prevArrow: '<i class="fa fa-arrow-left white arrow-prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right white arrow-next" aria-hidden="true"></i>'
  });

  var bgVid = document.getElementById('bgvid');
  bgVid.play();
  var width = window.innerWidth + 'px';
  bgVid.style.width = width;

  $('.cap').hover(
      function() {
          var slug = $(this).attr('id');
          $('.' + slug).addClass('active');
      }, function() {
          var slug = $(this).attr('id');
          $('.' + slug).removeClass('active');
      }
  );

});
