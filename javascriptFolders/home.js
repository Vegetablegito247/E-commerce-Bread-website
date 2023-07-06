// variables


let popMsg = document.querySelector('.pop-up-msg');
let welcomeMessage = document.querySelector('.pop-up-msg h5');
let closeWelcome = document.querySelector('#welcome');

let userAcc = document.querySelector('.user-account');
let userProfile = document.querySelector('.user-account span');
let disUserAcc = document.querySelector('.dis-user-account');

let signOut = document.querySelector('.dis-user-signIn')

let closeModal = document.querySelector('.close-modal');


// getting localStorage

let userInfo = localStorage.getItem('userDetails');
let userValidate = JSON.parse(userInfo);

userProfile.innerText = `Hi, ${userValidate.uName}`;
welcomeMessage.innerHTML = `&#127880;  ${userValidate.uName}  &#127880;`;

// the display toggle

userAcc.addEventListener('click', () => {
    disUserAcc.style.display = 'block';
    closeModal.style.display = 'block';

    closeModal.addEventListener('click', () => {
        disUserAcc.style.display = 'none';
        closeModal.style.display = 'none';
    });
});

closeWelcome.addEventListener('click', () => {
    popMsg.style.display = 'none';
    closeModal.style.display = 'none';
});

// log out

signOut.addEventListener('click', () => {
    window.location = './index.html';
});