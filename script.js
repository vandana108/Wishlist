
const wishlistInput= document.getElementById('wishlist-input');
const addWishlistButton = document.getElementById('add-btn');
console.log(wishlistInput);
console.log(wishlistInput.placeholder);
console.log(wishlistInput.value);
// wishlistInput.addEventListener('input', () => {
//   console.log(event.target.value);
// })

addWishlistButton.addEventListener('click', () =>{
  let userWishlist = console.log(wishlistInput.value);
  // if(userWishlist.length===0){
  //   return 
  // }
  if(!userWishlist)return
  addWishlist(userWishlist);
})

function addWishlist(){
// console.log('function called')
const wishlistContainer = document.createElement('div');

const checkbox = document.createElement('input');
checkbox.type='checkbox';

const wishlistText = document.createElement('span');
}