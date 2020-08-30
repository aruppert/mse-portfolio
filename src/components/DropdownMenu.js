import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled("div")`
  width: 150px;
  background: #fff;
  display: none;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Items = styled(Link)`
  text-decoration: none;
  align-self: flex-start;
  color: ${(props) => props.theme.colors.background};
`;

export default function DropdownMenu() {
  function loseFocus() {
    document.activeElement.blur();
  }
  return (
    <Container>
      <Items to="/detailUXUI" onClick={() => loseFocus()}>
        UX/UI.
      </Items>
      <Items to="/detailVideo" onClick={() => loseFocus()}>
        Videography.
      </Items>
      <Items to="/detailFoto" onClick={() => loseFocus()}>
        Photography.
      </Items>
      <Items to="/detailGraphic" onClick={() => loseFocus()}>
        Graphic design.
      </Items>
    </Container>
  );
}
