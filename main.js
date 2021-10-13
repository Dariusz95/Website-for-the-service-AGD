window.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".menu__burger");
  const menuMobile = document.querySelector(".menu__mobile");
  const menuMobileLinks = document.querySelectorAll(".menu__mobile-link");

  burgerButton.addEventListener("click", function () {
    menuMobile.classList.toggle("showBurgerMenu");
    burgerButton.classList.toggle("burger--active");
  });

  menuMobileLinks.forEach((link)=>{
    link.addEventListener('click',function(){
      burgerButton.classList.remove("burger--active");
      menuMobile.classList.remove("showBurgerMenu");
    })
  })

  //-----------

  const btnOffer = document.querySelector(".btn-offer");

  btnOffer.addEventListener("mouseover", function () {
    btnOffer.classList.remove("bounce");
  });

  //-----------

  const menu = document.querySelector(".menu");

  let oldValue = 0;
  let newValue = 0;
  window.addEventListener("scroll", (e) => {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      menu.classList.add("show");
      menu.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    } else if (oldValue > newValue && newValue == 0) {
      menu.classList.remove("show");
      menu.style.background = "none";
    } else if (oldValue > newValue) {
      menu.classList.remove("show");
    }
    oldValue = newValue;
  });

  //-----------

  window.addEventListener("scroll", reveal);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  //-----------
});
