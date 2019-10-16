document.addEventListener("DOMContentLoaded", function() {
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    wrapAround: true,
    freeScroll: true,
    autoPlay: 1200
  });
});

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");

emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (emailInput.value == "") {
    alert("Please,enter a valid value!");
  } else {
    alert("Thanks for subscribing!");
  }
});
window.onscroll = function() {
  myFunction();
};

let header = document.getElementById("stiheader");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
