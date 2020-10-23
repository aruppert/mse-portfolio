import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: var(--dark-sec);
  height: 12px;
  position: absolute;
  top: 130%;
  right: 10%;
  z-index: 300;
`;

export default function DotFull(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 66.5 66.5">
      <circle cx="33.25" cy="33.25" r="33.25" />
    </Svg>
  );
}
