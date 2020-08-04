import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: ${(props) => props.theme.colors.sec};
  height: 12px;
`;

export default function DotFull(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 66.5 66.5">
      <circle cx="33.25" cy="33.25" r="33.25" />
    </Svg>
  );
}
