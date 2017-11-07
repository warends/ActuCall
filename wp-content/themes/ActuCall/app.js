'use strict';

$(document).ready(function () {

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

    $('.cap').hover(function () {
        var slug = $(this).attr('id');
        $('.' + slug).addClass('active');
    }, function () {
        var slug = $(this).attr('id');
        $('.' + slug).removeClass('active');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVjYWxsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsInNsaWNrIiwiZG90cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImJnVmlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3R5bGUiLCJob3ZlciIsInNsdWciLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVU7O0FBRXhCQyxZQUFRQyxHQUFSLENBQVksV0FBWjs7QUFFRkosTUFBRSxTQUFGLEVBQWFLLEtBQWIsQ0FBbUI7QUFDakJDLGNBQU0sSUFEVztBQUVqQkMsbUJBQVcsc0VBRk07QUFHakJDLG1CQUFXO0FBSE0sS0FBbkI7O0FBTUEsUUFBSUMsUUFBUVIsU0FBU1MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0FELFVBQU1FLElBQU47QUFDQSxRQUFJQyxRQUFRQyxPQUFPQyxVQUFQLEdBQW9CLElBQWhDO0FBQ0FMLFVBQU1NLEtBQU4sQ0FBWUgsS0FBWixHQUFvQkEsS0FBcEI7O0FBRUFaLE1BQUUsTUFBRixFQUFVZ0IsS0FBVixDQUNJLFlBQVc7QUFDUCxZQUFJQyxPQUFPakIsRUFBRSxJQUFGLEVBQVFrQixJQUFSLENBQWEsSUFBYixDQUFYO0FBQ0FsQixVQUFFLE1BQU1pQixJQUFSLEVBQWNFLFFBQWQsQ0FBdUIsUUFBdkI7QUFDSCxLQUpMLEVBSU8sWUFBVztBQUNWLFlBQUlGLE9BQU9qQixFQUFFLElBQUYsRUFBUWtCLElBQVIsQ0FBYSxJQUFiLENBQVg7QUFDQWxCLFVBQUUsTUFBTWlCLElBQVIsRUFBY0csV0FBZCxDQUEwQixRQUExQjtBQUNILEtBUEw7QUFVRCxDQXpCRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpO1xuXG4gICQoJy5zbGlkZXInKS5zbGljayh7XG4gICAgZG90czogdHJ1ZSxcbiAgICBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cImZhIGZhLWFycm93LWxlZnQgd2hpdGUgYXJyb3ctcHJldlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nLFxuICAgIG5leHRBcnJvdzogJzxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHQgd2hpdGUgYXJyb3ctbmV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nXG4gIH0pO1xuXG4gIHZhciBiZ1ZpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ3ZpZCcpO1xuICBiZ1ZpZC5wbGF5KCk7XG4gIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4JztcbiAgYmdWaWQuc3R5bGUud2lkdGggPSB3aWR0aDtcblxuICAkKCcuY2FwJykuaG92ZXIoXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc2x1ZyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAkKCcuJyArIHNsdWcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzbHVnID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICQoJy4nICsgc2x1ZykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICApO1xuXG59KTtcbiJdfQ==
