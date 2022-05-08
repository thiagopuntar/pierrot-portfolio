const breakpoints = {
  md: "769",
  lg: "1024",
  xl: "1440",
};

export const breakAt = (point) => `@media (min-width: ${breakpoints[point]}px)`;
export const breakUntil = (point) =>
  `@media (max-width: ${breakpoints[point]}px)`;
