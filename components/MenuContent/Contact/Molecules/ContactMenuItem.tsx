import { Box } from "@mui/material";
import ContactOpt from "../Atoms/ContactOpt";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";

export const socialMedia = [
  {
    name: "Facebook",
    icon: <FacebookRoundedIcon />,
    description: "Siguenos y comparte",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    description: "Mira imagenes y videos",
  },
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    description: "Envianos un mensaje",
  },
  {
    name: "Email",
    icon: <AlternateEmailRoundedIcon />,
    description: "Solicitanos informacion",
  },
  {
    name: "Telefono",
    icon: <PermPhoneMsgRoundedIcon />,
    description: "Agenda una asesoria",
  },
];

const ToolpitOpt = () => {
  return (
    <Box
      sx={{
        width: "300px",
        minHeight: "400px",
        px: 2,
        py: 4,
      }}
    >
      {socialMedia.map(({ name, description, icon }, i) => (
        <ContactOpt
          key={i}
          icon={icon}
          title={name}
          description={description}
        />
      ))}
    </Box>
  );
};

export default ToolpitOpt;
