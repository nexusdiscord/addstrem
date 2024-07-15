const colors = ['#ff00ff', '#ff9900', '#00ff00', '#ffff00'];

function changeColor() {
    const bubble = document.querySelector('.bubble');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.color = randomColor;
}

setInterval(changeColor, 500);

gsap.to(".bubble", {
    duration: 3,
    y: -20,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
