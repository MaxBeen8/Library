
  const burgerItem = document.querySelector('.burger');
  const navActive = document.querySelector('.nav');
  const navClose = document.querySelector('.nav_close');
  const headerList = document.querySelector('.header_list');

  burgerItem.addEventListener('click', () => {
    navActive.classList.add('nav_active', 'nav_animation');
  });
  navClose.addEventListener('click', () => {
    navActive.classList.remove('nav_active');
  });
  headerList.addEventListener('click', () => {
    navActive.classList.remove('nav_active');
  });


  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.menu').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();

/* Carousel start */
const carousel = document.querySelector('.carousel');
const circleOne = document.getElementById('circleOne');
const circleTwo = document.getElementById('circleTwo');
const circleThree = document.getElementById('circleThree');
const circleFour = document.getElementById('circleFour');
const circleFive = document.getElementById('circleFive');
const circle = document.querySelectorAll('.circle');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const image_img = document.querySelector('.image_img').offsetWidth;
let count = 0;

  
circleOne.addEventListener('click', () => {
  count = 0;  
  carousel.style.left = (-25 - image_img) * count + 'px';
  circle.forEach (item => {
    item.classList.remove('circle_current');
  })
  circleOne.classList.add('circle_current');
  })

circleTwo.addEventListener('click', () => {
  count = 1;
  carousel.style.left = (-25 - image_img) * count + 'px';
  circle.forEach (item => {
    item.classList.remove('circle_current');
  })
  circleTwo.classList.add('circle_current');
  })

circleThree.addEventListener('click', () => {
  count = 2;
  carousel.style.left = (-25 - image_img) * count + 'px';
  circle.forEach (item => {
    item.classList.remove('circle_current');
  })
  circleThree.classList.add('circle_current');
  })

circleFour.addEventListener('click', () => {
  count = 3; 
  carousel.style.left = (-25 - image_img) * count + 'px';
  circle.forEach (item => {
    item.classList.remove('circle_current');
  })
  circleFour.classList.add('circle_current'); 
  })

circleFive.addEventListener('click', () => {
  count = 4;  
  carousel.style.left = (-25 - image_img) * count + 'px';
  circle.forEach (item => {
    item.classList.remove('circle_current');
  })
  circleFive.classList.add('circle_current');
  })

prev = () => {
  count--;
  if (count < 0) {
    count = 0;
  }
  carousel.style.left = (-25 - image_img) * count + 'px';
  circle.forEach (item => {
    item.classList.remove('circle_current');
  })
  circle[count].classList.add('circle_current');
}

next = () => {
  count++;
  if (count > 4) {
    count = 4;
  }
  carousel.style.left = (-25 - image_img) * count + 'px';
  circle.forEach (item => {
    item.classList.remove('circle_current');
  })
  circle[count].classList.add('circle_current');
}


left.addEventListener('click', prev);
right.addEventListener('click', next)
/* Carousel finish */


/* Favorites start */


const winter = document.getElementById('winter');
const spring = document.getElementById('spring');
const autumn = document.getElementById('autumn');
const summer = document.getElementById('summer');
const allYear = document.querySelectorAll('.allYear');
const blockWinter = document.getElementById('staff_picks_position_winter');
const blockSpring = document.getElementById('staff_picks_position_spring');
const blockSummer = document.getElementById('staff_picks_position_summer');
const blockAutumn = document.getElementById('staff_picks_position_autumn');





winter.addEventListener('click', () => {
  allYear.forEach(item => {
    item.classList.remove('displayBlock');
    item.classList.add('displayNone');
  })
  blockWinter.classList.add('fade-in-animation');
  blockWinter.classList.add('displayBlock');
  });

spring.addEventListener('click', () => {
  allYear.forEach(item => {
    item.classList.remove('displayBlock');
    item.classList.add('displayNone');
  })
  blockSpring.classList.add('fade-in-animation');
  blockSpring.classList.add('displayBlock');
  });

