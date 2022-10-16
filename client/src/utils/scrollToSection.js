export const scrollToSection = (elementRef) => {
  return window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
};
