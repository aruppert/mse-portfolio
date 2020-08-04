import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Headerbar = styled.div`
  background: #231d24;
  height: 48px;
`;

const Navbar = styled.nav`
  height: 100%;
  margin: 0 5px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
`;

const Navbutton = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
  color: ${(props) => props.theme.colors.prim};
`;

export default function Header() {
  return (
    <Headerbar>
      <Navbar>
        <Navbutton to="/">Logo.</Navbutton>
        <Navbutton to="/work">Work.</Navbutton>
        <Navbutton>About me.</Navbutton>
        <Navbutton>Contact.</Navbutton>
      </Navbar>
    </Headerbar>
  );
}
