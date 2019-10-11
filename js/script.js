document.addEventListener("DOMContentLoaded", function() {
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    wrapAround: true,
    freeScroll: true
  });
});

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");

emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (emailInput.value == "") {
    alert("Please,enter a valid value!");
  } else {
    alert("thanks for subscribing!");
  }
});
