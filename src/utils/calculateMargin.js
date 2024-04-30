export const calculateMargin = (mobileMargin, tabletMargin, laptopMargin, desktopMargin) => {
  if (window.innerWidth <= 480) {
    return `${mobileMargin}%`;
  }
  else if (window.innerWidth > 480 && window.innerWidth <= 1025) {
    return `${tabletMargin}%`;
  }
  else if (window.innerWidth > 1025 && window.innerWidth <= 1540) {
    return `${laptopMargin}%`;
  }
  else {
    return `${desktopMargin}%`;
  }
}