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
console.log(currentYear);
yearEl.textContent = currentYear;

//<<<-- POPOVERS ------------------------------------------------------------------------->
// let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
// let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl);
// });

//<<<-- TOASTS ---------------------------------------------------------------------------->
const toastTriggerOne = document.getElementById('liveToastBtnOne');
const toastLiveExampleOne = document.getElementById('liveToastOne');
if (toastTriggerOne) {
  toastTriggerOne.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleOne);

    toast.show();
  });
}
const toastTriggerTwo = document.getElementById('liveToastBtnTwo');
const toastLiveExampleTwo = document.getElementById('liveToastTwo');
if (toastTriggerTwo) {
  toastTriggerTwo.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleTwo);

    toast.show();
  });
}
const toastTriggerThree = document.getElementById('liveToastBtnThree');
const toastLiveExampleThree = document.getElementById('liveToastThree');
if (toastTriggerThree) {
  toastTriggerThree.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleThree);

    toast.show();
  });
}
const toastTriggerFour = document.getElementById('liveToastBtnFour');
const toastLiveExampleFour = document.getElementById('liveToastFour');
if (toastTriggerFour) {
  toastTriggerFour.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleFour);

    toast.show();
  });
}
const toastTriggerFive = document.getElementById('liveToastBtnFive');
const toastLiveExampleFive = document.getElementById('liveToastFive');
if (toastTriggerFive) {
  toastTriggerFive.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleFive);

    toast.show();
  });
}
const toastTriggerSix = document.getElementById('liveToastBtnSix');
const toastLiveExampleSix = document.getElementById('liveToastSix');
if (toastTriggerSix) {
  toastTriggerSix.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleSix);

    toast.show();
  });
}
const toastTriggerSeven = document.getElementById('liveToastBtnSeven');
const toastLiveExampleSeven = document.getElementById('liveToastSeven');
if (toastTriggerSeven) {
  toastTriggerSeven.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleSeven);

    toast.show();
  });
}
const toastTriggerEight = document.getElementById('liveToastBtnEight');
const toastLiveExampleEight = document.getElementById('liveToastEight');
if (toastTriggerEight) {
  toastTriggerEight.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleEight);

    toast.show();
  });
}
const toastTriggerNine = document.getElementById('liveToastBtnNine');
const toastLiveExampleNine = document.getElementById('liveToastNine');
if (toastTriggerNine) {
  toastTriggerNine.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleNine);

    toast.show();
  });
}
const toastTriggerTen = document.getElementById('liveToastBtnTen');
const toastLiveExampleTen = document.getElementById('liveToastTen');
if (toastTriggerTen) {
  toastTriggerTen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleTen);

    toast.show();
  });
}
const toastTriggerEleven = document.getElementById('liveToastBtnEleven');
const toastLiveExampleEleven = document.getElementById('liveToastEleven');
if (toastTriggerEleven) {
  toastTriggerEleven.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleEleven);

    toast.show();
  });
}
const toastTriggerTwelve = document.getElementById('liveToastBtnTwelve');
const toastLiveExampleTwelve = document.getElementById('liveToastTwelve');
if (toastTriggerTwelve) {
  toastTriggerTwelve.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleTwelve);

    toast.show();
  });
}
const toastTriggerThirteen = document.getElementById('liveToastBtnThirteen');
const toastLiveExampleThirteen = document.getElementById('liveToastThirteen');
if (toastTriggerThirteen) {
  toastTriggerThirteen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleThirteen);

    toast.show();
  });
}
const toastTriggerFourteen = document.getElementById('liveToastBtnFourteen');
const toastLiveExampleFourteen = document.getElementById('liveToastFourteen');
if (toastTriggerFourteen) {
  toastTriggerFourteen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleFourteen);

    toast.show();
  });
}
const toastTriggerFifteen = document.getElementById('liveToastBtnFifteen');
const toastLiveExampleFifteen = document.getElementById('liveToastFifteen');
if (toastTriggerFifteen) {
  toastTriggerFifteen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleFifteen);

    toast.show();
  });
}
const toastTriggerSixteen = document.getElementById('liveToastBtnSixteen');
const toastLiveExampleSixteen = document.getElementById('liveToastSixteen');
if (toastTriggerSixteen) {
  toastTriggerSixteen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleSixteen);

    toast.show();
  });
}
const toastTriggerSeventeen = document.getElementById('liveToastBtnSeventeen');
const toastLiveExampleSeventeen = document.getElementById('liveToastSeventeen');
if (toastTriggerSeventeen) {
  toastTriggerSeventeen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleSeventeen);

    toast.show();
  });
}
const toastTriggerEighteen = document.getElementById('liveToastBtnEighteen');
const toastLiveExampleEighteen = document.getElementById('liveToastEighteen');
if (toastTriggerEighteen) {
  toastTriggerEighteen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleEighteen);

    toast.show();
  });
}
const toastTriggerNineteen = document.getElementById('liveToastBtnNineteen');
const toastLiveExampleNineteen = document.getElementById('liveToastNineteen');
if (toastTriggerNineteen) {
  toastTriggerNineteen.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleNineteen);

    toast.show();
  });
}

