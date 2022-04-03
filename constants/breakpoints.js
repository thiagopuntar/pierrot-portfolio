const breakpoints = {
  md: "769",
  lg: "1024",
};

export const breakAt = (point) => `@media (min-width: ${breakpoints[point]}px)`;
