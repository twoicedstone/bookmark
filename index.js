const mobileMenuOpen = document.getElementById("open_mobilemenu");
const mobileMenu = document.querySelector(".mobile_navdisplay");
const closeMobileMenu = document.getElementById("cls_mobile-menu");
const arrow = document.querySelector(".open_arr1");
const arrowTwo = document.querySelector(".open_arr2");
const arrowThree = document.querySelector(".open_arr3");
const arrowFour = document.querySelector(".open_arr4");
const answer = document.querySelector(".answer1");
const answerTwo = document.querySelector(".answer2");
const answerThree = document.querySelector(".answer3");
const answerFour = document.querySelector(".answer4");
const submitEmail = document.getElementById("send");
const form = document.querySelector(".form");
const inputField = document.getElementById("email");
const errorMessage = document.getElementById("error_message");
const errorIcon = document.getElementById("caution_icon");
const simpleBookmark = document.querySelector(".category-1");
const speedySearch = document.querySelector(".category-2");
const easySharing = document.querySelector(".category-3");
const bottomLineOne = document.querySelector(".bottom_line-1");
const bottomLineTwo = document.querySelector(".bottom_line-2");
const bottomLineThree = document.querySelector(".bottom_line-3");
const bookmarkSection = document.querySelector(".sect_bkm");
const intelligentSection = document.querySelector(".intelligent_sect");
const easySharingSection = document.querySelector(".easysharing_sect");

mobileMenuOpen.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

simpleBookmark.addEventListener("click", () => {
  bottomLineTwo.style.display = "none";
  bottomLineOne.style.display = "block";
  bottomLineThree.style.display = "none";
  bookmarkSection.style.display = "flex";
  intelligentSection.style.display = "none";
  easySharingSection.style.display = "none";
});

easySharing.addEventListener("click", () => {
  bottomLineTwo.style.display = "none";
  bottomLineOne.style.display = "none";
  bottomLineThree.style.display = "block";
  bookmarkSection.style.display = "none";
  intelligentSection.style.display = "none";
  easySharingSection.style.display = "flex";
});

speedySearch.addEventListener("click", () => {
  bottomLineTwo.style.display = "block";
  bottomLineOne.style.display = "none";
  bottomLineThree.style.display = "none";
  bookmarkSection.style.display = "none";
  intelligentSection.style.display = "flex";
  easySharingSection.style.display = "none";
});

(function (document) {
  var div = document.querySelector(".question1");
  var divTwo = document.querySelector(".question2");
  var divThree = document.querySelector(".question3");
  var divFour = document.querySelector(".question4");
  var icon = document.getElementById("aa");
  var iconTwo = document.getElementById("bb");
  var iconThree = document.getElementById("cc");
  var iconFour = document.getElementById("dd");
  var open = false;

  div.addEventListener("click", () => {
    if (open) {
      icon.className = "open_arr1";
      answer.style.display = "none";
      arrow.style.filter = "none";
    } else {
      icon.className = "open_arr1 open";
      answer.style.display = "block";
      arrow.style.filter =
        "invert(47%) sepia(48%) saturate(3553%) hue-rotate(328deg) brightness(104%) contrast(96%)";
    }

    open = !open;
  });

  divTwo.addEventListener("click", () => {
    if (open) {
      iconTwo.className = "open_arr2";
      answerTwo.style.display = "none";
      arrowTwo.style.filter = "none";
    } else {
      iconTwo.className = "open_arr2 open";
      answerTwo.style.display = "block";
      arrowTwo.style.filter =
        "invert(47%) sepia(48%) saturate(3553%) hue-rotate(328deg) brightness(104%) contrast(96%)";
    }

    open = !open;
  });

  divThree.addEventListener("click", () => {
    if (open) {
      iconThree.className = "open_arr3";
      answerThree.style.display = "none";
      arrowThree.style.filter = "none";
    } else {
      iconThree.className = "open_arr3 open";
      answerThree.style.display = "block";
      arrowThree.style.filter =
        "invert(47%) sepia(48%) saturate(3553%) hue-rotate(328deg) brightness(104%) contrast(96%)";
    }

    open = !open;
  });

  divFour.addEventListener("click", () => {
    if (open) {
      iconFour.className = "open_arr4";
      answerFour.style.display = "none";
      arrowFour.style.filter = "none";
    } else {
      iconFour.className = "open_arr4 open";
      answerFour.style.display = "block";
      arrowFour.style.filter =
        "invert(47%) sepia(48%) saturate(3553%) hue-rotate(328deg) brightness(104%) contrast(96%)";
    }

    open = !open;
  });
})(document);

form.addEventListener("submit", validate);
submitEmail.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  const inputValue = inputField.value;

  if (!isEmail(inputValue)) {
    inputField.style.border = "1px solid red";
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
    inputField.style.border = "none";
  }
}

function isEmail(input) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );
}
