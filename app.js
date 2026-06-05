document.addEventListener('DOMContentLoaded', () => {
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.5 } });

    tl.from('.brand', { y: -20, opacity: 0, duration: 1 })
      .from('.nav a', { y: -20, opacity: 0, stagger: 0.1 }, '-=0.8')
      .from('.word', { y: 120, opacity: 0, stagger: 0.08 }, '-=1')
      .from('.stagger', { y: 40, opacity: 0, stagger: 0.15 }, '-=1.2')
      .from('.hero-side .stat-card', { x: 60, opacity: 0, stagger: 0.2 }, '-=1.2');

    gsap.utils.toArray('.reveal').forEach((elem) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 90%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    // Parallax effect for cards
    gsap.utils.toArray('.work-card').forEach((card) => {
      gsap.to(card.querySelector('.media'), {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -30,
        ease: 'none'
      });
    });
  }

  const updateClock = () => {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const footerTime = document.getElementById('footerTime');
    if (footerTime) footerTime.textContent = now.toLocaleTimeString('en-IN', options) + ' IST';
  };
  setInterval(updateClock, 1000);
  updateClock();
});
