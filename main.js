/*--------------------SVG Clock-----------------*/
var hands = [];
hands.push(document.querySelector('#secondhand > *'));
hands.push(document.querySelector('#minutehand > *'));
hands.push(document.querySelector('#hourhand > *'));

var cx = 100;
var cy = 100;

function shifter(val) {
  return [val, cx, cy].join(' ');
}

var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;

hands[0].setAttribute('from', shifter(secAngle));
hands[0].setAttribute('to', shifter(secAngle + 360));
hands[1].setAttribute('from', shifter(minuteAngle));
hands[1].setAttribute('to', shifter(minuteAngle + 360));
hands[2].setAttribute('from', shifter(hoursAngle));
hands[2].setAttribute('to', shifter(hoursAngle + 360));

for(var i = 1; i <= 12; i++) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  el.setAttribute('x1', '100');
  el.setAttribute('y1', '30');
  el.setAttribute('x2', '100');
  el.setAttribute('y2', '40');
  el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  el.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('svg').appendChild(el);
}


/*--------------------------Script for Nav Bar----------------------*/
function openNav() {
    document.getElementById("navbar").style.width = "20%";
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
}


/*--------------------Scrolling Effect on Page-----------------*/

initSmoothScrolling();

function initSmoothScrolling() {
  if (isCssSmoothSCrollSupported()) {
    document.getElementById('scroller').className = 'supported';
    return;
  }

  var duration = 400;

  var pageUrl = location.hash ?
    stripHash(location.href) :
    location.href;

  delegatedLinkHijacking();
  //directLinkHijacking();

  function delegatedLinkHijacking() {
    document.body.addEventListener('click', onClick, false);

    function onClick(e) {
      if (!isInPageLink(e.target))
        return;

      e.stopPropagation();
      e.preventDefault();

      jump(e.target.hash, {
        duration: duration,
        callback: function() {
          setFocus(e.target.hash);
        }
      });
    }
  }

  function directLinkHijacking() {
    [].slice.call(document.querySelectorAll('a'))
      .filter(isInPageLink)
      .forEach(function(a) {
        a.addEventListener('click', onClick, false);
      });

    function onClick(e) {
      e.stopPropagation();
      e.preventDefault();

      jump(e.target.hash, {
        duration: duration,
      });
    }

  }

  function isInPageLink(n) {
    return n.tagName.toLowerCase() === 'a' &&
      n.hash.length > 0 &&
      stripHash(n.href) === pageUrl;
  }

  function stripHash(url) {
    return url.slice(0, url.lastIndexOf('#'));
  }

  function isCssSmoothSCrollSupported() {
    return 'scrollBehavior' in document.documentElement.style;
  }

  function setFocus(hash) {
    var element = document.getElementById(hash.substring(1));

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }

      element.focus();
    }
  }

}

function jump(target, options) {
  var
    start = window.pageYOffset,
    opt = {
      duration: options.duration,
      offset: options.offset || 0,
      callback: options.callback,
      easing: options.easing || easeInOutQuad
    },
    distance = typeof target === 'string' ?
    opt.offset + document.querySelector(target).getBoundingClientRect().top :
    target,
    duration = typeof opt.duration === 'function' ?
    opt.duration(distance) :
    opt.duration,
    timeStart, timeElapsed;

  requestAnimationFrame(function(time) {
    timeStart = time;
    loop(time);
  });

  function loop(time) {
    timeElapsed = time - timeStart;

    window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

    if (timeElapsed < duration)
      requestAnimationFrame(loop)
    else
      end();
  }

  function end() {
    window.scrollTo(0, start + distance);

    if (typeof opt.callback === 'function')
      opt.callback();
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

}

/*--------------------------Script for Google Map API----------------------*/
function initMap() {
  let dubai = {lat: 25.204849, lng: 55.270783};
  let burjkhalifa = {lat: 25.197197, lng: 55.274376};
  let burjalarab = {lat: 25.141306, lng: 55.185348};
  let dubaimall = {lat: 25.198518, lng: 55.279619};
  let dubaifountain = {lat: 25.195567, lng: 55.275515};
  let palmjumeirah = {lat: 25.114948, lng: 55.137709};
  let dubaicreek = {lat: 25.229351, lng: 55.292259};
  let dubaimarina = {lat: 25.080542, lng: 55.140343};
  let mapDemo = document.getElementById("map");

  // defaut location is set when the map loads
  let map = new google.maps.Map(mapDemo, {
    zoom: 11,
    center: dubai
  });

  // setting markers for each location to view on the overall map 
  let markerBURJKHALIFA = new google.maps.Marker({
    position: burjkhalifa,
    map: map,
    title: 'Burj Khalifa'
  });

  let markerBURJALARAB = new google.maps.Marker({
    position: burjalarab,
    map: map,
    title: 'Burj Al Arab'
  });

  let markerDUBAIMALL = new google.maps.Marker({
    position: dubaimall,
    map: map,
    title: 'Dubai Mall'
  });
    
  let markerDUBAIFOUNTAIN = new google.maps.Marker({
    position: dubaifountain,
    map: map,
    title: 'Dubai Fountain'
  });

  let markerPALMJUMEIRAH = new google.maps.Marker({
    position: palmjumeirah,
    map: map,
    title: 'Palm Jumeirah'
  });

  let markerDUBAICREEK = new google.maps.Marker({
    position: dubaicreek,
    map: map,
    title: 'Dubai Creek'
  });

  let markerDUBAIMARINA = new google.maps.Marker({
    position: dubaimarina,
    map: map,
    title: 'Dubai Marina'
  });
}











var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

    