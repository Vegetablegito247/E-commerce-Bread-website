// variables

let userAcc = document.querySelector('.user-account');
let userProfile = document.querySelector('.user-account span');
let disUserAcc = document.querySelector('.dis-user-account');

let closeModal = document.querySelector('.close-modal');

let edit = document.querySelector('.acc-edit');

let userName = document.querySelector('.user-name');
let userEmail = document.querySelector('.user-email');
let userStrt = document.querySelector('.user-strt');
let userReg = document.querySelector('.user-region');
let userNo = document.querySelector('.user-no');

let accInfo = localStorage.getItem('userDetails');
let accGet = JSON.parse(accInfo);

let signOut = document.querySelector('.dis-user-signIn')

// toggle

userAcc.addEventListener('click', () => {
    disUserAcc.style.display = 'block';
    closeModal.style.display = 'block';

    closeModal.addEventListener('click', () => {
        disUserAcc.style.display = 'none';
        closeModal.style.display = 'none';
    });
});


// display account details

userName.innerText = `${accGet.uLname} ${accGet.uName}`;
userEmail.innerText = `${accGet.uEmail}`;
userStrt.innerText = `${accGet.uAddress}`;
userReg.innerText = `${accGet.uCity}, ${accGet.uState}`;
userNo.innerText = `${accGet.uNumber}`;

// signOut

signOut.addEventListener('click', () => {
    window.location = './index.html';
});

// changeDetails 

edit.addEventListener('click', () => {
    window.location = './signup.html';
})