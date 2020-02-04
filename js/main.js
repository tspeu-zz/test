// jquery
$(document).ready(function () {
 // 
 $('[data-toggle="popover"]').popover();
 // open modal
 $('#exampleModal').trigger('focus');
 // alert 
 // $('.alert').alert();


})
function showAlert() {
 $('#alert-dialog').show();
}

//carrussell  ES6
let slideIndex = 1;

let plusSlides = (n) => {
 showSlides(slideIndex += n);
};

let currentSlide = () => {
 showSlides(slideIndex = n);
}

const showSlides = (n) => {
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let dots = document.getElementsByClassName("dot");
 if (n > slides.length) { slideIndex = 1 }
 if (n < 1) { slideIndex = slides.length }
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex - 1].style.display = "block";
 dots[slideIndex - 1].className += " active";
};

showSlides(slideIndex);

//items shopping-cart;

let items = 1;
let itemBadge = document.getElementById('badgeItem');
let price = 1.99;
let itemPrice = document.getElementById('priceItem');
let itemAmount = document.getElementById('amountItems');
itemAmount.innerHTML = items;
itemPrice.innerHTML = price;
badgeItem.innerHTML = items;

const increaseItem = () => {

 if (items <= 0) {
  items = 0;
 }
 items++;

 itemAmount.innerHTML = items;
 let priceI = items * price <= 0 ? 0 : items * price;
 itemPrice.innerHTML = priceI;
 badgeItem.innerHTML = items;

}
const decreaseItem = () => {
 items--;
 itemAmount.innerHTML = items <= 0 ? 0 : items--;
 let priceI = items * price <= 0 ? 0 : items * price;
 itemPrice.innerHTML = priceI;
 badgeItem.innerHTML = items;
}
