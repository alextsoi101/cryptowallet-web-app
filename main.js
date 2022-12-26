// LEFT MENU:

//Change theme
const defaultcolor = document.querySelector('#defaultcolor');
const orange = document.querySelector('#orange');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const fiolet = document.querySelector('#fiolet');
const purpure = document.querySelector('#purpure');

defaultcolor.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', "defaultcolor")
});

orange.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', "orange")
});

blue.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', "blue")
});

green.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', "green")
});

fiolet.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', "fiolet")
});

purpure.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', "purpure")
});


//Light and dark mode

const modeLight = document.querySelector('.mode-light');
const modeDark = document.querySelector('.mode-dark'); 

modeLight.addEventListener('click', () => { 
    modeDark.style.display = 'flex'
    modeLight.style.display = 'none'
    document.documentElement.setAttribute('data-mode', "dark")
});

modeDark.addEventListener('click', () => { 
    modeLight.style.display = 'flex'
    modeDark.style.display = 'none'
    document.documentElement.setAttribute('data-mode', "light")
});




// MAIN HEADER:

//Language
const language = document.querySelector('.language');
let languageDropDown = false;

language.addEventListener('click', () => {
    if (languageDropDown === false) {
        document.querySelector('.language-menu').style.display = 'flex';
        languageDropDown = true
    } else {
        document.querySelector('.language-menu').style.display = 'none'
        languageDropDown = false
    }
})

//Notifications
const notify = document.querySelector('.main-header-notify-icon');
let notifyDropDown = false;

notify.addEventListener('click', () => {
    if (languageDropDown === false) {
        document.querySelector('.notify-dropdown').style.display = 'flex';
        languageDropDown = true
    } else {
        document.querySelector('.notify-dropdown').style.display = 'none'
        languageDropDown = false
    }
})

//User Info
const userinfo = document.querySelector('.main-header-user-info');
let userInfoDropDown = false;

userinfo.addEventListener('click', () => {
    if (userInfoDropDown === false) {
        document.querySelector('.header-user-menu').style.display = 'flex';
        userInfoDropDown = true
    } else {
        document.querySelector('.header-user-menu').style.display = 'none'
        userInfoDropDown = false
    }
})
