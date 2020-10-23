import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import logo from "../graphics/logo.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  let sidebarTitle = "";
  let pathname = useLocation().pathname;
  switch (pathname) {
    case "/":
      sidebarTitle = "Home.";
      break;
    case "/work":
      sidebarTitle = "Work.";
      break;
    case "/detailUXUI":
      sidebarTitle = "UX/UI.";
      break;
    case "/detailVideo":
      sidebarTitle = "Videography.";
      break;
    case "/detailFoto":
      sidebarTitle = "Photography.";
      break;
    case "/detailGraphic":
      sidebarTitle = "Graphic Design.";
      break;
    case "/aboutMe":
      sidebarTitle = "About Me.";
      break;
    case "/contact":
      sidebarTitle = "Contact.";
      break;
    case "/imprint":
      sidebarTitle = "Impressum.";
      break;
    default:
      sidebarTitle = "";
      break;
  }

  return (
    <>
      <Headerbar>
        <LogoLink to="/">
          <img src={logo} alt="Logo" />
        </LogoLink>
        <ResponsivePlaceholder />
        <Navbar>
          <WorkWrapper pathname={pathname}>
            Work.
            <DropdownMenu />
          </WorkWrapper>
          <AboutLink pathname={pathname} to="/aboutMe">
            About me.
          </AboutLink>
          <ContactLink pathname={pathname} to="/contact">
            Contact.
          </ContactLink>
        </Navbar>
      </Headerbar>
      <Placeholder></Placeholder>
      <Sidebar>{sidebarTitle}</Sidebar>
    </>
  );
}

const Headerbar = styled.div`
  position: fixed;
  z-index: 300;
  display: flex;
  width: inherit;
  min-width: 375px;
  width: 100%;
  height: 48px;
  padding: 0 0 0.5rem;
  background: var(--dark-bg);
`;

const Placeholder = styled.div`
  height: 48px;
`;
const ResponsivePlaceholder = styled.div`
  flex-grow: 100;
`;

const Navbar = styled.nav`
  display: flex;
  flex-grow: 99;
  min-width: 300px;
  max-width: 460px;
  justify-content: space-between;
  height: 100%;
  padding: 0 1rem;
  margin: 0 5px;
  font-weight: 400;
`;

const NavLink = styled(Link)`
  position: relative;
  align-self: flex-end;
  color: var(--dark-pri);
  text-decoration: none;
`;

const AboutLink = styled(NavLink)`
  color: ${(props) =>
    props.pathname === "/aboutMe" ? "var(--dark-sec)" : "var(--dark-pri)"};
`;

const ContactLink = styled(NavLink)`
  color: ${(props) =>
    props.pathname === "/contact" ? "var(--dark-sec)" : "var(--dark-pri)"};
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  margin: 0 0 0 0.8rem;
`;

const WorkPathArray = [
  "/work",
  "/detailUXUI",
  "/detailVideo",
  "/detailFoto",
  "/detailGraphic",
];

const WorkWrapper = styled.button`
  position: relative;
  align-self: flex-end;
  border: none;
  margin: 0;
  padding: 0;
  background: var(--dark-bg);
  color: ${(props) =>
    WorkPathArray.includes(props.pathname)
      ? "var(--dark-sec)"
      : "var(--dark-pri)"};
  font-size: inherit;
  font-family: inherit;
  &:focus-within > div {
    display: flex;
    animation: fadeIn 1s both;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const Sidebar = styled.aside`
  position: fixed;
  height: auto;
  width: 25px;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  font-weight: 200;
  transform: rotate(180deg);
`;
