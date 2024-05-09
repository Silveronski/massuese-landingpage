export const calculateMargin = (mobileMargin, tabletMargin, laptopMargin, desktopMargin) => {
  const width = window.innerWidth;
  if (width <= 480) return `${mobileMargin}%`;
  if (width <= 1025) return `${tabletMargin}%`;
  if (width <= 1540) return `${laptopMargin}%`;
  return `${desktopMargin}%`;
}
