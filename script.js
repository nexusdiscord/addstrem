const bubbleAnimation = () => {
    const bubbles = document.querySelectorAll('.bubble::before');
    bubbles.forEach(bubble => {
        gsap.to(bubble, {
            duration: 4,
            y: -100,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });
};

bubbleAnimation();
