
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

const modalLogIn = document.querySelector('.modal_login');
const modalRegister = document.querySelector('.modal_register');
const myModalLogIn = document.getElementById('my_modal_login');
const myModalRegister = document.getElementById('my_modal_register');
const logIn = document.getElementById('log_in');
const register = document.getElementById('register');
const myProfile = document.getElementById('my_profile');
const logOut = document.getElementById('log_out');
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

const avatar_item_no_auth = document.querySelector('.avatar_item_no_auth');
const avatar_item_burger_no_auth = document.querySelector('.avatar_item_burger_no_auth');
const avatar_item_with_auth = document.querySelector('.avatar_item_with_auth');
const avatar_item_burger_with_auth = document.querySelector('.avatar_item_burger_with_auth');
const menuNoAuth = document.querySelector('.drop_menu_no_auth');
const menuWithAuth = document.querySelector('.drop_menu_with_auth');
let with_body = window.innerWidth;

function changeWithTrue() {
  with_body = window.innerWidth;
  if (with_body <= 1440) {
    avatar_item_burger_no_auth.style.display = 'none';
    avatar_item_burger_with_auth.style.display = 'flex';
  } else {
    avatar_item_burger_with_auth.style.display = 'none';
  }
}

window.addEventListener('resize', changeWithTrue);



function changeWithFalse() {
  with_body = window.innerWidth;
  if (with_body > 1440) {
    avatar_item_burger_no_auth.style.display = 'none';
  } else {
    avatar_item_burger_with_auth.style.display = 'none';
    avatar_item_burger_no_auth.style.display = 'block';
  }
}


if (localStorage.getItem('loginStatus') === 'false') {

  avatar_item_no_auth.style.display = 'block';
  avatar_item_with_auth.style.display = 'none';
  window.addEventListener('resize', changeWithFalse);
  

  avatar_item_no_auth.addEventListener('click', () => {
    menuNoAuth.classList.toggle('display_block_avatar');
  });
  
  avatar_item_burger_no_auth.addEventListener('click', () => {
    navActive.classList.remove('nav_active');
    menuNoAuth.classList.toggle('display_block_avatar');
  });
  
  document.addEventListener('click', (element) => {
    if (!element.composedPath().includes(avatar_item_no_auth) && !element.composedPath().includes(menuNoAuth) && !element.composedPath().includes(avatar_item_burger_no_auth)) {
      menuNoAuth.classList.remove('display_block_avatar');
    }
  })
}

/* Log in finish */

/* Register start */

const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password_register = document.getElementById('password_register');
const button_signup = document.getElementById('button_signup');

let users = JSON.parse(localStorage.getItem('usersArray'));


class newUser {
  constructor (first_name, last_name, email, password, initials) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.initials = initials;
  }
}

let emailRegexp = /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/g;
let passRegexp = /[A-Za-z0-9]{5,30}/g;


function registerNewUser() {
  if (emailRegexp.test(email.value) && passRegexp.test(password_register.value)) {
    users.push(new newUser(first_name.value, last_name.value, email.value, password_register.value, first_name.value[0].toUpperCase() + last_name.value[0].toUpperCase()));
    localStorage.setItem('usersArray', JSON.stringify(users));
    alert('Success');
  }
}

button_signup.addEventListener('click', registerNewUser);
/* Register finish */

/* Log In start */
const email_login = document.getElementById('email_login');
const password_login = document.getElementById('password_login');
const button_login = document.getElementById('button_login');



function LoginUser() {
    let i = 0;
    while (i < users.length) {
      if (users[i].email === email_login.value && users[i].password === password_login.value){
        users.push(users[i]);
        users.splice(i, 1);
        localStorage.setItem('usersArray', JSON.stringify(users));        
        return localStorage.setItem('loginStatus', true);
      }
      i++;
    }
    alert ('Invalid password or email');
  }

button_login.addEventListener('click', LoginUser);


const avatar_font = document.getElementById('avatar_font');
const avatar_font_burger = document.getElementById('avatar_font_burger');



if (localStorage.getItem('loginStatus') === 'true') {

  for(let i = 0; i < users.length; i++) {
    avatar_font.textContent = users[i].first_name[0] + users[i].last_name[0];
    avatar_font_burger.textContent = users[i].first_name[0] + users[i].last_name[0]
  }
  
  avatar_item_no_auth.style.display = 'none';
  avatar_item_with_auth.style.display = 'flex';
  window.addEventListener('resize', changeWithTrue);
  if (with_body <= 1440) {
    avatar_item_burger_no_auth.style.display = 'none';
    avatar_item_burger_with_auth.style.display = 'flex';
  } else {
    avatar_item_burger_with_auth.style.display = 'none';
  }



  avatar_item_with_auth.addEventListener('click', () => {
    menuWithAuth.classList.toggle('display_block_avatar');
  });
  
  avatar_item_burger_with_auth.addEventListener('click', () => {
    navActive.classList.remove('nav_active');
    menuWithAuth.classList.toggle('display_block_avatar');
  });
  
  document.addEventListener('click', (element) => {
    if (!element.composedPath().includes(avatar_item_with_auth) && !element.composedPath().includes(menuWithAuth) && !element.composedPath().includes(avatar_item_burger_with_auth)) {
      menuWithAuth.classList.remove('display_block_avatar');
    }
  })
}

/* Log In finish */


/* Log out start */

const button_logout = document.getElementById('log_out');

function LogoutUser() {
  localStorage['loginStatus'] = false;
  location.reload();
}

button_logout.addEventListener('click', LogoutUser);

/* Log out finish */