summer.addEventListener('click', () => {
  allYear.forEach(item => {
    item.classList.remove('displayBlock');
    item.classList.add('displayNone');
  })
  blockSummer.classList.add('fade-in-animation');
  blockSummer.classList.add('displayBlock');
  });

autumn.addEventListener('click', () => {
  allYear.forEach(item => {
    item.classList.remove('displayBlock');
    item.classList.add('displayNone');
  })
  blockAutumn.classList.add('fade-in-animation');
  blockAutumn.classList.add('displayBlock');
  });

/* Favorites finish */

/* Log in start */

const avatar = document.querySelector('.icon');
const avatar_burger = document.querySelector('.icon_burger');
const menuNoAuth = document.querySelector('.drop_menu_no_auth');
const menuWithAuth = document.querySelector('.drop_menu_with_auth');

avatar.addEventListener('click', () => {
  menuNoAuth.classList.toggle('display_block_avatar');
});

avatar_burger.addEventListener('click', () => {
  navActive.classList.remove('nav_active');
  menuNoAuth.classList.toggle('display_block_avatar');
});

document.addEventListener('click', (element) => {
  if (!element.composedPath().includes(avatar) && !element.composedPath().includes(menuNoAuth) && !element.composedPath().includes(menuWithAuth) && !element.composedPath().includes(avatar_burger)) {
		menuNoAuth.classList.remove('display_block_avatar');
    menuWithAuth.classList.remove('display_block_avatar');
	}
})


const modalLogIn = document.querySelector('.modal_login');
const modalRegister = document.querySelector('.modal_register');
const myModalLogIn = document.getElementById('my_modal_login');
const myModalRegister = document.getElementById('my_modal_register');
const logIn = document.getElementById('log_in');
const register = document.getElementById('register');
const modalCloseRegister = document.getElementById('modal_close_register');
const modalCloseLogIn = document.getElementById('modal_close_login');

logIn.addEventListener('click', () => {
  menuNoAuth.classList.remove('display_block_avatar');
  myModalLogIn.classList.add('open');
});

register.addEventListener('click', () => {
  menuNoAuth.classList.remove('display_block_avatar');
  myModalRegister.classList.add('open');
});

modalCloseLogIn.addEventListener('click', () => {
  myModalLogIn.classList.remove('open');
});

modalCloseRegister.addEventListener('click', () => {
  myModalRegister.classList.remove('open');
});

document.addEventListener('click', (element) => {
  if (!element.composedPath().includes(modalLogIn) && !element.composedPath().includes(modalRegister) && !element.composedPath().includes(menuNoAuth)) {
		myModalLogIn.classList.remove('open');
    myModalRegister.classList.remove('open');
	}
})

document.getElementById('register_login').addEventListener('click', () => {
  myModalLogIn.classList.remove('open');
  myModalRegister.classList.add('open');
})

document.getElementById('login_register').addEventListener('click', () => {
  myModalRegister.classList.remove('open');
  myModalLogIn.classList.add('open');
})

/* Log in finish */

/* Local Storage start */

const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password_register = document.getElementById('password_register');
const button_signup = document.getElementById('button_signup');
const email_or_readers_card = document.getElementById('e-mail_or_readers_card');
const password_login = document.getElementById('password_login');
const button_login = document.getElementById('button_login');


let users = JSON.parse(localStorage.getItem('usersArray'));
console.log(users);

class newUser {
  constructor (first_name, last_name, email, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }
}


let emailRegexp = /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/g;
let passRegexp = /[A-Za-z0-9]{5,30}/g;


function registerNewUser() {
  if (emailRegexp.test(email.value) && passRegexp.test(password_register.value)) {
    users.push(new newUser(first_name.value, last_name.value, email.value, password_register.value));
    localStorage.setItem('usersArray', JSON.stringify(users));
  }
}

button_signup.addEventListener('click', registerNewUser);
/* Local Storage finish */



