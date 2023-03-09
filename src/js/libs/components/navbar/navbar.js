export function initNavbar() {
  return {
    scrolled: false,
    height: 60,
    mobileOpen: false,
    megamenuOpened: false,
    openedMegamenu: "megamenu-1",
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      this.searchExpanded = false;
    },

    scrollTo(el) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: el.getBoundingClientRect().top + window.scrollY - 200,
      });
    },

    openMobileMenu() {
      this.mobileOpen = !this.mobileOpen;
    },

    initScrollAnchors() {
      document
        .querySelectorAll('.scroll-link[href^="#"]')
        .forEach((trigger) => {
          trigger.onclick = function (e) {
            e.preventDefault();
            let hash = this.getAttribute("href");
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          };
        });

      if (window.location.hash) {
        const hash = window.location.hash;
        const target = document.getElementById(hash.substring(1));

        if (target) {
          setTimeout(() => {
            this.scrollTo(target);
          }, 1000);
        }
      }
    },
  };
}
