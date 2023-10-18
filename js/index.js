
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
const modalMyProfile = document.querySelector('.modal_my_profile');
const modalBuyCard = document.querySelector('.modal_buy_card')
const myModalLogIn = document.getElementById('my_modal_login');
const myModalRegister = document.getElementById('my_modal_register');
const myModalMyProfile = document.getElementById('my_modal_my_profile');
const myModalBuyCard = document.getElementById('my_modal_buy_card');
const logIn = document.getElementById('log_in');
const buttonLoginUnder = document.getElementById('button_login_under');
const register = document.getElementById('register');
const buttonSignupUnder = document.getElementById('button_signup_under');
const myProfile = document.getElementById('my_profile');
const myProfileUnder = document.getElementById('my_profile_under');
const logOut = document.getElementById('log_out');
const modalCloseRegister = document.getElementById('modal_close_register');
const modalCloseLogIn = document.getElementById('modal_close_login');
const modalCloseMyProfile = document.getElementById('modal_close_my_profile');
const modalCloseBuyCard = document.getElementById('modal_close_buy_card');
const button_position = document.querySelectorAll('.button_position');


logIn.addEventListener('click', () => {
  menuNoAuth.classList.remove('display_block_avatar');
  myModalLogIn.classList.add('open');
});

buttonLoginUnder.addEventListener('click', () => {
  myModalLogIn.classList.add('open');
});

register.addEventListener('click', () => {
  menuNoAuth.classList.remove('display_block_avatar');
  myModalRegister.classList.add('open');
});

buttonSignupUnder.addEventListener('click', () => {
  myModalRegister.classList.add('open');
});

modalCloseLogIn.addEventListener('click', () => {
  myModalLogIn.classList.remove('open');
});

modalCloseRegister.addEventListener('click', () => {
  myModalRegister.classList.remove('open');
});


myModalLogIn.addEventListener('click', (element) => {
  if (!element.composedPath().includes(modalLogIn)) {
    myModalLogIn.classList.remove('open');
  }
})

myModalRegister.addEventListener('click', (element) => {
  if (!element.composedPath().includes(modalRegister)) {
    myModalRegister.classList.remove('open');
  }
})

myModalMyProfile.addEventListener('click', (element) => {
  if (!element.composedPath().includes(modalMyProfile)) {
    myModalMyProfile.classList.remove('open');
  }
})

