import { Box } from "@mui/material";
import { ReactElement } from "react";

interface IBodyDocumentProps {
  children: ReactElement;
}

const BodyDocument = ({ children }: IBodyDocumentProps) => {
  return <Box>{children}</Box>;
};

export default BodyDocument;
