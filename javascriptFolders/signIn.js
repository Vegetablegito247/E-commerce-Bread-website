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

// emailErr.innerText = 'Field cannot be empty';
// emailErr.style.display = 'block';
// email.style.border = '1px solid red';

// pWordErr.innerText = 'Field cannot be empty';
// pWordErr.style.display = 'block';
// pWord.style.border = '1px solid red';

// emailErr.innerText = 'Email cannot be found in our database';
// emailErr.style.display = 'block';
// email.style.border = '1px solid red';

// pWordErr.innerText = 'password cannot be found in our database';
// pWordErr.style.display = 'block';
// pWord.style.border = '1px solid red';

// emailErr.style.display = 'none';
// email.style.border = '1px solid green';

// pWordErr.style.display = 'block';
// pWord.style.border = '1px solid green';

btnSign.addEventListener('click', () => {
    if (email.value === '') {
        emailErr.innerText = 'Field cannot be empty';
        emailErr.style.display = 'block';
        email.style.border = '1px solid red';
    }
    else if (pWord.value === '') {
        pWordErr.innerText = 'Field cannot be empty';
        pWordErr.style.display = 'block';
        pWord.style.border = '1px solid red';
    }

    else if (email.value !== checkUserLog.uEmail) {
        emailErr.innerText = 'Email cannot be found in our database';
        emailErr.style.display = 'block';
        email.style.border = '1px solid red';
    }

    else if (pWord.value !== checkUserLog.uCpWord) {
        pWordErr.innerText = 'password cannot be found in our database';
        pWordErr.style.display = 'block';
        pWord.style.border = '1px solid red';
    }

    else if (email.value === checkUserLog.uEmail && pWord.value === checkUserLog.uCpWord) {
        emailErr.style.display = 'none';
        email.style.border = '1px solid green';

        pWordErr.style.display = 'none';
        pWord.style.border = '1px solid green';
    }
})