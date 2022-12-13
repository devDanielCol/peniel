import { Box, Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import GaleryPicture from "../../GaleryPicture/Molecules/GaleryPicture";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

const DrawerCatalog = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} maxWidth="md" fullScreen>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{ position: "absolute", right: 0, zIndex: 100 }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <DoNotDisturbOnIcon color="error" />
        </IconButton>
        <GaleryPicture />
      </Box>
    </Dialog>
  );
};

export default DrawerCatalog;
