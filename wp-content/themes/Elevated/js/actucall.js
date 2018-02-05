$(document).ready(function(){
    // var path = document.querySelector('.banner-line');
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
                if($menu.hasClass('active')){
                        $menu.removeClass('active');
                }
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

        bannerReveal();

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

        bgVid.onloadedmetadata = function() {
            bgVid.play();
        };

        if(window.innerWidth >= 768){
            bgVid.style.width = width;
        } else {
            bgVid.style.width = '800px';
        }

    } else if(page === 'page-about'){
        bindAboutScroll();
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
        verticalReveal();
    }

    function verticalReveal(){
        sr.reveal('.vertical', { distance: '50px',duration: 300 }, 200);
    }

    function bindAboutScroll(){
        $(window).on('scroll', () => {
            if($('.denver').isInViewport()) {
                $('.denver').addClass('active');
            } else {
                $('.denver').removeClass('active');
            }
        });
    }

    function bannerReveal(){
        sr.reveal('.box-container', {
            distance: '100px',
            duration: 500,
            delay: 1000,
            afterReveal: function(el){
                $(el).find('.banner-line').addClass('active');
            }
        }, 2000);
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
          viewportTop = $(window).scrollTop() - 300,
          viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

});
