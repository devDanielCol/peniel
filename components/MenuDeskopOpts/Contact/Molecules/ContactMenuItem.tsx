import { Box } from "@mui/material";
import ContactOpt from "../Atoms/ContactOpt";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";

const ToolpitOpt = () => {
  return (
    <Box sx={{ width: "300px", minHeight: "400px", px: 1.5, py: 4 }}>
      <ContactOpt
        icon={<FacebookRoundedIcon />}
        title="Facebook"
        description="Conecta con nostros en facebook"
      />
      <ContactOpt
        icon={<InstagramIcon />}
        title="Instagram"
        description="Mira imagenes y videos"
      />
      <ContactOpt
        icon={<WhatsAppIcon />}
        title="WhatsApp"
        description="Envianos un mensaje"
      />
      <ContactOpt
        icon={<AlternateEmailRoundedIcon />}
        title="Email"
        description="Solicitanos informacion"
      />{" "}
      <ContactOpt
        icon={<PermPhoneMsgRoundedIcon />}
        title="Teléfono"
        description="Agenda una consulta"
      />
    </Box>
  );
};

export default ToolpitOpt;
