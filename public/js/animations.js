
// console.log($(".animatedPopIn"));
bgContainer = $('.backgroundBodyGrid')
for (i=0; i<100; i++) {
  let newEl = $('<div>')
  newEl.addClass('backgroundEl')
  bgContainer.append(newEl)
}


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

anime({
  targets: '.backgroundEl',
  // delay: anime.stagger(25),
  rotateZ: 360,
  duration: 20000,
  loop: true,
  direction: 'alternate',
  easing: "easeInOutSine"
})