// Background rotating squares creation and individual styling
bgContainer = $(".backgroundBodyGrid");

// Get viewport information to render the minimum number of squares needed to cover the page
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
const numSquares = 20 * (20 * (vh / vw)) * 1.35; //1.35 is to help account for overlap of squares
// console.log(numSquares)
// console.log('vw:', vw)
// console.log('vh:', vh)
// console.log('vh/vw:', vh/vw)

// Generate and style each square to achieve the color gradient
for (i = 0; i < numSquares; i++) {
  let newEl = $("<div>");
  newEl.addClass("backgroundEl");
  // Pink + teal gradient
  // newEl.css({'background': `rgb(${Math.min(0.5*i,255)},${Math.abs(255-0.5*i)},255,0.25)`})
  // Pink + teal gradient
  newEl.css({
    background: `rgb(${Math.min(
      (0.25 / (numSquares / 1200)) * i,
      255
    )},${Math.abs(255 - (0.25 * i) / (numSquares / 1200))},255,0.25)`,
  });
  // Hot garbage
  // newEl.css({'background': `rgb(${Math.sin(i)*255},${Math.cos(i)*255},${Math.tan(i)*255},0.5)`})
  // Light teals
  // newEl.css({'background': `rgb(${Math.sin(2*i)*255},255,255,0.25)`})
  bgContainer.append(newEl);
}

// Create a random starting position for the background squares
anime.set(".backgroundEl", {
  scale: function () {
    return anime.random(1, 3);
  },
  rotateZ: function () {
    return anime.random(0, 90);
  },
});

// Animating the background squares
anime({
  targets: ".backgroundEl",
  delay: anime.stagger(200, {grid: [20,numSquares/20], from:'center'}),
  // scale: [{value:1.9, easing:'easeInOutSine', duration:6000}],
  rotateZ: 720,
  duration: 10000,
  loop: true,
  direction: "alternate",
  // delay: anime.stagger(5, {grid: [100, 10], from: 'center'}),
  // easing: "linear"
  easing: "easeInOutSine",
});

// Pop in of elements from off screen (homepage/dashboard)
anime({
  targets: ".popInSway",
  translateX: [-300, 0],
  opacity: [0 , 1],
  delay: anime.stagger(30),
  // duration: 100,
  // loop: true,
  // direction: 'alternate',
  easing: "spring(1, 80, 20, 0)",
}).finished.then(() => {
  anime({
    targets: ".popInSway",
    translateX: [0, 15],
    delay: anime.stagger(400, {from: 'center'}),
    duration: 4000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
    // easing: "linear",
  });
});

// Animation for the top posts (offset from main posts)
anime({
  targets: ".popInSway2",
  translateX: [-300, 0],
  opacity: [0 , 1],
  delay: anime.stagger(30),
  // duration: 100,
  // loop: true,
  // direction: 'alternate',
  easing: "spring(1, 80, 20, 0)",
}).finished.then(() => {
  anime({
    targets: ".popInSway2",
    translateX: [0, 15],
    delay: anime.stagger(500),
    duration: 4000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    // easing: "linear",
  });
});

// Pop-in of title elements on homepage
anime({
  targets: ".popIn",
  translateX: [-300, 0],
  opacity: [0 , 1],
  delay: anime.stagger(30),
  duration: '1000',
  easing: "spring(1, 80, 20, 0)",
})

// Non-functional until stroke width is defined in the SVG
// anime({
//   targets: '.mainLogo',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 1500,
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   loop: true,
// })
