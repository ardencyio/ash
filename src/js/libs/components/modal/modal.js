export function initModal() {
  return {
    isOpen: false,
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  };
}
