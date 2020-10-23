import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: none;
  width: 8.5em;
  background: var(--dark-pri);
`;

const Items = styled(Link)`
  align-self: flex-start;
  color: var(--dark-bg);
  text-decoration: none;
`;
