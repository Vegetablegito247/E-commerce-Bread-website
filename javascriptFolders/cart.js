// variables

let bringCart = localStorage.getItem('cartGet');
let useCart = JSON.parse(bringCart);

// let bringBuyCart = localStorage.getItem('buyGet');
// let useBuy = JSON.parse(bringBuyCart);

let cartCont = document.querySelector('.cart-cont');
let subTotal = document.querySelector('.summary-total span');
let checkOutBtn = document.querySelector('#checkBtn');
let cartCount = document.querySelector('.cart-count');

let userAcc = document.querySelector('.user-account');
let userProfile = document.querySelector('.user-account span');
let disUserAcc = document.querySelector('.dis-user-account');

let signOut = document.querySelector('.dis-user-signIn')

let closeModal = document.querySelector('.close-modal');

userAcc.addEventListener('click', () => {
    disUserAcc.style.display = 'block';
    closeModal.style.display = 'block';

    closeModal.addEventListener('click', () => {
        disUserAcc.style.display = 'none';
        closeModal.style.display = 'none';
    });
});

signOut.addEventListener('click', () => {
    window.location = './index.html';
});

let total = 0;

// useBuy.forEach((value, index, array) => {
//     // placing in the items

//     let cartMain = document.createElement('div');
//     cartMain.classList.add('cart-main');

//     total += parseFloat(value.price);
//     subTotal.textContent = `N${total}`;
//     checkOutBtn.textContent = `checkout (N${total})`;

//     cartMain.innerHTML = `
//     <div class="cart-main-flex">
//       <img src="${value.image}" alt="">
//       <div class="cart-main-dis">
//           <h5>${value.name}</h5>
//           <span>N${value.price}</span>
//       </div>
//     </div>
//     <div class="cart-del-or-add">
//       <div class="del">
//           <i class="fa-solid fa-trash"></i>
//           <span>remove</span>
//       </div>
//       <div class="add">
//           <i class="fa-solid fa-minus"></i>
//           <span>O</span>
//           <i class="fa-solid fa-plus"></i>
//       </div>
//     </div>
//     `;

//     // updating the price

//     let add = cartMain.querySelector('.fa-plus');
//     let minus = cartMain.querySelector('.fa-minus');
//     let numValue = cartMain.querySelector('.add span');
//     let number = 1;

//     numValue.innerHTML = number;
//     let del = cartMain.querySelector('.del');

//     del.addEventListener('click', () => {
//         cartMain.remove();
//         total -= parseFloat(value.price);
//         subTotal.textContent = total;
//         checkOutBtn.textContent = `checkout${total}`;
//     });

//     add.addEventListener('click', () => {
//         if (number < 20) {
//             number++;
//             numValue.innerText = number;
//             total += parseFloat(value.price);
//             subTotal.textContent = `N${total}`;
//             checkOutBtn.textContent = `checkout (N${total})`;
//         }
//     });

//     minus.addEventListener('click', () => {
//         if (number > 1) {
//             number--;
//             numValue.innerText = number;
//             total -= parseFloat(value.price);
//             subTotal.textContent = `N${total}`;
//             checkOutBtn.textContent = `checkout (N${total})`;
//         }
//     });

//     cartCont.insertBefore(cartMain, cartCont.querySelector('.empty'));

//     let checkOutTotal = JSON.stringify(total);
//     localStorage.setItem('FinalPrice', checkOutTotal);

//     checkOutBtn.addEventListener('click', () => {
//         window.location = './summary.html';
//     })
// });