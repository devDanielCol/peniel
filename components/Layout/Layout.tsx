import { FC, ReactElement } from "react";
import NavbarDeskop from "../Navbar/NavbarDeskop/Molecules/NabvarDeskop";
import NavbarMobile from "../Navbar/NavbarMobile/Molecules/NavBarMobile";

interface IContentProps {
  children?: ReactElement;
}

const Content: FC<IContentProps> = ({ children }) => {
  return (
    <>
      <NavbarDeskop />
      <NavbarMobile />
      <>{children}</>
    </>
  );
};

export default Content;
