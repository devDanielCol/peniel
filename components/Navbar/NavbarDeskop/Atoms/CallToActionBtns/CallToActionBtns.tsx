import { Box, Button } from "@mui/material";
import CatalogMenuItem from "../../../../MenuContent/Catalog/Molecules/CatalogMenuItem";
import MenuToolpit from "../MenuToolpit/MenuToolpit";

const CallToActionBtns = () => {
  return (
    <Box sx={{ display: "flex", color: "white" }}>
      <MenuToolpit name="Catalogo" element={<CatalogMenuItem />} />
      <Button
        variant="outlined"
        sx={{
          px: 1,
          py: 0.5,
          ml: 2,
          color: "white",
          borderColor: "white",
          borderRadius: 2,
          "&:hover": {
            opacity: "70%",
          },
        }}
      >
        Nosotros
      </Button>
    </Box>
  );
};

export default CallToActionBtns;
