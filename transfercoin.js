//SENT AND RECIEVE SECTION

const sentButton = document.querySelector('.btn-sent');
const recieveButton = document.querySelector('.btn-recieve');

const sentSection = document.querySelector('.transfercoin-sent-div');
const recieveSection = document.querySelector('.transfercoin-recieve-div');

sentButton.addEventListener('click', () => {
    sentSection.style.display = "flex";
    recieveSection.style.display = "none";

    sentButton.classList.add('btn-active');
    sentButton.classList.remove('btn-nonactive');
    document.querySelector('.transf-btn-icon-span').classList.add('span-active');
    document.querySelector('.transf-btn-icon-span').classList.remove('span-nonactive');

    recieveButton.classList.add('btn-nonactive');
    recieveButton.classList.remove('btn-active');
    document.querySelector('.transf-btn-rec-icon-span').classList.add('span-nonactive');
    document.querySelector('.transf-btn-rec-icon-span').classList.remove('span-active');
})

recieveButton.addEventListener('click', () => {
    sentSection.style.display = "none";
    recieveSection.style.display = "flex";

    recieveButton.classList.add('btn-active');
    recieveButton.classList.remove('btn-nonactive');
    document.querySelector('.transf-btn-rec-icon-span').classList.add('span-active');
    document.querySelector('.transf-btn-rec-icon-span').classList.remove('span-nonactive');

    sentButton.classList.add('btn-nonactive');
    sentButton.classList.remove('btn-active');
    document.querySelector('.transf-btn-icon-span').classList.add('span-nonactive');
    document.querySelector('.transf-btn-icon-span').classList.remove('span-active');
})


//SENT CURRENCY SECTION

const sentCurrency = document.querySelector('.transfercoin-sent-currency');
const currencyMenu = document.querySelector('.transfercoin-currency-dropdown');
let currencyDropDown = false;

sentCurrency.addEventListener('click', () => {
    if (currencyDropDown === false) {
        currencyMenu.style.display = "flex";
        currencyDropDown = true
    } else {
        currencyMenu.style.display = "none";
        currencyDropDown = false
    }
})
