import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  height: 100%;
  margin: 20px 5px 0;
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
