'use strict';

$(document).ready(function () {
    // var path = document.querySelector('.line-1');
    // var length = path.getTotalLength();
    // console.log(length);

    $('#menu-btn').on('click', function (e) {
        e.preventDefault();
        $('#menu-left, #menu-right').toggleClass('active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('#menu-btn').addClass("active");
            $('#menu-left, #menu-right').addClass('hide');
        } else {
            $('#menu-btn').removeClass("active");
            $('#menu-left, #menu-right').removeClass('hide');
        }
    });

    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-arrow-left white arrow-prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-arrow-right white arrow-next" aria-hidden="true"></i>'
    });

    var bgVid = document.getElementById('bgvid');
    bgVid.play();
    var width = window.innerWidth + 'px';
    bgVid.style.width = width;

    $('.cap').hover(function () {
        var slug = $(this).attr('id');
        $('.' + slug).addClass('active');
    }, function () {
        var slug = $(this).attr('id');
        $('.' + slug).removeClass('active');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVjYWxsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzbGljayIsImRvdHMiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImJnVmlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic3R5bGUiLCJob3ZlciIsInNsdWciLCJhdHRyIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUFGLE1BQUUsV0FBRixFQUFlRyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFVBQUNDLENBQUQsRUFBSztBQUM1QkEsVUFBRUMsY0FBRjtBQUNBTCxVQUFFLHlCQUFGLEVBQTZCTSxXQUE3QixDQUF5QyxRQUF6QztBQUNILEtBSEQ7O0FBS0FOLE1BQUVPLE1BQUYsRUFBVUMsTUFBVixDQUFpQixZQUFXO0FBQ3hCLFlBQUlSLEVBQUUsSUFBRixFQUFRUyxTQUFSLEtBQXNCLEVBQTFCLEVBQTZCO0FBQ3pCVCxjQUFFLFdBQUYsRUFBZVUsUUFBZixDQUF3QixRQUF4QjtBQUNBVixjQUFFLHlCQUFGLEVBQTZCVSxRQUE3QixDQUFzQyxNQUF0QztBQUNILFNBSEQsTUFJSTtBQUNBVixjQUFFLFdBQUYsRUFBZVcsV0FBZixDQUEyQixRQUEzQjtBQUNBWCxjQUFFLHlCQUFGLEVBQTZCVyxXQUE3QixDQUF5QyxNQUF6QztBQUNIO0FBQ0osS0FURDs7QUFXRlgsTUFBRSxTQUFGLEVBQWFZLEtBQWIsQ0FBbUI7QUFDakJDLGNBQU0sSUFEVztBQUVqQkMsa0JBQVMsSUFGUTtBQUdqQkMsdUJBQWMsSUFIRztBQUlqQkMsd0JBQWUsQ0FKRTtBQUtqQkMsbUJBQVcsc0VBTE07QUFNakJDLG1CQUFXO0FBTk0sS0FBbkI7O0FBU0EsUUFBSUMsUUFBUWxCLFNBQVNtQixjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQUQsVUFBTUUsSUFBTjtBQUNBLFFBQUlDLFFBQVFmLE9BQU9nQixVQUFQLEdBQW9CLElBQWhDO0FBQ0FKLFVBQU1LLEtBQU4sQ0FBWUYsS0FBWixHQUFvQkEsS0FBcEI7O0FBRUF0QixNQUFFLE1BQUYsRUFBVXlCLEtBQVYsQ0FDSSxZQUFXO0FBQ1AsWUFBSUMsT0FBTzFCLEVBQUUsSUFBRixFQUFRMkIsSUFBUixDQUFhLElBQWIsQ0FBWDtBQUNBM0IsVUFBRSxNQUFNMEIsSUFBUixFQUFjaEIsUUFBZCxDQUF1QixRQUF2QjtBQUNILEtBSkwsRUFJTyxZQUFXO0FBQ1YsWUFBSWdCLE9BQU8xQixFQUFFLElBQUYsRUFBUTJCLElBQVIsQ0FBYSxJQUFiLENBQVg7QUFDQTNCLFVBQUUsTUFBTTBCLElBQVIsRUFBY2YsV0FBZCxDQUEwQixRQUExQjtBQUNILEtBUEw7QUFVRCxDQTdDRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIC8vIHZhciBwYXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtMScpO1xuICAgIC8vIHZhciBsZW5ndGggPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgLy8gY29uc29sZS5sb2cobGVuZ3RoKTtcblxuICAgICQoJyNtZW51LWJ0bicpLm9uKCdjbGljaycsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJyNtZW51LWxlZnQsICNtZW51LXJpZ2h0JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMCl7XG4gICAgICAgICAgICAkKCcjbWVudS1idG4nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQoJyNtZW51LWxlZnQsICNtZW51LXJpZ2h0JykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgJCgnI21lbnUtYnRuJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAkKCcjbWVudS1sZWZ0LCAjbWVudS1yaWdodCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAkKCcuc2xpZGVyJykuc2xpY2soe1xuICAgIGRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOjQwMDAsXG4gICAgc2xpZGVzVG9TY3JvbGw6MSxcbiAgICBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cImZhIGZhLWFycm93LWxlZnQgd2hpdGUgYXJyb3ctcHJldlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nLFxuICAgIG5leHRBcnJvdzogJzxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHQgd2hpdGUgYXJyb3ctbmV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nXG4gIH0pO1xuXG4gIHZhciBiZ1ZpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ3ZpZCcpO1xuICBiZ1ZpZC5wbGF5KCk7XG4gIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4JztcbiAgYmdWaWQuc3R5bGUud2lkdGggPSB3aWR0aDtcblxuICAkKCcuY2FwJykuaG92ZXIoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc2x1ZyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAkKCcuJyArIHNsdWcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzbHVnID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICQoJy4nICsgc2x1ZykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICApO1xuXG59KTtcbiJdfQ==
