new Swiper(".slider", {
  // Optional parameters
  // for vertical slider:
  // direction: "vertical",
  direction: "horizontal",
  speed: 2400,
  mousewheel: {
    enabled: true,
    sensitivity: 1.5,
  },
  spaceBetween: 18,
  parallax: true,
  // for disable slider step by step:
  //   freeMode: true,
});
