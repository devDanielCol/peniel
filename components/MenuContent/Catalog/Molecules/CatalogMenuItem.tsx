import { Box, Grid } from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

export const catalogImg = [
  {
    columns: 4,
    img: "https://cdn.pixabay.com/photo/2017/05/09/03/47/buildings-2297210_1280.jpg",
  },
  {
    columns: 8,
    img: "https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_1280.jpg",
  },
  {
    columns: 6,
    img: "https://cdn.pixabay.com/photo/2017/06/28/15/32/venice-2451047_1280.jpg",
  },
  {
    columns: 6,
    img: "https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_1280.jpg",
  },
  {
    columns: 12,
    img: "https://cdn.pixabay.com/photo/2016/10/21/14/50/szechenyi-chain-bridge-1758196_1280.jpg",
  },
];

const CatalogMenuItem = () => {
  return (
    <>
      <Box
        sx={{
          width: "400px",
          minHeight: "300px",
          px: 2,
          py: 4,
          backgroundColor: "background.default",
          borderRadius: 2,
        }}
      >
        <Grid container columnSpacing={1} rowSpacing={1}>
          {catalogImg.map(({ columns, img }, i) => (
            <Grid key={i} item xs={columns}>
              <Box
                sx={{
                  width: "100%",
                  height: "90px",
                  borderRadius: 2,
                  backgroundImage: `url(${img})`,
                  backgroundPositionY: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    opacity: "0%",
                    transition: "all 200ms linear",
                    "&:hover": {
                      opacity: "100%",
                      backgroundColor: "#00000038",
                      backdropFilter: "blur(2px)",
                      transition: "all 200ms linear",
                    },
                  }}
                >
                  <ImageSearchIcon />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CatalogMenuItem;
