'use strict';
// FETCH CART FROM LOCAL STORAGE
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// console.log(cart);
//<<<-- HIDE BANNER MSG ------------------------------------------------------------------------>
// let lastScrollTop = 1;
// bannerMsg = document.getElementById('bannerMsg');
// bannerMsg = document.getElementById('bannerMsg');
// window.addEventListener('scroll', function () {
//   let scrollTop = this.window.scrollX || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     bannerMsg.className = 'd-none';
//     lastScrollTop = 1;
//     scrollTop = 1;
//   } else if ((scrollTop = lastScrollTop)) {
//     bannerMsg.className = 'd-none';
//   }
//   lastScrollTop = scrollTop;
// });

//<<<-- COPYRIGHT ------------------------------------------------------------------------>
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//<<<-- POPOVERS ------------------------------------------------------------------------->
// let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
// let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl);
// });
