document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Auto-scroll for horizontal image strips on products page
  const strips = document.querySelectorAll(".image-strip");
  strips.forEach((strip) => {
    // Duplicate children once so the scroll can loop seamlessly
    const originalItems = Array.from(strip.children);
    if (!originalItems.length) return;
    originalItems.forEach((item) => strip.appendChild(item.cloneNode(true)));

    let paused = false;
    const step = 1.5; // pixels per frame

    strip.addEventListener("mouseenter", () => {
      paused = true;
    });
    strip.addEventListener("mouseleave", () => {
      paused = false;
    });

    const animate = () => {
      if (!paused) {
        const maxScroll = strip.scrollWidth - strip.clientWidth;
        if (maxScroll > 0) {
          let next = strip.scrollLeft + step;
          if (next >= maxScroll) next = 0;
          strip.scrollLeft = next;
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  });
});