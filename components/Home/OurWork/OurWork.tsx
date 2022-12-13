import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { FC } from "react";
import OpacityScroll from "../../ScrollWindow/componets/OpacityScroll";

interface IRightSectionGridProps {
  scroll?: number;
}

const OurWork: FC<IRightSectionGridProps> = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          minHeight: "50vh",
          py: 5,
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              pl: { xs: 0, md: "4rem" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                m: 0,
                lineHeight: 1,
                fontSize: { xs: "2rem", lg: "4rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Más clientes satisfechos
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                m: 0,
                lineHeight: 1,
                fontSize: { xs: "1.2rem", lg: "1.5rem" },
                textAlign: { xs: "center", md: "left" },
                mt: { xs: 2, md: 0 },
              }}
            >
              Un trabajo que deja sonrisas
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              height: "100%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage: "url(/image/pcwork.webp)",
                width: "100%",
                height: { xs: "300px", md: "600px" },
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurWork;
