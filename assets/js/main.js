document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Gentle auto-scroll for horizontal image strips on products page
  const strips = document.querySelectorAll(".image-strip");
  strips.forEach((strip) => {
    // Duplicate items once for seamless looping
    const items = Array.from(strip.children);
    items.forEach((item) => strip.appendChild(item.cloneNode(true)));

    let paused = false;
    let scrollPos = 0;
    const step = 1; // px per frame

    strip.addEventListener("mouseenter", () => {
      paused = true;
    });
    strip.addEventListener("mouseleave", () => {
      paused = false;
    });

    const animate = () => {
      if (!paused && strip.scrollWidth > strip.clientWidth) {
        scrollPos = strip.scrollLeft + step;
        if (scrollPos + strip.clientWidth >= strip.scrollWidth - 2) {
          strip.scrollLeft = 0;
        } else {
          strip.scrollLeft = scrollPos;
        }
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  });
});

