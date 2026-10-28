(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  const video = document.querySelector(".hero-media video");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (video) {
    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => {});
  }
})();
