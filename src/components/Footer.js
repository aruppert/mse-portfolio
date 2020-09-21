import React from "react";
import styled from "@emotion/styled";
// import { Link } from "react-router-dom";

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 4rem 1.2rem 0.5rem;
  font-weight: 400;
`;

// const Navbutton = styled(Link)`
//   text-decoration: none;
//   color: ${(props) => props.theme.colors.prim};
// `;

export default function Footer() {
  return <Navbar>{/* <Navbutton>Impressum.</Navbutton> */}</Navbar>;
}