myModalBuyCard.addEventListener('click', (element) => {
  if (!element.composedPath().includes(modalBuyCard)) {
    myModalBuyCard.classList.remove('open');
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

myProfile.addEventListener('click', () => {
  menuWithAuth.classList.remove('display_block_avatar');
  myModalMyProfile.classList.add('open');
})

myProfileUnder.addEventListener('click', () => {
  myModalMyProfile.classList.add('open');
})

modalCloseMyProfile.addEventListener('click', () => {
  myModalMyProfile.classList.remove('open');
});


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

const form_border_with_auth = document.querySelector('.form_border_with_auth');
const form_border_no_auth = document.querySelector('.form_border_no_auth');
const title_visit_your_profile = document.querySelector('.title_visit_your_profile');
const title_get_a_reader_card = document.querySelector('.title_get_a_reader_card');

if (localStorage.getItem('loginStatus') === 'false') {

  form_border_no_auth.style.display = 'flex';
  form_border_with_auth.style.display = 'none';
  title_get_a_reader_card.style.display = 'block';
  title_visit_your_profile.style.display = 'none';

  avatar_item_no_auth.style.display = 'block';
  avatar_item_with_auth.style.display = 'none';
  window.addEventListener('resize', changeWithFalse);

  button_position.forEach(item => {
    item.addEventListener('click', () => {
      myModalLogIn.classList.add('open');
    })
  })

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
const input_name = document.getElementById('input_name');
const input_card_number = document.getElementById('input_card_number');
const check_the_card = document.querySelector('.check_the_card')
let users = JSON.parse(localStorage.getItem('usersArray'));


class newUser {
  constructor (first_name, last_name, email, password, initials, count_enter, card_number, books) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.initials = initials;
    this.count_enter = count_enter;
    this.card_number = card_number;
    this.books = books;
  }
}

let emailRegexp = /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/g;
let passRegexp = /[A-Za-z0-9]{5,30}/g;


function registerNewUser() {
  let hexadecimal = '0123456789ABCDEF';
  let card_number_random = '';
  for (let i = 0; i < 9; i++) {
    card_number_random = card_number_random + hexadecimal[Math.floor(Math.random() * 16)];
  };
  if (emailRegexp.test(email.value) && passRegexp.test(password_register.value)) {
    users.push(new newUser(first_name.value, last_name.value, email.value, password_register.value, first_name.value[0].toUpperCase() + last_name.value[0].toUpperCase(), 0, card_number_random, 0));
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
      if ((users[i].email === email_login.value || users[i].card_number === email_login.value) && users[i].password === password_login.value){
        users.push(users[i]);
        users.splice(i, 1);
        users[i].count_enter = users[i].count_enter + 1;
        localStorage.setItem('usersArray', JSON.stringify(users));        
        return localStorage.setItem('loginStatus', true);
      }
      i++;
    }
    alert ('Invalid password or email');
  }

button_login.addEventListener('click', LoginUser);


function CheckCard() {
  let i = 0;
  while (i < users.length) {
    if (users[i].first_name === input_name.value && users[i].card_number === input_card_number.value){
      user_name_table_fonts.textContent = `${users[i].first_name}`;
      card_number_table_fonts.textContent = users[i].card_number;
      countBookUnder.textContent = users[i].count_enter;
      form_border_no_auth.style.display = 'none';
      form_border_with_auth.style.display = 'flex';
      setTimeout(() => {
        form_border_no_auth.style.display = 'flex';
        input_name.value = '';
        input_card_number.value = '';
      }, 10000);
      setTimeout(() => form_border_with_auth.style.display = 'none', 10000);
      return
    }
    i++;
  }
  alert ("Invalid Reader's name or Card number");
}




check_the_card.addEventListener('click', CheckCard);


const avatar_font = document.getElementById('avatar_font');
const avatar_font_burger = document.getElementById('avatar_font_burger');
const initialsFont = document.querySelector('.initials_font');
const countVisit = document.getElementById('count_visit');
const countVisitUnder = document.getElementById('count_visit_under');
const countBooks = document.getElementById('count_books');
const countBooksUnder = document.getElementById('count_books_under');
const card_number = document.querySelector('.card_number');
const fonts_profile_with_auth = document.querySelector('.fonts_profile_with_auth');
const user_name_font = document.querySelector('.user_name_font');
const user_name_table_fonts = document.querySelector('.user_name_table_fonts');
const card_number_table_fonts = document.querySelector('.card_number_table_fonts');
const button_buy_position = document.querySelector('.button_buy_position');



if (localStorage.getItem('loginStatus') === 'true') {

  for(let i = 0; i < users.length; i++) {

    avatar_font.textContent = users[i].first_name[0] + users[i].last_name[0];
    avatar_font_burger.textContent = users[i].first_name[0] + users[i].last_name[0];
    initialsFont.textContent = users[i].initials;
    user_name_font.textContent = `${users[i].first_name} ${users[i].last_name}`;
    countVisit.textContent = users[i].count_enter;
    countVisitUnder.textContent = users[i].count_enter;
    countBooks.textContent = users[i].books;
    countBooksUnder.textContent = users[i].books;
    card_number.textContent = users[i].card_number;
    fonts_profile_with_auth.textContent = users[i].card_number;
    user_name_table_fonts.textContent = `${users[i].first_name}`;
    card_number_table_fonts.textContent = users[i].card_number;
  }
  

  avatar_item_no_auth.style.display = 'none';
  avatar_item_with_auth.style.display = 'flex';
  form_border_no_auth.style.display = 'none';
  form_border_with_auth.style.display = 'flex';
  title_get_a_reader_card.style.display = 'none';
  title_visit_your_profile.style.display = 'block';

  window.addEventListener('resize', changeWithTrue);
  if (with_body <= 1440) {
    avatar_item_burger_no_auth.style.display = 'none';
    avatar_item_burger_with_auth.style.display = 'flex';
  } else {
    avatar_item_burger_with_auth.style.display = 'none';
  }




  button_position.forEach(item => {
    item.addEventListener('click', () => {
      myModalBuyCard.classList.add('open');
      })
    })

  modalCloseBuyCard.addEventListener('click', () => {
    myModalBuyCard.classList.remove('open');
  });

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

const welcome_fonts = document.querySelector('.welcome_fonts');
welcome_fonts.addEventListener('click', () => {
  navigator.clipboard.writeText(welcome_fonts.textContent);
  alert('Copied: 5578 8549 6054 8999');
})








