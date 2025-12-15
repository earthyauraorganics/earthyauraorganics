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
    originalItems.forEach((item) => strip.appendChild(item.cloneNode(true)));

    let paused = false;
    const step = 0.7; // pixels per frame

    strip.addEventListener("mouseenter", () => {
      paused = true;
    });
    strip.addEventListener("mouseleave", () => {
      paused = false;
    });

    const animate = () => {
      if (!paused) {
        const maxScroll = strip.scrollWidth / 2; // width of original content
        let next = strip.scrollLeft + step;

        if (next >= maxScroll) {
          next -= maxScroll;
        }

        strip.scrollLeft = next;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  });
});