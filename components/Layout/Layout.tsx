import { Container } from "@mui/system";
import { FC, ReactElement } from "react";
import Navbar from "../Navbar/NavbarDeskop/Molecules/Nabvar";

interface IContentProps {
  children?: ReactElement;
}

const Content: FC<IContentProps> = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <>{children}</>
    </>
  );
};

export default Content;
