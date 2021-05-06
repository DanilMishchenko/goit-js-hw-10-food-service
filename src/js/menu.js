import menuCardTpl from '../templates/menu-cards.hbs';
import menu from './menu.json';


const refs = {
    menuList: document.querySelector('.js-menu'),
    cardsMarkup: menuCardTpl(menu),
    body: document.querySelector('body'),
    themeSwitcher: document.querySelector('.theme-switch__toggle'),
};

refs.menuList.insertAdjacentHTML('beforeend', refs.cardsMarkup);
refs.themeSwitcher.addEventListener('change', onThemeSwitchClick)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STOREGE_THEME = 'theme-user';

loadLastSelectedTopic()

function firstEntry() {
    if (!refs.body.className) {
        refs.body.classList.add(Theme.LIGHT);
    }
}

function onThemeSwitchClick(e) {
    if (e.target.nodeName !== 'INPUT') {
        return;
    }
    refs.body.classList.toggle('dark-theme');
    refs.body.classList.toggle('light-theme');
    localStorage.setItem(STOREGE_THEME, refs.body.className)
};

function loadLastSelectedTopic() {
    if (!localStorage.getItem(STOREGE_THEME) === true) {
        return firstEntry();
    }
    const savedTheme = localStorage.getItem(STOREGE_THEME);
    refs.body.classList = savedTheme;
        if (savedTheme === Theme.DARK) {
            refs.themeSwitcher.checked = true;
        }
};
