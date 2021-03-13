$(function () {
  var toggleOpen = document.querySelector('.toggle-open'),
    toggleClose = document.querySelector('.toggle-close'),
    nav = document.querySelector('nav');


  toggleOpen.addEventListener('click', function () {
    nav.classList.add('active');
  });
  toggleClose.addEventListener('click', function () {
    nav.classList.remove('active');
  });

  // --- about us
    var openMaps = $('.open-maps'),
      overlay = $('.about .overlay'),
      about = $('.about-content .about-me'),
      maps = $('.mapouter');

    openMaps.click(function () {
      openMaps.toggleClass('active');
      overlay.toggleClass('active');
      about.toggleClass('hide');
      maps.toggleClass('active');
    });


  // --- animasi cursor
  var cursorSmall = $('.cursor-small'),
    cursorLarge = $('.cursor-large');

  $(document).mousemove(function (e) {
    let x = e.clientX,
      y = e.clientY;

    cursorLarge.css({
      left: `${x}px`,
      top: `${y}px`
    });
    cursorSmall.css({
      left: `${x}px`,
      top: `${y}px`
    });
  });

  $('body').mousedown(function (e) {
    if (!$(e.target).hasClass('hoverable')) {
      cursorSmall.css({
        background: 'transparent'
      });
      cursorLarge.css({
        width: '1rem',
        height: '1rem',
        background: '#ffffff'
      });
    }
  });

  $('body').mouseup(function (e) {
    if (!$(e.target).hasClass('hoverable')) {
      cursorSmall.css({
        background: '#ffffff'
      });
      cursorLarge.css({
        width: '2rem',
        height: '2rem',
        background: 'transparent'
      });
    }
  });

  $('body').mouseenter(function (e) {
    cursorSmall.css({
      width: '3rem',
      height: '3rem',
      background: '#ffffff'
    });
    cursorLarge.css({
      background: 'transparent'
    });
  });

  $('body').mouseleave(function (e) {
    cursorSmall.css({
      background: '#ffffff'
    });
    cursorLarge.css({
      width: '2rem',
      height: '2rem',
      background: 'transparent'
    });
  });


});