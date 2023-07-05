// sign-up page

let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let address = document.getElementById('home-address');
let city = document.getElementById('city');
let state = document.getElementById('state');
let country = document.getElementById('country');
let pWord = document.getElementById('pWord');
let cpWord = document.getElementById('cPword');
let number = document.getElementById('number');
let email = document.getElementById('email');
let signUpBtn = document.getElementById('get-in');

let userArray = [fName, lName, address, city, state, country, pWord, cpWord, number, email]

function pass() {
    userArray.forEach((value, index, array) => {
        value.addEventListener('keyup', () => {
            if (value.value === '') {
                console.log('cannot be empty');
                value.style.border = '1px solid red';
                return false
            }
            else if (value.value.length < 3) {
                console.log('characters cannot be less than 3');
                value.style.border = '1px solid red';
                return false
            }
            else if (value.value.length > 60) {
                console.log('characters cannot be greater than 30');
                value.style.border = '1px solid red';
                return false
            }
            else {
                value.style.border = '1px solid green';
            };
        });
    });
};
pass()

function condition(para) {
    if (para.value === '') {
        console.log('fill in your details')
        para.style.border = '1px solid red'
        return false
    }
    else if (para.value.length < 3) {
        console.log('characters cannot be less than 3');
        para.style.border = '1px solid red';
        return false
    }
    else if (para.value.length > 50) {
        console.log('characters cannot be greater than 30');
        para.style.border = '1px solid red';
        return false
    }
    else {
        return true
    }
}

signUpBtn.addEventListener('click', () => {
    if(condition(fName) && condition(lName) && condition(address) && condition(city) && condition(state)) {
        let userValue = {
            uName: fName.value,
            uLname: lName.value,
            uAddress: address.value,
            uCity: city.value,
            uState: state.value,
            uCountry: state.value,
            uCpWord: cpWord.value,
            uNumber: number.value,
            uEmail: email.value,
        };
        
        let userObject = JSON.stringify(userValue);
        localStorage.setItem('userDetails', userObject);
        window.location= './home.html';
        console.log(userValue);
    };
});

// home page

let userProfile = document.querySelector('.user-account span');
console.log(userProfile);