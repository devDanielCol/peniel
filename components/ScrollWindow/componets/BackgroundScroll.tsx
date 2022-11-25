import { Box } from "@mui/material";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface IProps {
  scroll: number;
  children?: ReactNode;
}

const BackgroundScroll: FC<IProps> = ({ scroll, children }) => {
  const ref = useRef<HTMLElement>();

  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const e = ref.current?.getBoundingClientRect();
    const t = e?.top as number;
    const h = e?.height as number;

    if (t <= 0) {
      let proximity = 0;
      if (proximity <= h) {
        proximity = proximity + t;
      }

      const proximityPercentage = proximity / h;

      if (proximityPercentage <= 1) {
        setOpacity(proximityPercentage * -100);
      }
    }
  }, [scroll]);

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: "fit-content",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          filter: `brightness(${opacity}%)`,
          top: 0,
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundImage: "url(/image/home3.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
      </Box>
      <Box sx={{ width: "100%", height: "100%", position: "relative", top: 0 }}>
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundScroll;
