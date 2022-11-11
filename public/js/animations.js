// let tl = anime.timeline({});

// tl.add({
//   targets: ".animatedPopIn",
//   translateX: [-3000, 0],
//   delay: anime.stagger(50, { from: "last" }),
//   duration: 1000,
// });
console.log($(".animatedPopIn"));

anime({
  targets: ".animatedPopIn",
  translateX: [-2000, 0],
  delay: anime.stagger(15),
  duration: 2000,
  // loop: true,
  // direction: 'alternate',
  easing: "easeOutElastic",
}).finished.then(() => {
  anime({
    targets: '.animatedPopIn',
    translateX: [0, 15],
    delay: anime.stagger(200),
    duration: 4000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
  });
});
