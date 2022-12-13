import { Box } from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";

const EndPage: FC = () => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Box
      sx={{
        position: "relative",
        height: "70vh",
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(18deg,#1156B6 33%,#00062D 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          top: 0,
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 2,
          px: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InView
            onChange={(inView) => {
              setInview(inView);
            }}
            threshold={1}
            delay={500}
          >
            <Box
              sx={{
                opacity: inview ? 1 : 0,
                transition: "all .4s linear",
                fontSize: { xs: "2.2rem", sm: "2rem", lg: "3rem" },
                fontWeight: 500,
                color: "white",
                lineHeight: 1,
                letterSpacing: "0px",
                textAlign: "center",
                marginRight: "0px",
                paddingRight: "0px",
              }}
            >
              Recibe una asesoría gratis!
            </Box>
          </InView>
        </Box>
      </Box>

      <Box
        sx={{
          top: 0,
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/image/bgt1.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 1,
          opacity: 0.2,
        }}
      ></Box>
    </Box>
  );
};

export default EndPage;
