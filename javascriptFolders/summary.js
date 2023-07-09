// variables 

let userName = document.querySelector('.delivery-text p');
let userAddress = document.querySelector('.delivery-text span');

let cardNumber = document.querySelector('#card-number');
let cardDate = document.querySelector('#dateTime');
let cardCvv = document.querySelector('#cvv');

let userAcc = document.querySelector('.user-account');
let disUserAcc = document.querySelector('.dis-user-account');

let orderComplete = document.querySelector('.scsfull-order');
let closeModal = document.querySelector('.close-modal');

let signOut = document.querySelector('.dis-user-signIn');

let checkBtn = document.querySelector('.summaryBtn');

let accInfo = localStorage.getItem('userDetails');
let accGet = JSON.parse(accInfo);

let price = localStorage.getItem('FinalPrice');
let showPrice = JSON.parse(price);

// display toggle

userAcc.addEventListener('click', () => {
    disUserAcc.style.display = 'block';
    closeModal.style.display = 'block';

    closeModal.addEventListener('click', () => {
        disUserAcc.style.display = 'none';
        closeModal.style.display = 'none';
    });
});

//   signout 

signOut.addEventListener('click', () => {
    window.location = './index.html';
});

// display details

userName.innerText = `${accGet.uLname} ${accGet.uName}`;
userAddress.innerText = `${accGet.uAddress}, ${accGet.uCity}, ${accGet.uState}. ${accGet.uNumber}.`;

checkBtn.innerText = `checkout (N${showPrice})`;

// verufying the card

function errDetails(msg) {
    alert(msg);
};

checkBtn.addEventListener('click', () => {
    if (cardNumber.value === '') {
        errDetails('card number cannot be empty');
        return false;
    }

    if (cardDate.value === '') {
        errDetails('Please select a valid date');
        return false;
    }

    if (cardCvv.value === '') {
        errDetails('card cvv details cannot be empty');
        return false;
    }

    if (cardNumber.value.length > 16) {
        errDetails('card number character cannot exceed 16 digits');
        return false;
    }

    if (cardNumber.value.length < 16) {
        errDetails('card number character must be equal to 16 digits');
        return false;
    }

    if (cardCvv.value.length > 3) {
        errDetails('card cvv character cannot exceed 3 digits');
        return false;
    }

    if (cardCvv.value.length < 3) {
        errDetails('card cvv character must be equal to 3 digits');
        return false;
    }

    if (cardNumber.value.length === 16 && cardCvv.value.length === 3 && cardDate.value !== '') {
        orderComplete.style.display = 'block';
        closeModal.style.display = 'block';
        return true;
    }
});

// complete order and clearing cart

orderComplete.addEventListener('click', () => {
    localStorage.removeItem('cartGet');
    localStorage.removeItem('FinalPrice');
    window.location = './home.html';
});