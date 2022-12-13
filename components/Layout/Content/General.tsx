import { IconButton } from "@mui/material";
import { FC, ReactNode } from "react";
import NavbarDeskop from "../../Navbar/NavbarDeskop/Molecules/NabvarDeskop";
import NavbarMobile from "../../Navbar/NavbarMobile/Molecules/NavBarMobile";
import BodyDocument from "../Body";
import FooterDocument from "../Footer";
import HeadDocument from "../Head";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface IContentProps {
  children?: ReactNode;
  title: string;
  description?: string;
}

const Content: FC<IContentProps> = ({ children, title, description }) => {
  return (
    <>
      <HeadDocument title={title} description={description} />
      <BodyDocument>
        <>
          <NavbarDeskop />
          <NavbarMobile />
          <>{children}</>
          <FooterDocument />

          <IconButton
            href="/#"
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "#00000020",
            }}
          >
            <KeyboardDoubleArrowUpRoundedIcon />
          </IconButton>
          <IconButton
            href="https://wa.me/3203379213"
            sx={{
              position: "fixed",
              bottom: "80px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
              },
              color: "#24d366",
            }}
          >
            <WhatsAppIcon sx={{ width: "50px", height: "50px" }} />
          </IconButton>
        </>
      </BodyDocument>
    </>
  );
};

export default Content;
