$(document).ready(function(){
    // var path = document.querySelector('.contact-line');
    // var length = path.getTotalLength();
    // console.log(length);

    let $menuBtn = $('#menu-btn'),
        $cap = $('.cap'),
        $menu = $('.menu');

    $menuBtn.on('click',(e) => {
        e.preventDefault();
        $menu.toggleClass('active');
    });

    if(window.innerWidth >= 768){
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10){
                $menuBtn.addClass("active");
                $menu.addClass('hide');
            } else {
                $menuBtn.removeClass("active");
                $menu.removeClass('hide');
            }
        });
    }

    const $caps = $('.cap');
    const $lines = $('.line');
    const $capDesc = $('.cap-desc');
    window.sr = ScrollReveal();

    function clearCap(){
        $caps.removeClass('active');
        $lines.removeClass('active');
        $capDesc.removeClass('active');
    }
    let page = $('main').attr('id');

    if(page === 'home'){

        $('.slider').slick({
            dots: true,
            autoplay:true,
            autoplaySpeed:4000,
            slidesToScroll:1,
            prevArrow: '<i class="fa fa-arrow-left white arrow-prev" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-arrow-right white arrow-next" aria-hidden="true"></i>'
        });

        if(window.innerWidth >= 768){
            $('#real-time-call-intelligence-tools').addClass('active');
            $('.real-time-call-intelligence-tools-line').addClass('active');
            $('.real-time-call-intelligence-tools').addClass('active');
        }

        $cap.hover(function() {
                clearCap();
                var slug = $(this).attr('id');
                var line = $('.'+ slug + '-line');
                line.addClass('active');
                setTimeout(function(){
                    $('.' + slug).addClass('active');
                }, 400);
            }, function() {
                $capDesc.removeClass('active');
                $lines.removeClass('active');
                var slug = $(this).attr('id');
                $('.' + slug).removeClass('active');
            }
        );

        $cap.on('click', (e) => {
            $cap.removeClass('active');
            var slug = $(this).attr('id');
            $('.' + slug).addClass('active');
        });

        let bgVid = document.getElementById('bgvid'),
            width = window.innerWidth + 'px';
        bgVid.play();
        if(window.innerWidth >= 768){
            bgVid.style.width = width;
        } else {
            bgVid.style.width = '620px';
        }

    } else if(page === 'page-about'){

        $(window).on('scroll', () => {
            if($('.denver').isInViewport()) {
                $('.denver').addClass('active');
            } else {
                $('.denver').removeClass('active');
            }
        });

    } else if(page === 'capability'){

        setActiveFeature();
        const $btns = $('.feature-btn');
        const $features = $('.feature-content');
        $btns.on('click', (e) => {
            $btns.removeClass('active');
            $features.removeClass('active');
            setTimeout(()=>{
              $(e.target).addClass('active');
              var target = $(e.target).data('target');
              $('#' + target).addClass('active');
            }, 350);
        });

    } else if(page === 'actucall'){

        actucallReveal();

    } else if(page === 'verticals'){

        sr.reveal('.vertical', { distance: '50px',duration: 300 }, 200);

    }

    function actucallReveal() {
        sr.reveal('.feature.one', { distance: '100px',duration: 500 }, 200);
        sr.reveal('.feature.two', { distance: '100px',duration: 500 }, 200);
    }

    function setActiveFeature(){
      let btn = $('.feature-col').first().find('.feature-btn');
      btn.addClass('active');
      let target = btn.data('target');
      $('#' + target).addClass('active');
      let pathArray = window.location.pathname.split('/');
      $('.cap-more.' + pathArray[2]).addClass('active');
      console.log(pathArray[2]);
    }

    $.fn.isInViewport = function() {
      let elementTop = $(this).offset().top,
          elementBottom = elementTop + $(this).outerHeight(),
          viewportTop = $(window).scrollTop(),
          viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

});
