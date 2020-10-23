import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Navbar>
      <Navbutton to="/imprint">Impressum.</Navbutton>
    </Navbar>
  );
}

const Navbar = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: 4rem 1.2rem 0.5rem;
  font-weight: 400;
`;

const Navbutton = styled(Link)`
  text-decoration: none;
  color: var(--dark-pri);
`;
