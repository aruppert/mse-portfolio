import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Headerbar = styled.div`
  background: #231d24;
  height: 48px;
  position: fixed;
  width: 100%;
  z-index: 300;
`;

const Placeholder = styled.div`
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
  position: relative;
  align-self: flex-end;
  &::first-letter {
  }
  color: ${(props) => props.theme.colors.prim};
`;

const Wrapper = styled.button`
  position: relative;
  align-self: flex-end;
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
  font-size: inherit;
  margin: 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  border: none;
  padding: 0;
`;

export default function Header() {
  return (
    <>
      <Headerbar>
        <Navbar>
          <Navbutton to="/">Logo.</Navbutton>
          <Wrapper>
            Work.
            <DropdownMenu />
          </Wrapper>
          <Navbutton>About me.</Navbutton>
          <Navbutton>Contact.</Navbutton>
        </Navbar>
      </Headerbar>
      <Placeholder></Placeholder>
    </>
  );
}
