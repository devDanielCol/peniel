import { Button } from "@mui/material";

const CallToActionBtn = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        px: 1,
        py: 0.5,
        ml: 2,
        color: "custom.callaction",
        borderColor: "custom.callaction",
        borderRadius: 2,
        "&:hover": {
          opacity: "70%",
          color: "custom.callaction",
          borderColor: "custom.callaction",
        },
      }}
    >
      Nosotros
    </Button>
  );
};

export default CallToActionBtn;
