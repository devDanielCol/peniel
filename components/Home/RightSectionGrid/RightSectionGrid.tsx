import {
  Container,
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid,
} from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { waveMove } from "../../../styles/animation/keyframes/zoomScale";

interface ILeftSectionGridProps {
  scroll: number;
}

const LeftSectionGrid: FC<ILeftSectionGridProps> = ({ scroll }) => {
  const [inView, setInView] = useState<boolean>(false);
  const [text, setText] = useState<boolean>(false);

  return (
    <Box sx={{ backgroundColor: "#0a0f11", color: "white" }}>
      <InView
        onChange={(inView) => {
          setInView(inView);
          console.log(inView);
        }}
        threshold={0.25}
      >
        <Container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: "8rem",
              transform: inView ? "translateX(0%)" : "translateX(-100vw)",
              transition: "all .5s linear",
              overflow: "hidden",
            }}
          >
            <InView
              onChange={(inView) => {
                setText(inView);
              }}
              threshold={0.6}
              rootMargin={"200px 0px 0px 0px"}
              delay={100}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                {"Expertos".split("").map((letter, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontWeight: 500,
                      zIndex: 1,
                      boxSizing: "border-box",
                      padding: 0,
                      lineHeight: 1,
                      fontSize: { xs: "3.5rem", lg: "7rem" },
                      transition: "all .4s linear",
                      display: "flex",
                      ...waveMove(index * 100, text),
                    }}
                  >
                    {letter}
                  </Typography>
                ))}
              </Box>
            </InView>
            <Typography
              sx={{
                mt: "4rem",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                textAlign: "center",
                color: "#90a4ae",
              }}
            >
              The7 is the{" "}
              <Typography
                sx={{
                  mt: 5,
                  fontSize: "1.5rem",
                  color: "white",
                }}
                component="span"
              >
                most customizable
              </Typography>{" "}
              The7 comes with 60+ prebuilt dummy websites complete with
              exclusive templates for Elementor, WPBakery Page Builder & Slider
              Revolution. Import them in a single click. Mix, match, change.
              Create a perfect foundation for your new website in minutes!
            </Typography>
          </Box>
        </Container>
      </InView>
    </Box>
  );
};

export default LeftSectionGrid;
