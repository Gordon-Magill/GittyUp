
// console.log($(".animatedPopIn"));
bgContainer = $('.backgroundBodyGrid')
for (i=0; i<1000; i++) {
  let newEl = $('<div>')
  newEl.addClass('backgroundEl')
  // PINK
  newEl.css({'background': `rgb(${Math.min(0.5*i,255)},${Math.abs(255-0.5*i)},255,0.25)`})
  // Hot garbage
  // newEl.css({'background': `rgb(${Math.sin(i)*255},${Math.cos(i)*255},${Math.tan(i)*255},0.5)`})
  // Light teals
  // newEl.css({'background': `rgb(${Math.sin(2*i)*255},255,255,0.25)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
  // newEl.css({'background': `rgb(${Math.max(2*i,255)},${Math.abs(255-2*i)},255,0.5)`})
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

// Overlapping squares
anime({
  targets: '.backgroundEl',
  delay: anime.stagger(5),
  scale: [{value:1.5, easing:'easeInOutSine', duration:6000}],
  rotateZ: 360*5,
  duration: 10000*5,
  loop: true,
  direction: 'alternate',
  easing: "easeInOutSine"
})