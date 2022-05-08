//<<<------ HIDE BANNER MSG ----------------------------------------------------------------

let lastScrollTop = 1;
bannerMsg = document.getElementById("bannerMsg");
window.addEventListener("scroll", function () {
  let scrollTop = this.window.scrollX || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    bannerMsg.className = "d-none";
    lastScrollTop = 1;
    scrollTop = 1;
  } else if ((scrollTop = lastScrollTop)) {
    bannerMsg.className =
      "container-fluid d-sm-flex d-md-flex justify-content-center containerBannerMsg";
  }
  lastScrollTop = scrollTop;
});

//<<<------ COPYRIGHT -----------------------------------------------------

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

//<<<------ POP ----------------------------------------------------------
const btnPop = document.querySelector(".btnPopper");
const btnPopOne = document.querySelector(".btnPopperOne");
const btnPopTwo = document.querySelector(".btnPopperTwo");
const btnPopThree = document.querySelector(".btnPopperThree");
const btnPopFour = document.querySelector(".btnPopperFour");
const divPop = document.querySelector(".happyIcon");
const divPopOne = document.querySelector(".happyIconOne");
const divPopTwo = document.querySelector(".happyIconTwo");
const divPopThree = document.querySelector(".happyIconThree");
const divPopFour = document.querySelector(".happyIconFour");
const popperToggler = document.getElementById("popperToggler");
const popperTogglerOne = document.getElementById("popperTogglerOne");
const popperTogglerTwo = document.getElementById("popperTogglerTwo");
const popperTogglerThree = document.getElementById("popperTogglerThree");
const popperTogglerFour = document.getElementById("popperTogglerFour");

btnPop.addEventListener("click", () => {
  if (divPop.style.display === "contents") {
    divPop.style.display = "none";
    popperToggler.className = "plusIcon fa-solid fa-circle-plus";
  } else {
    divPop.style.display = "contents";
    popperToggler.className = "plusIcon fa-solid fa-circle-xmark";
    divPopOne.style.display = "none";
    divPopTwo.style.display = "none";
    divPopThree.style.display = "none";
    divPopFour.style.display = "none";
    popperTogglerOne.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerTwo.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerThree.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerFour.className = "plusIcon fa-solid fa-circle-plus";
  }
});
//<<<------ POP ONE -----------------------------------------------------

btnPopOne.addEventListener("click", () => {
  if (divPopOne.style.display === "contents") {
    divPopOne.style.display = "none";
    popperTogglerOne.className = "plusIcon fa-solid fa-circle-plus";
  } else {
    divPopOne.style.display = "contents";
    popperTogglerOne.className = "plusIcon fa-solid fa-circle-xmark";
    divPop.style.display = "none";
    divPopTwo.style.display = "none";
    divPopThree.style.display = "none";
    divPopFour.style.display = "none";
    popperToggler.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerTwo.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerThree.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerFour.className = "plusIcon fa-solid fa-circle-plus";
  }
});

//<<<------ POP TWO -----------------------------------------------------

btnPopTwo.addEventListener("click", () => {
  if (divPopTwo.style.display === "contents") {
    divPopTwo.style.display = "none";
    popperTogglerTwo.className = "plusIcon fa-solid fa-circle-plus";
  } else {
    divPopTwo.style.display = "contents";
    popperTogglerTwo.className = "plusIcon fa-solid fa-circle-xmark";
    divPop.style.display = "none";
    divPopOne.style.display = "none";
    divPopThree.style.display = "none";
    divPopFour.style.display = "none";
    popperToggler.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerOne.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerThree.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerFour.className = "plusIcon fa-solid fa-circle-plus";
  }
});

//<<<------ POP THREE -----------------------------------------------------

btnPopThree.addEventListener("click", () => {
  if (divPopThree.style.display === "contents") {
    divPopThree.style.display = "none";
    popperTogglerThree.className = "plusIcon fa-solid fa-circle-plus";
  } else {
    divPopThree.style.display = "contents";
    popperTogglerThree.className = "plusIcon fa-solid fa-circle-xmark";
    divPop.style.display = "none";
    divPopOne.style.display = "none";
    divPopTwo.style.display = "none";
    divPopFour.style.display = "none";
    popperToggler.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerOne.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerTwo.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerFour.className = "plusIcon fa-solid fa-circle-plus";
  }
});

//<<<------ POP FOUR -----------------------------------------------------

btnPopFour.addEventListener("click", () => {
  if (divPopFour.style.display === "contents") {
    divPopFour.style.display = "none";
    popperTogglerFour.className = "plusIcon fa-solid fa-circle-plus";
  } else {
    divPopFour.style.display = "contents";
    popperTogglerFour.className = "plusIcon fa-solid fa-circle-xmark";
    divPop.style.display = "none";
    divPopOne.style.display = "none";
    divPopTwo.style.display = "none";
    divPopThree.style.display = "none";
    popperToggler.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerOne.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerTwo.className = "plusIcon fa-solid fa-circle-plus";
    popperTogglerThree.className = "plusIcon fa-solid fa-circle-plus";
  }
});

//<<<------ TOAST -----------------------------------------------------
let toastTrigger = document.getElementById("liveToastBtn");
let toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    let toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

//<<<------ TOAST TWO -----------------------------------------------------
let toastTriggerTwo = document.getElementById("liveToastBtnTwo");
let toastLiveExampleTwo = document.getElementById("liveToastTwo");
if (toastTriggerTwo) {
  toastTriggerTwo.addEventListener("click", function () {
    let toast = new bootstrap.Toast(toastLiveExampleTwo);

    toast.show();
  });
}

//<<<------ TOAST THREE -----------------------------------------------------
let toastTriggerThree = document.getElementById("liveToastBtnThree");
let toastLiveExampleThree = document.getElementById("liveToastThree");
if (toastTriggerThree) {
  toastTriggerThree.addEventListener("click", function () {
    let toast = new bootstrap.Toast(toastLiveExampleThree);

    toast.show();
  });
}

//<<<------ TOAST FOUR -----------------------------------------------------
let toastTriggerFour = document.getElementById("liveToastBtnFour");
let toastLiveExampleFour = document.getElementById("liveToastFour");
if (toastTriggerFour) {
  toastTriggerFour.addEventListener("click", function () {
    let toast = new bootstrap.Toast(toastLiveExampleFour);

    toast.show();
  });
}

//<<<------ TOAST FIVE -----------------------------------------------------
let toastTriggerFive = document.getElementById("liveToastBtnFive");
let toastLiveExampleFive = document.getElementById("liveToastFive");
if (toastTriggerFive) {
  toastTriggerFive.addEventListener("click", function () {
    let toast = new bootstrap.Toast(toastLiveExampleFive);

    toast.show();
  });
}

//<<<------ TOAST SIX -----------------------------------------------------
let toastTriggerSix = document.getElementById("liveToastBtnSix");
let toastLiveExampleSix = document.getElementById("liveToastSix");
if (toastTriggerSix) {
  toastTriggerSix.addEventListener("click", function () {
    let toast = new bootstrap.Toast(toastLiveExampleSix);

    toast.show();
  });
}

//<<<------ EMAIL -----------------------------------------------------

/* var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
   */

//<<<------ POPPER -----------------------------------------------------
/* 
const list = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
list.map((el) => {
  let opts = {
    animation: false,
  };
  if (el.hasAttribute("data-bs-content-id")) {
    opts.content = document.getElementById(
      el.getAttribute("data-bs-content-id")
    ).innerHTML;
    opts.html = true;
  }
  new bootstrap.Popover(el, opts);
});
 */
