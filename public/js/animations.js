window.onload = function customOnload() {
    const animatedElement = $(".animated");
    anime({
        targets: animatedElement,
        translateX: 250,
      });
}

console.log('At least this script works')
