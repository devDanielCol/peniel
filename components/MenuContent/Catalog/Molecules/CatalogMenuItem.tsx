import { Box, Button } from "@mui/material";

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
          px: 2,
          py: 4,
        }}
      >
        <Button sx={{ backgroundColor: "secondary" }}>Ver Fotos</Button>
      </Box>
    </>
  );
};

export default CatalogMenuItem;
