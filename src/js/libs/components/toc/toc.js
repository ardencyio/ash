export function initToc() {
  return {
    activeItem: document.querySelectorAll('[data-section]')[0].getAttribute("data-section"),
    scrollTo(el) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: el.getBoundingClientRect().top + window.scrollY - 100,
      });
    },
    selectItem(e) {
      const sectionId = e.target.getAttribute("data-section");
      const section = document.getElementById(sectionId);
      this.activeItem = sectionId;
      this.scrollTo(section);
    },
  };
}
