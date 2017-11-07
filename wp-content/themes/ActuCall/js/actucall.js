$(document).ready(function(){

    console.log('connected');

  $('.slider').slick({
    dots: true,
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
