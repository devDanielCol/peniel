import { Box } from "@mui/material";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface IProps {
  scroll: number;
  children?: ReactNode;
}

const TranslateScroll: FC<IProps> = ({ scroll, children }) => {
  const ref = useRef<HTMLElement>();

  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const e = ref.current?.getBoundingClientRect();
    const t = e?.top as number;
    const b = e?.bottom as number;
    const h = e?.height as number;

    if (t <= 170) {
      let proximity = 170;
      if (proximity <= 170) {
        proximity = proximity - t;
      }
      const proximityPercentage = proximity / 170;
      if (proximityPercentage <= 1) {
        setOpacity(proximityPercentage);
      }
    }

    if (b <= h) {
      let proximity = 0;

      if (proximity >= 0) {
        proximity = proximity + (b - document.documentElement.clientHeight / 2);
      }
      const proximityPercentage = proximity / (h / 2);
      if (proximityPercentage >= 0) {
        setOpacity(proximityPercentage);
      }
    }
  }, [scroll]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: opacity <= 0.1 ? 0 : opacity,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      {children}
    </Box>
  );
};

export default TranslateScroll;
