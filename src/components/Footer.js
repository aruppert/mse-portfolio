import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  position: absolute;
  bottom: -80;
  right: 0;
  /* height: 100%; */
  margin: 3rem 0.5rem 0;
  display: flex;
  font-weight: 400;
  justify-content: flex-end;
`;

const Navbutton = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.prim};
`;

export default function Footer() {
  return (
    <Navbar>
      <Navbutton>Impressum.</Navbutton>
    </Navbar>
  );
}
