export const skillSliderAnim = (x_start: string, x_end: string) => {
  return {
    animate: {
      x: [x_start, x_end],
    },
    transition: {
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    },
  };
};
