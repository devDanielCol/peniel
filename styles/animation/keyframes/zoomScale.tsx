export const animationZoom = {
  "@keyframes ZoomPrimary": {
    from: {
      opacity: 0.5,
      transform: "scale(0.1)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  "@keyframes desdeAbajo": {
    from: {
      opacity: 0,
      transform: "scale(5) rotate(-40deg)",
    },
    to: {
      opacity: 1,
      transform: "scale(1) rotate(-40deg)",
    },
  },
};
export const waveMove = (delay: number, skip: boolean) => {
  if (skip) {
    return {
      animation: `wave 1s cubic-bezier(0.5,0,0.5,1) ${delay}ms 3 alternate`,
      "@keyframes wave": {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-30%)" },
        to: { transform: "translateY(0px)" },
      },
    };
  }

  return {};
};
