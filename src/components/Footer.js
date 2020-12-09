import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Navbar>
      <NavLink to="/imprint" aria-label="Link to the imprint">
        Impressum.
      </NavLink>
    </Navbar>
  );
}

const Navbar = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: 4rem 1.2rem 0.5rem;
  font-weight: 400;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-pri);
`;
