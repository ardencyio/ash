export function initDropdown() {
  return {
    isActive: false,
    open() {
      this.isActive = true;
    },
    close() {
      this.isActive = false;
    },
  };
}
