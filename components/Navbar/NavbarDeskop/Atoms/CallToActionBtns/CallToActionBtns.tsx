import { Button } from "@mui/material";

const CallToActionBtn = () => {
  return (
    <Button
      variant="text"
      component="a"
      href="#services"
      sx={{
        px: 1,
        py: 0.5,
        ml: 2,
        color: "inherit",
        borderColor: "custom.callaction",
        borderRadius: 2,
      }}
    >
      Servicios
    </Button>
  );
};

export default CallToActionBtn;
