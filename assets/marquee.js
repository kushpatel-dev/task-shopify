function initMarquee(container) {
  const speed = parseFloat(container.dataset.speed) || 1;
  
  // Example logic — you can replace with your actual marquee effect
  let scrollAmount = 0;
  function step() {
    scrollAmount += speed;
    container.scrollLeft = scrollAmount;
    requestAnimationFrame(step);
  }
  step();

  console.log("Marquee initialized for:", container);
}

function initAllMarquees() {
  document.querySelectorAll('[data-marquee]').forEach((el) => {
    // Prevent double-init
    if (!el.dataset.marqueeInitialized) {
      initMarquee(el);
      el.dataset.marqueeInitialized = "true";
    }
  });
}

// Run when page is ready
document.addEventListener('DOMContentLoaded', initAllMarquees);

// Run when a section is loaded in Theme Editor
document.addEventListener('shopify:section:load', initAllMarquees);

// Run when a block is selected in Theme Editor
document.addEventListener('shopify:block:select', initAllMarquees);
