import { Box, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Content from "../components/Layout/Content/General";

export default function Home() {
  return (
    <Content title="Home | Peniel construcciones">
      {/* <div style={{ overflow: "hidden" }}>
        <picture style={{ transform: "translateX(-75px)" }}>
          <img
            alt=""
            aria-hidden="true"
            width="4377"
            className="position-absolute top-0 events-none"
            style={{
              maxWidth: "calc(230vw + 1670px)",
              transform: "translateX(-45%)",
            }}
            src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
          ></img>
        </picture>
      </div> */}
      <Container sx={{ width: "100%", height: "100vh" }}>
        <Box sx={{ height: 1000 }}>
          <Paper
            sx={{
              width: 300,
              height: 400,
              backgroundColor: "background.paper",
            }}
          ></Paper>
        </Box>
      </Container>
    </Content>
  );
}