// ALERTS TOASTS PRODUCTOS
const alertTriggerOne = document.getElementById('alertBtnOne');
const alertLiveExampleOne = document.getElementById('alertOne');
if (alertTriggerOne) {
  alertTriggerOne.addEventListener('click', () => {
    const alert = new bootstrap.Toast(alertLiveExampleOne);

    toast.show();
  });
}

//<<<------ ALL POPS ----------------------------------------------------------
const btnPop = document.querySelector('.btnPopper');
const btnPopOne = document.querySelector('.btnPopperOne');
const btnPopTwo = document.querySelector('.btnPopperTwo');
const btnPopThree = document.querySelector('.btnPopperThree');
const btnPopFour = document.querySelector('.btnPopperFour');
const divPop = document.querySelector('.happyIcon');
const divPopOne = document.querySelector('.happyIconOne');
const divPopTwo = document.querySelector('.happyIconTwo');
const divPopThree = document.querySelector('.happyIconThree');
const divPopFour = document.querySelector('.happyIconFour');
const popperToggler = document.getElementById('popperToggler');
const popperTogglerOne = document.getElementById('popperTogglerOne');
const popperTogglerTwo = document.getElementById('popperTogglerTwo');
const popperTogglerThree = document.getElementById('popperTogglerThree');
const popperTogglerFour = document.getElementById('popperTogglerFour');

btnPop.addEventListener('click', () => {
  if (divPop.style.display === 'contents') {
    divPop.style.display = 'none';
    popperToggler.className = 'plusIcon fa-solid fa-circle-plus';
  } else {
    divPop.style.display = 'contents';
    popperToggler.className = 'plusIcon fa-solid fa-circle-xmark';
    divPopOne.style.display = 'none';
    divPopTwo.style.display = 'none';
    divPopThree.style.display = 'none';
    divPopFour.style.display = 'none';
    popperTogglerOne.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerTwo.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerThree.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerFour.className = 'plusIcon fa-solid fa-circle-plus';
  }
});
//<<<------ POP ONE -----------------------------------------------------
btnPopOne.addEventListener('click', () => {
  if (divPopOne.style.display === 'contents') {
    divPopOne.style.display = 'none';
    popperTogglerOne.className = 'plusIcon fa-solid fa-circle-plus';
  } else {
    divPopOne.style.display = 'contents';
    popperTogglerOne.className = 'plusIcon fa-solid fa-circle-xmark';
    divPop.style.display = 'none';
    divPopTwo.style.display = 'none';
    divPopThree.style.display = 'none';
    divPopFour.style.display = 'none';
    popperToggler.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerTwo.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerThree.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerFour.className = 'plusIcon fa-solid fa-circle-plus';
  }
});

//<<<------ POP TWO -----------------------------------------------------
btnPopTwo.addEventListener('click', () => {
  if (divPopTwo.style.display === 'contents') {
    divPopTwo.style.display = 'none';
    popperTogglerTwo.className = 'plusIcon fa-solid fa-circle-plus';
  } else {
    divPopTwo.style.display = 'contents';
    popperTogglerTwo.className = 'plusIcon fa-solid fa-circle-xmark';
    divPop.style.display = 'none';
    divPopOne.style.display = 'none';
    divPopThree.style.display = 'none';
    divPopFour.style.display = 'none';
    popperToggler.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerOne.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerThree.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerFour.className = 'plusIcon fa-solid fa-circle-plus';
  }
});

//<<<------ POP THREE -----------------------------------------------------
btnPopThree.addEventListener('click', () => {
  if (divPopThree.style.display === 'contents') {
    divPopThree.style.display = 'none';
    popperTogglerThree.className = 'plusIcon fa-solid fa-circle-plus';
  } else {
    divPopThree.style.display = 'contents';
    popperTogglerThree.className = 'plusIcon fa-solid fa-circle-xmark';
    divPop.style.display = 'none';
    divPopOne.style.display = 'none';
    divPopTwo.style.display = 'none';
    divPopFour.style.display = 'none';
    popperToggler.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerOne.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerTwo.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerFour.className = 'plusIcon fa-solid fa-circle-plus';
  }
});

//<<<------ POP FOUR -----------------------------------------------------
btnPopFour.addEventListener('click', () => {
  if (divPopFour.style.display === 'contents') {
    divPopFour.style.display = 'none';
    popperTogglerFour.className = 'plusIcon fa-solid fa-circle-plus';
  } else {
    divPopFour.style.display = 'contents';
    popperTogglerFour.className = 'plusIcon fa-solid fa-circle-xmark';
    divPop.style.display = 'none';
    divPopOne.style.display = 'none';
    divPopTwo.style.display = 'none';
    divPopThree.style.display = 'none';
    popperToggler.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerOne.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerTwo.className = 'plusIcon fa-solid fa-circle-plus';
    popperTogglerThree.className = 'plusIcon fa-solid fa-circle-plus';
  }
});
