import React, { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import styledComponents from "styled-components";
const styled = styledComponents.default || styledComponents;

// Components existants
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(0);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          {/* Le logo renvoie vers la page d'accueil */}
          <Link to="/" className="pointer flexNullCenter">
            <LogoIcon />
          </Link>
          <BurgerWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurgerWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link to="/" style={{ padding: "10px 15px" }}>
                Accueil
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Forum" style={{ padding: "10px 15px" }}>
                Forum
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Activités" style={{ padding: "10px 15px" }}>
                Activités
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Contact" style={{ padding: "10px 15px" }}>
                Nous connaître
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Adherer" style={{ padding: "10px 15px" }}>
                Adhérer
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Promouvoir" style={{ padding: "10px 15px" }}>
                Promouvoir
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Apprendre" style={{ padding: "10px 15px" }}>
                Apprendre
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Enseigner" style={{ padding: "10px 15px" }}>
                Enseigner
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/Divers" style={{ padding: "10px 15px" }}>
                Divers
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurgerWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
