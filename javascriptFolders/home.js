// variables


let popMsg = document.querySelector('.pop-up-msg');
let welcomeMessage = document.querySelector('.pop-up-msg h5');
let closeWelcome = document.querySelector('#welcome');

let userAcc = document.querySelector('.user-account');
let userProfile = document.querySelector('.user-account span');
let disUserAcc = document.querySelector('.dis-user-account');

let cartPage = document.querySelector('.user-cart');

let signOut = document.querySelector('.dis-user-signIn');

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

const addToCart = () => {
  const addButtons = document.querySelectorAll('.order');
  const cart = [];

  addButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const breadItemContainer = event.target.closest('.bread-items');
      let cartInfo = document.querySelector('.user-cart');
      let cartQuantity = parseInt(cartInfo.querySelector('.cart-count').textContent)

      // upgrade cart quantity 
      cartQuantity++;
      cartInfo.querySelector('.cart-count').textContent = cartQuantity;

      const breadItem = {
        image: breadItemContainer.querySelector('img').src,
        name: breadItemContainer.querySelector('h3').textContent,
        price: parseInt(breadItemContainer.querySelector('span').textContent.slice(1))
      };
      cart.push(breadItem);
      console.log('Item added to cart:', cart);
      let cartDetails = JSON.stringify(cart);
      localStorage.setItem('cartGet', cartDetails)
    });
  });
};

addToCart();

const buyNow = () => {
  let buyBtn = document.querySelectorAll('.buy');
  let bringCart = []

  buyBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      let breadItemContainer = event.target.closest('.bread-items');

      let buybreadItem = {
        buyimage: breadItemContainer.querySelector('img').src,
        buyname: breadItemContainer.querySelector('h3').textContent,
        buyprice: parseInt(breadItemContainer.querySelector('span').textContent.slice(1))
      };

      bringCart.push(buybreadItem)

      let buyNowDetails = JSON.stringify(bringCart);
      localStorage.setItem('buyGet', buyNowDetails);

      window.location = './buyNow.html';
    })
  })
}

buyNow();

// going to cart page

cartPage.addEventListener('click', () => {
  window.location = './cart.html';
})