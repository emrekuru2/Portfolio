export const pageChangeAnim = () => {
  if (window.innerWidth <= 640) {
    return {
      initial: { opacity: 0, x: 500 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -1000 },
    };
  }

  return {
    initial: { opacity: 0, y: 500 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -1000 },
  };
};
