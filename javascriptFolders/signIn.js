// variables

let email = document.querySelector('#eMail');
let pWord = document.querySelector('#password');
let btnSign = document.querySelector('#btnSignIn');
let emailErr = document.querySelector('.uEmail-err');
let pWordErr = document.querySelector('.pWord-err');

let userLog = localStorage.getItem('userDetails');
let checkUserLog = JSON.parse(userLog);

// validate user

// email.addEventListener('keyup', () => {
//     if(email.value !== checkUserLog.uEmail) {
//         email.style.border = '1px solid red';
//     }else {
//         email.style.border = '1px solid green';
//     };
// });

// pWord.addEventListener('keyup', () => {
//     if(pWord.value !== checkUserLog.uCpWord) {
//         pWord.style.border = '1px solid red';
//     }else {
//         pWord.style.border = '1px solid green';
//     };
// });

function eMailErrDetails(msg = '', display = 'block', bColor = 'red',) {
    emailErr.innerText = msg;
    emailErr.style.display = display;
    email.style.border = '1px solid ' + bColor;
}

function pWordErrDetails(msg = '', display = 'block', bColor = 'red',) {
    pWordErr.innerText = msg;
    pWordErr.style.display = display;
    pWord.style.border = '1px solid ' + bColor;
}

btnSign.addEventListener('click', () => {
    if (email.value === '') {
        eMailErrDetails('Field cannot be empty')
    }

    if (pWord.value === '') {
        pWordErrDetails('Field cannot be empty')
    }

    if (email.value !== checkUserLog.uEmail) {
        eMailErrDetails('Email cannot be found in our database')
    }

    if (pWord.value !== checkUserLog.uCpWord) {
        pWordErrDetails('Pass-word cannot be found in our database')
    }

    if (pWord.value !== checkUserLog.uCpWord && email.value === '') {
        pWordErrDetails('Pass-word cannot be found in our database');
        eMailErrDetails('field cannot be empty')
    }

    if (email.value !== checkUserLog.uEmail && pWord.value === '') {
        eMailErrDetails('Email cannot be found in our database');
        pWordErrDetails('field cannot be empty')
    }

    if (email.value === checkUserLog.uEmail && pWord.value === '') {
        eMailErrDetails('', 'none', 'green');
        pWordErrDetails('field cannot be empty')
    }

    if (pWord.value === checkUserLog.uCpWord && email.value === '') {
        pWordErrDetails('', 'none', 'green');
        eMailErrDetails('field cannot be empty')
    }

    if (email.value === checkUserLog.uEmail) {
        eMailErrDetails('', 'none', 'green');
    }

    if (pWord.value === checkUserLog.uCpWord) {
        pWordErrDetails('', 'none', 'green');
    }

    if (email.value === '' && pWord.value === '') {
        eMailErrDetails('Field cannot be empty')
        pWordErrDetails('Field cannot be empty')
    }

    if (email.value === checkUserLog.uEmail && pWord.value === checkUserLog.uCpWord) {
        window.location = './home.html';
    }
})