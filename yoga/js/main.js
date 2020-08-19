window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
  // Timer

  let deadeLine = '2020-09-25';

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
    // hours = Math.floor((t/1000/60/60) % 24),
    // days = Math.floor((t/(1000*60*60*24)));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endTime);

      function addZero(num) {
        if (num <= 9) {
          return '0' + num;
        } else {
          return num;
        }
      }
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }
  setClock('timer', deadeLine);

  //modal window

  let more = document.querySelector('.more'),
    learnMore = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  function learn() {
    for (let i = 0; i < learnMore.length; i++) {
      learnMore[i].addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
      });
    }
  }
  learn();

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  //form

  let message = {
    loading: 'Loading..',
    success: 'Thanks! We call you soon!',
    failure: 'Something wrong'
  };
  let form = document.querySelector('.main-form'),
    contactForm = document.querySelector('#form'),
    inputForm = contactForm.getElementsByTagName('input'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  // console.log(inputForm)

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData(form);
    request.send(formData);

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState == 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactForm.appendChild(statusMessage);
    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData(contactForm);
    request.send(formData);

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState == 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
        statusMessage.style.cssText = 'color:#fff; margin-top: 30px; transition: 2s ease;';
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < inputForm.length; i++) {
      inputForm[i].value = '';
    }
  });


  //JSON format
  // let message = {
  //   loading : 'Loading..',
  //   success : 'Thanks! We call you soon!',
  //   failure : 'Something wrong'
  // };
  // let form = document.querySelector('.main-form'),
  //     input = form.getElementsByTagName('input'),
  //     statusMessage = document.createElement('div');
  //     statusMessage.classList.add('status');

  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   form.appendChild(statusMessage);

  //   let request = new XMLHttpRequest();
  //   request.open('POST','server.php');
  //   request.setRequestHeader ('Content-Type', 'application/json; chartset=utf-8');

  //   let formData = new FormData(form);
  //   let obj = {};
  //   formData.forEach(function(value,key){
  //     obj[key] = value;
  //   });
  //   let json = JSON.stringify(obj);
  //   request.send(json);
  //   request.send(formData);

  //   request.addEventListener('readystatechange', function() {
  //     if(request.readyState < 4) {
  //       statusMessage.innerHTML = message.loading;
  //     }else if(request.readyState == 4 && request.status == 200) {
  //       statusMessage.innerHTML = message.success;
  //     }else{
  //       statusMessage.innerHTML = message.failure;
  //     }
  //   });

  //   for(let i = 0; i < input.length; i++) {
  //     input[i].value ='';
  //   }
  // });


  // Slider
  let slideIndex = 1,

    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),

    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

    // for(let i = 0; i < slides.length; i++) {
    //   slides[i].style.display = 'none';
    // }

    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSides(n) {
    showSlides(slideIndex += n);

  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSides(-1);
  });
  next.addEventListener('click', function () {
    plusSides(1);
  });

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  // Calculator

  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),

    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if ((persons.value == '' || restDays.value == '') ||
        (persons.value == '0' || restDays.value == '0')) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if ((persons.value == '' || restDays.value == '') ||
        (persons.value == '0' || restDays.value == '0')) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function () {
    if ((persons.value == '' || restDays.value == '') ||
        (persons.value == '0' || restDays.value == '0')) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });


});