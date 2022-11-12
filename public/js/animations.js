// Background rotating squares creation and individual styling
bgContainer = $('.backgroundBodyGrid')
for (i=0; i<1200; i++) {
  let newEl = $('<div>')
  newEl.addClass('backgroundEl')
  // Pink + teal gradient
  // newEl.css({'background': `rgb(${Math.min(0.5*i,255)},${Math.abs(255-0.5*i)},255,0.25)`})
  // Pink + teal gradient
  newEl.css({'background': `rgb(${Math.min(0.25*i,255)},${Math.abs(255-0.25*i)},255,0.25)`})
  // Hot garbage
  // newEl.css({'background': `rgb(${Math.sin(i)*255},${Math.cos(i)*255},${Math.tan(i)*255},0.5)`})
  // Light teals
  // newEl.css({'background': `rgb(${Math.sin(2*i)*255},255,255,0.25)`})
  bgContainer.append(newEl)
}

// Animating the background squares
anime({
  targets: '.backgroundEl',
  delay: anime.stagger(5),
  scale: [{value:1.5, easing:'easeInOutSine', duration:6000}],
  rotateZ: 360*5,
  duration: 10000*6,
  loop: true,
  direction: 'alternate',
  // delay: anime.stagger(5, {grid: [100, 10], from: 'center'}),
  // easing: "linear"
  easing: "easeInOutSine"
})

// Pop in of elements from off screen (homepage)
anime({
  targets: ".animatedPopIn",
  translateX: [-2000, 0],
  delay: anime.stagger(15),
  // duration: 100,
  // loop: true,
  // direction: 'alternate',
  easing: 'spring(1, 80, 20, 0)',
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

// Basic spinning squares
// anime({
//   targets: '.backgroundEl',
//   // delay: anime.stagger(5),
//   rotateZ: 360,
//   duration: 20000,
//   loop: true,
//   direction: 'alternate',
//   easing: "easeInOutSine"
// })

// Non-functional until stroke width is defined in the SVG
anime({
  targets: '.mainLogo',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true,
})