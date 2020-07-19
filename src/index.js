import './styles.css';

// import localStorage from './template/localStorage.js';

const listItemsRef = document.querySelector('.js-menu');
// console.log(listItemsRef);
const switchThemeRef = document.querySelector('.js-switch-input');
// console.dir(switchTheme);
const bodyRef = document.querySelector('body');
console.log(bodyRef);

import templatesItems from './template/templatesItems.hbs';
import menuItems from './db/menu.json';

const markup = templatesItems(menuItems);
// console.log(markup);

listItemsRef.insertAdjacentHTML('afterbegin', markup);


switchThemeRef.addEventListener('click', switcher);

function switcher () {
    if(event.target.checked) {
        bodyRef.classList.add('dark-theme');
    } else {
        bodyRef.classList.remove('dark-theme');
    }
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  localStorage.setItem('theme', JSON.stringify(Theme));

console.log(JSON.stringify(Theme));






// const bodyRef = document.querySelector('body');



// const switchTheme = document.querySelector('.js-switch-input');


// switchTheme.addEventListener('click', () => {
//     bodyRef.classList.add('dark-theme');
// })



