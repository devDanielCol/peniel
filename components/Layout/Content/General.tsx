import { FC, ReactNode } from "react";
import NavbarDeskop from "../../Navbar/NavbarDeskop/Molecules/NabvarDeskop";
import NavbarMobile from "../../Navbar/NavbarMobile/Molecules/NavBarMobile";
import BodyDocument from "../Body";
import FooterDocument from "../Footer";
import HeadDocument from "../Head";

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
        </>
      </BodyDocument>
    </>
  );
};

export default Content;
