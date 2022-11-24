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
    <Box sx={{ width: "100%", height: "150vh", position: "relative" }}>
      <Box
        ref={ref}
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: "url(/image/home2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: `brightness(${opacity}%)`,
          position: "absolute",
        }}
      ></Box>
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundScroll;
