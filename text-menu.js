window.addEventListener("DOMContentLoaded", (event) => {
  let isMenuOpen = false;
  let menuTimeline = gsap.timeline({ paused: true });
  
  menuTimeline.from($("[letters-slide-up-click]").find(".char"), { 
    delay: 0.5, opacity: 1, yPercent: 100, duration: 1, 
    ease: "power4.out(2)", stagger: { amount: 0.3 } 
  });

  $(".burger-menu").on("click", function () {
    if (!isMenuOpen) {
      menuTimeline.play();
      isMenuOpen = true;
    } else {
      menuTimeline.reverse();
      isMenuOpen = false;
    }
  });

  $(".close-menu").on("click", function () {
    if (isMenuOpen) {
      menuTimeline.reverse();
      isMenuOpen = false;
    }
  });
});
