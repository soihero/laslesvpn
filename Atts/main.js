const owl = $(".owl-carousel");

owl.owlCarousel({
  loop: true,
  items: 3,
  margin: 50,
  dotsContainer: ".dots",
  dotsEach: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      margin: 300,
      items: 3,
    },
  },
});

$(".arrow-right").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".arrow-left").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});

$(".dot").click(function () {
  owl.trigger("to.owl.carousel", [$(this).index(), 300]);
});

const hamburgerMenu = document.querySelector(".mobilemenu");
const smallNav = document.querySelector(".hidemenu");
const smallNavItems = document.querySelectorAll(".hidemenu ul li a");

hamburgerMenu.addEventListener("click", function () {
  smallNav.classList.toggle("hidemenu--active");
  document.body.classList.toggle("overflow-h");
});

smallNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    smallNav.classList.toggle("hidemenu--active");
    document.body.classList.toggle("overflow-h");
  });
});
